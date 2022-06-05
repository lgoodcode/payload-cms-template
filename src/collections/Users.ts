import { ADMIN, SUPER_USER, USER } from '../constants/roles'
import accessControl from '../lib/accessControl'
import uniqueId from '../hooks/uniqueId'
import type { CollectionConfig } from '../types/payload'

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,50}$/

const Users: CollectionConfig = {
	slug: 'users',
	auth: true,
	admin: {
		useAsTitle: 'name',
		disableDuplicate: true,
		description: 'Manage users.',
		defaultColumns: ['name', 'role', 'email', 'id'],
	},
	access: {
		create: ({ req: { user } }) => accessControl(user, ADMIN),
		read: ({ req: { user } }) => accessControl(user, USER),
		update: ({ req: { user } }) => accessControl(user, USER),
		delete: ({ req: { user } }) => accessControl(user, ADMIN),
		unlock: ({ req: { user } }) => accessControl(user, ADMIN),
	},
	hooks: {
		/**
		 * Cannot modify the password fields so we work around it by using the
		 * beforeValidate hook which runs before the default validation runs and
		 * we can throw errors to display the message which also prevents the
		 * operation from completing.
		 */
		beforeValidate: [
			({ data, operation, originalDoc, req: { user } }) => {
				/**
				 * Creating new accounts
				 */
				if (operation === 'create') {
					// Prevent admins from creating superusers
					if (user.role === ADMIN && data.role === SUPER_USER) {
						throw new Error('Unauthorized access')
					}
					// Prevent weak passwords
					if (data.password && !passwordRegex.test(data.password)) {
						throw new Error(
							'Invalid password. Must be at least 8 characters, contain an uppercase letter, a digit, and a special character.'
						)
					}
				}
				/**
				 * Updating users
				 */
				if (operation === 'update') {
					// Prevent users from modifying roles and admins from elevating to superuser
					if (
						(user.role === USER && originalDoc.role !== USER) ||
						(user.role === ADMIN && originalDoc.role === SUPER_USER)
					) {
						throw new Error('Unauthorized access')
					}
					// If changing password
					if (data.password) {
						// If changing current user password, validate
						if (user.id === originalDoc._id && !passwordRegex.test(data.password)) {
							throw new Error(
								'Invalid password. Must be at least 8 characters, contain an uppercase letter, a digit, and a special character.'
							)
						}
						// Prevent a base user from changing other users password and admins from modifying a superuser
						if (
							user.id !== originalDoc._id &&
							(user.role === USER || (user.role === ADMIN && originalDoc.role === SUPER_USER))
						) {
							throw new Error('Unauthorized access')
						}
					}
				}

				return data
			},
		],
		beforeChange: [uniqueId],
	},
	fields: [
		{
			name: 'name',
			type: 'text',
			required: true,
		},
		{
			name: 'role',
			type: 'radio',
			required: true,
			options: [
				{
					label: 'User',
					value: USER,
				},
				{
					label: 'Admin',
					value: ADMIN,
				},
				{
					label: 'Super User',
					value: SUPER_USER,
				},
			],
		},
	],
}

export default Users

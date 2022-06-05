import type { CollectionConfig } from '../types/payload'
import accessControl from '../lib/accessControl'
import { ADMIN, USER } from '../constants/roles'
import uniqueId from '../hooks/uniqueId'

/**
 * This collection is used to contain all submitted contact forms which will
 * be readonly so they aren't modified.
 */
const Submissions: CollectionConfig = {
	slug: 'submissions',
	admin: {
		disableDuplicate: true,
		description: 'User submitted data.',
		defaultColumns: ['name', 'submitted', 'source'],
	},
	/**
	 * We only want public submissions from the frontend, preventing users from
	 * creating a non-client submission. Only allow authenticated users to be
	 * able to read. Prevent any modifications by disabling updates and only
	 * allow admins to delete.
	 */
	access: {
		create: ({ req: { user } }) => !user,
		read: ({ req: { user } }) => accessControl(user, USER),
		update: () => false,
		delete: ({ req: { user } }) => accessControl(user, ADMIN),
	},
	hooks: {
		beforeChange: [uniqueId],
	},
	fields: [
		{
			name: 'submitted',
			label: 'Submitted',
			type: 'text',
			admin: {
				readOnly: true,
				position: 'sidebar',
			},
			hooks: {
				beforeChange: [() => new Date().toLocaleString()],
			},
		},
		{
			name: 'source',
			label: 'Source',
			type: 'text',
			required: true,
			admin: {
				readOnly: true,
				position: 'sidebar',
			},
		},
		{
			name: 'name',
			label: 'Name',
			type: 'text',
			required: true,
			admin: {
				readOnly: true,
			},
		},
		{
			name: 'email',
			label: 'Email',
			type: 'text',
			required: true,
			admin: {
				readOnly: true,
			},
		},
		{
			name: 'phone',
			label: 'Phone',
			type: 'text',
			admin: {
				readOnly: true,
			},
		},
		{
			name: 'message',
			label: 'Message',
			type: 'textarea',
			required: true,
			admin: {
				readOnly: true,
			},
		},
	],
}

export default Submissions

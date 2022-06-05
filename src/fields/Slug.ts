import type { Field } from 'payload/types'
import { ADMIN, USER } from '../constants/roles'
import accessControl from '../lib/accessControl'
import formatSlug from '../lib/formatSlug'

const Slug = (field: string): Field => ({
	name: 'slug',
	label: 'Page Slug',
	type: 'text',
	admin: {
		position: 'sidebar',
		readOnly: true,
	},
	access: {
		create: ({ req: { user } }) => accessControl(user, USER),
		read: () => true,
		update: ({ req: { user } }) => accessControl(user, ADMIN),
	},
	hooks: {
		beforeValidate: [formatSlug(field)],
	},
})

export default Slug

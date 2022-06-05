import type { Field } from 'payload/types'
import createdBy from '../hooks/createdBy'

const CreatedBy: Field = {
	name: 'createdBy',
	label: 'Created By',
	type: 'text',
	admin: {
		readOnly: true,
		position: 'sidebar',
	},
	hooks: {
		beforeChange: [createdBy],
	},
}

export default CreatedBy

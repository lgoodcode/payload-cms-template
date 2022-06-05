import type { Field } from 'payload/types'
import lastModifiedBy from '../hooks/lastModifiedBy'

const LastModifiedBy: Field = {
	name: 'lastModifiedBy',
	label: 'Last Modified By',
	type: 'text',
	admin: {
		readOnly: true,
		position: 'sidebar',
	},
	hooks: {
		beforeChange: [lastModifiedBy],
	},
}

export default LastModifiedBy

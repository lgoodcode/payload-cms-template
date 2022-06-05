import type { Field } from 'payload/types'
import updated from '../hooks/updated'

const Updated: Field = {
	name: 'updated',
	type: 'text',
	admin: {
		hidden: true,
		readOnly: true,
	},
	hooks: {
		beforeChange: [updated],
	},
}

export default Updated

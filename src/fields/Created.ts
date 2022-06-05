import type { Field } from 'payload/types'
import created from '../hooks/created'

const Created: Field = {
	name: 'created',
	type: 'text',
	admin: {
		hidden: true,
		readOnly: true,
	},
	hooks: {
		beforeChange: [created],
	},
}

export default Created

import type { Block } from 'payload/types'

const Text: Block = {
	slug: 'text',
	labels: {
		singular: 'Text',
		plural: 'Texts',
	},
	fields: [
		{
			name: 'text',
			type: 'text',
			required: true,
		},
	],
}

export default Text

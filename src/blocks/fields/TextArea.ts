import type { Block } from 'payload/types'

const TextArea: Block = {
	slug: 'textarea',
	labels: {
		singular: 'Text Area',
		plural: 'Text Areas',
	},
	fields: [
		{
			name: 'textarea',
			type: 'textarea',
			required: true,
		},
	],
}

export default TextArea

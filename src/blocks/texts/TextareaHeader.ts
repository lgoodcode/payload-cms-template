import type { Block } from 'payload/types'

const TextareaHeader: Block = {
	slug: 'textarea-header',
	labels: {
		singular: 'Textarea with Header',
		plural: 'Textarea with Header',
	},
	fields: [
		{
			name: 'header',
			type: 'text',
			required: true,
		},
		{
			name: 'text',
			type: 'textarea',
			required: true,
		},
	],
}

export default TextareaHeader

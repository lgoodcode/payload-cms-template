import type { Block } from 'payload/types'

const TextHeader: Block = {
	slug: 'text-header',
	labels: {
		singular: 'Text with Header',
		plural: 'Texts with Header',
	},
	fields: [
		{
			name: 'header',
			type: 'text',
			required: true,
		},
		{
			name: 'text',
			type: 'text',
			required: true,
		},
	],
}

export default TextHeader

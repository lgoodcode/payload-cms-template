import type { Block } from 'payload/types'

const MultipleTextHeader: Block = {
	slug: 'multiple-text-header',
	labels: {
		singular: 'Multiple Texts with Header',
		plural: 'Multiple Texts with Header',
	},
	fields: [
		{
			name: 'header',
			type: 'text',
			required: true,
		},
		{
			name: 'texts',
			type: 'array',
			minRows: 1,
			required: true,
			fields: [
				{
					name: 'text',
					type: 'text',
					required: true,
				},
			],
		},
	],
}

export default MultipleTextHeader

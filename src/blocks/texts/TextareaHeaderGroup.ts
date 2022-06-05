import type { Block } from 'payload/types'

const TextareaHeaderGroup: Block = {
	slug: 'textarea-header-group',
	labels: {
		singular: 'Textarea Header Group',
		plural: 'Textarea Header Groups',
	},
	fields: [
		{
			name: 'groups',
			type: 'array',
			minRows: 1,
			required: true,
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
		},
	],
}

export default TextareaHeaderGroup

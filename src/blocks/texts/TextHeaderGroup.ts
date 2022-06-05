import type { Block } from 'payload/types'

const TextHeaderGroup: Block = {
	slug: 'text-header-group',
	labels: {
		singular: 'Text Header Group',
		plural: 'Text Header Groups',
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
					type: 'text',
					required: true,
				},
			],
		},
	],
}

export default TextHeaderGroup

import type { Block } from 'payload/types'

const TextGroup: Block = {
	slug: 'text-groups',
	labels: {
		singular: 'Text Groups',
		plural: 'Text Groups',
	},
	fields: [
		{
			name: 'groups',
			type: 'array',
			required: true,
			fields: [
				{
					name: 'text',
					type: 'textarea',
					required: true,
				},
			],
		},
	],
}

export default TextGroup

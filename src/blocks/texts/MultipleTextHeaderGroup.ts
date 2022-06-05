import type { Block } from 'payload/types'

const MultipleTextHeaderGroup: Block = {
	slug: 'multiple-text-header-group',
	labels: {
		singular: 'Multiple Texts Group with Headers',
		plural: 'Multiple Texts Group with Headers',
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
		},
	],
}

export default MultipleTextHeaderGroup

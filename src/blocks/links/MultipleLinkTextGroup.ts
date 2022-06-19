import type { Block } from 'payload/types'

const MulitpleLinkTextGroup: Block = {
	slug: 'multiple-link-text-group',
	labels: {
		singular: 'Multiple Link Text Group',
		plural: 'Multiple Link Text Groups',
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
					name: 'links',
					label: 'Link or Text',
					type: 'array',
					minRows: 1,
					required: true,
					fields: [
						{
							name: 'isLink',
							type: 'checkbox',
							defaultValue: true,
						},
						{
							name: 'text',
							type: 'text',
							required: true,
						},
						{
							name: 'url',
							label: 'URL',
							type: 'text',
							required: true,
							admin: {
								condition: (_, siblingData) => siblingData.isLink,
							},
						},
					],
				},
			],
		},
	],
}

export default MulitpleLinkTextGroup

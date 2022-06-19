import type { Block } from 'payload/types'

const LinkTextGroup: Block = {
	slug: 'link-text-group',
	labels: {
		singular: 'Link Text Group',
		plural: 'Link Text Groups',
	},
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
					type: 'text',
					admin: {
						condition: (_, siblingData) => siblingData.isLink,
					},
				},
			],
		},
	],
}

export default LinkTextGroup

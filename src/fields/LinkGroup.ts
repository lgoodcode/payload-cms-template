import type { Field } from 'payload/types'
import type { GroupField } from 'payload/dist/fields/config/types'
import Link from './Link'

const LinkGroup = (options?: Partial<GroupField>): Field => ({
	...options,
	name: 'linkGroup',
	label: 'Link Group',
	type: 'group',
	fields: [
		{
			name: 'heading',
			label: 'Group Heading',
			type: 'text',
			required: true,
		},
		{
			name: 'link',
			type: 'array',
			minRows: 1,
			labels: {
				singular: 'Link',
				plural: 'Links',
			},
			fields: [Link('both')],
		},
	],
})

export default LinkGroup

import type { Block } from 'payload/types'
import LinkField from '../fields/Link'

const Links: Block = {
	slug: 'links',
	labels: {
		singular: 'Multiple Links',
		plural: 'Multiple Links',
	},
	fields: [
		{
			name: 'links',
			label: 'Link',
			type: 'array',
			minRows: 1,
			required: true,
			fields: [LinkField('both')],
		},
	],
}

export default Links

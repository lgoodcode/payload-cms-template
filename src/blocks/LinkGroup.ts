import type { Block } from 'payload/types'
import LinkGroupField from '../fields/LinkGroup'

const LinkGroup: Block = {
	slug: 'link-group',
	labels: {
		singular: 'Link Group',
		plural: 'Link Groups',
	},
	fields: [LinkGroupField()],
}

export default LinkGroup

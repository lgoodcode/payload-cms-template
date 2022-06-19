import type { Block } from 'payload/types'
import LinkField from '../../fields/Link'

const Link: Block = {
	slug: 'link',
	labels: {
		singular: 'Link',
		plural: 'Links',
	},
	fields: [LinkField('both')],
}

export default Link

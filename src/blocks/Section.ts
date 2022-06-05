import type { Block } from 'payload/types'
import Blocks from '.'

const Section: Block = {
	slug: 'section',
	labels: {
		singular: 'Section',
		plural: 'Sections',
	},
	fields: [
		{
			name: 'blocks',
			label: 'Blocks',
			type: 'blocks',
			minRows: 1,
			blocks: Blocks,
			required: true,
		},
	],
}

export default Section

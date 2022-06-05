import type { Block } from 'payload/types'
import HeadingField from '../fields/Heading'

const Headings: Block = {
	slug: 'headings',
	labels: {
		singular: 'Headings',
		plural: 'Headings',
	},
	fields: [
		{
			name: 'headings',
			type: 'array',
			required: true,
			fields: [HeadingField()],
		},
	],
}

export default Headings

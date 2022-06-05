import type { Block } from 'payload/types'
import HeadingField from '../fields/Heading'

const Heading: Block = {
	slug: 'heading',
	labels: {
		singular: 'Heading',
		plural: 'Headings',
	},
	fields: [HeadingField()],
}

export default Heading

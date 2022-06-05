import type { Block } from 'payload/types'
import Heading from '../fields/Heading'
import Image from '../fields/Image'
import Link from '../fields/Link'

const Hero: Block = {
	slug: 'hero',
	labels: {
		singular: 'Hero',
		plural: 'Heroes',
	},
	fields: [
		{
			name: 'images',
			label: 'Images',
			type: 'array',
			fields: [Image({ required: true })],
		},
		{
			name: 'headings',
			label: 'Headings',
			type: 'array',
			minRows: 0,
			maxRows: 4,
			fields: [Heading()],
		},
		{
			name: 'text',
			label: 'Text',
			type: 'array',
			minRows: 0,
			maxRows: 4,
			fields: [
				{
					name: 'body',
					label: 'Body Text',
					type: 'textarea',
					required: true,
				},
			],
		},
		{
			name: 'ctas',
			label: 'Call To Actions',
			type: 'array',
			fields: [Link('both')],
		},
	],
}

export default Hero

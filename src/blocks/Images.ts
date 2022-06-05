import type { Block } from 'payload/types'
import ImageField from '../fields/Image'

const Image: Block = {
	slug: 'images',
	labels: {
		singular: 'Multiple Images',
		plural: 'Multiple Images',
	},
	fields: [
		{
			name: 'images',
			labels: {
				singular: 'Image',
				plural: 'Images',
			},
			type: 'array',
			required: true,
			fields: [ImageField()],
		},
	],
}

export default Image

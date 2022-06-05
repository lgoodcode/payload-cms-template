import type { Block } from 'payload/types'
import ImageField from '../fields/Image'

const Image: Block = {
	slug: 'image',
	labels: {
		singular: 'Image',
		plural: 'Images',
	},
	fields: [ImageField()],
}

export default Image

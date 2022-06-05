import type { Block } from 'payload/types'
import ImageCustomField from '../fields/ImageCustom'

const ImageText: Block = {
	slug: 'image-custom',
	labels: {
		singular: 'Image with Text and/or Link',
		plural: 'Images with Text and/or Link',
	},
	fields: [ImageCustomField()],
}

export default ImageText

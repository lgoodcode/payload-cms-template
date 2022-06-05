import type { Block } from 'payload/types'
import ImageCustomField from '../fields/ImageCustom'

const ImagesCustom: Block = {
	slug: 'image-custom-multiple',
	labels: {
		singular: 'Multiple Images with Text and/or Link',
		plural: 'Multiple Images with Text and/or Link',
	},
	fields: [
		{
			name: 'images',
			type: 'array',
			minRows: 1,
			required: true,
			fields: [ImageCustomField()],
		},
	],
}

export default ImagesCustom

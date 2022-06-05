import type { Field } from 'payload/types'
import type { GroupField } from 'payload/dist/fields/config/types'
import Link from './Link'

const ImageCustom = (options?: Partial<GroupField>): Field => ({
	...options,
	name: 'imageField',
	label: 'Image with Text and/or Link',
	type: 'group',
	fields: [
		{
			name: 'image',
			label: 'Image',
			type: 'upload',
			relationTo: 'media',
			required: true,
		},
		{
			name: 'hasText',
			label: 'Text',
			type: 'checkbox',
			defaultValue: false,
		},
		{
			name: 'texts',
			type: 'array',
			required: true,
			admin: {
				condition: (_, siblingData) => Boolean(siblingData.hasText),
			},
			fields: [
				{
					name: 'text',
					type: 'text',
					required: true,
				},
			],
		},
		{
			name: 'hasLink',
			label: 'Link',
			type: 'checkbox',
			defaultValue: false,
		},
		{
			name: 'link',
			type: 'group',
			fields: [Link('both')],
			admin: {
				condition: (_, siblingData) => Boolean(siblingData.hasLink),
			},
		},
	],
})

export default ImageCustom

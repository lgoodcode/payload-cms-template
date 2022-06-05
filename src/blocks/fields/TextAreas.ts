import type { Block } from 'payload/types'

const TextAreas: Block = {
	slug: 'textareas',
	labels: {
		singular: 'Text Areas',
		plural: 'Text Areass',
	},
	fields: [
		{
			name: 'texts',
			type: 'array',
			required: true,
			fields: [
				{
					name: 'text',
					type: 'textarea',
					required: true,
				},
			],
		},
	],
}

export default TextAreas

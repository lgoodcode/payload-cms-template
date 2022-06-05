import type { Block } from 'payload/types'

const Email: Block = {
	slug: 'email',
	labels: {
		singular: 'Email',
		plural: 'Emails',
	},
	fields: [
		{
			name: 'email',
			type: 'email',
			required: true,
		},
	],
}

export default Email

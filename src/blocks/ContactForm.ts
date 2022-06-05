import type { Block } from 'payload/types'

const ContactForm: Block = {
	slug: 'contact-form',
	labels: {
		singular: 'Contact Form',
		plural: 'Contact Forms',
	},
	fields: [
		{
			name: 'useForm',
			type: 'checkbox',
			required: true,
			admin: {
				description:
					'If checked, the page will then display a contact form that will allow users to submit a message. Only valid on a page that was built with it.',
			},
		},
	],
}

export default ContactForm

import { GlobalConfig } from '../types/payload'
import { defaultGlobalAccess } from '../lib/accessControl'
import Links from '../blocks/links'
import Texts from '../blocks/texts'
import LastModifiedBy from '../fields/LastModifiedBy'
import Phone from '../fields/Phone'

const ContactInfo: GlobalConfig = {
	slug: 'contact-info',
	label: 'Contact Information',
	access: defaultGlobalAccess,
	fields: [
		LastModifiedBy,
		Phone(),
		{
			name: 'email',
			label: 'Email',
			type: 'email',
		},
		{
			name: 'address',
			label: 'Address',
			type: 'text',
		},
		{
			name: 'other',
			label: 'Other Information',
			type: 'blocks',
			blocks: [...Links, ...Texts],
		},
	],
}

export default ContactInfo

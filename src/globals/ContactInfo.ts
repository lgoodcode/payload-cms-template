import { GlobalConfig } from '../types/payload'
import { defaultGlobalAccess } from '../lib/accessControl'
import Text from '../blocks/fields/Text'
import TextArea from '../blocks/fields/TextArea'
import LinkBlock from '../blocks/Link'
import LinkGroup from '../blocks/LinkGroup'
import TextGroups from '../blocks/texts/TextGroups'
import Phone from '../fields/Phone'

const ContactInfo: GlobalConfig = {
	slug: 'contact-info',
	label: 'Contact Information',
	access: defaultGlobalAccess,
	fields: [
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
			blocks: [Text, TextArea, TextGroups, LinkBlock, LinkGroup],
		},
	],
}

export default ContactInfo

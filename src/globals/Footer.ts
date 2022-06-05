import { GlobalConfig } from '../types/payload'
import { defaultGlobalAccess } from '../lib/accessControl'
import Texts from '../blocks/texts'
import Link from '../blocks/Link'
import Links from '../blocks/Links'
import LinkGroup from '../blocks/LinkGroup'

const Footer: GlobalConfig = {
	slug: 'footer',
	label: 'Footer',
	admin: {
		description: 'The information that will be displayed at the bottom of each page.',
	},
	access: defaultGlobalAccess,
	fields: [
		{
			name: 'copyright',
			label: 'Copyright',
			type: 'text',
			required: true,
		},
		{
			name: 'other',
			label: 'Other Content',
			type: 'blocks',
			required: true,
			blocks: [...Texts, Link, Links, LinkGroup],
		},
	],
}

export default Footer

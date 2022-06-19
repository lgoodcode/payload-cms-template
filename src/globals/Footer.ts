import { GlobalConfig } from '../types/payload'
import { defaultGlobalAccess } from '../lib/accessControl'
import Links from '../blocks/links'
import Texts from '../blocks/texts'

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
			blocks: [...Links, ...Texts],
		},
	],
}

export default Footer

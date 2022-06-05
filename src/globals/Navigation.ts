import { GlobalConfig } from '../types/payload'
import { defaultGlobalAccess } from '../lib/accessControl'
import Link from '../fields/Link'

const Navigation: GlobalConfig = {
	slug: 'nav',
	label: 'Navigation',
	admin: {
		description:
			'The navigation links in the navbar at the top of the page. The last nav link will be displayed as a button.',
	},
	access: defaultGlobalAccess,
	fields: [
		{
			name: 'links',
			label: 'Links',
			type: 'array',
			fields: [Link('page')],
		},
	],
}

export default Navigation

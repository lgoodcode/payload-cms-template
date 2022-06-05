import { GlobalConfig } from '../types/payload'
import { defaultGlobalAccess } from '../lib/accessControl'
import Link from '../fields/Link'

const SocialMedia: GlobalConfig = {
	slug: 'social-media',
	label: 'Social Media',
	access: defaultGlobalAccess,
	fields: [
		{
			name: 'links',
			type: 'array',
			labels: {
				singular: 'Link',
				plural: 'Links',
			},
			fields: [Link('url')],
		},
	],
}

export default SocialMedia

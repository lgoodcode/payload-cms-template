import { GlobalConfig } from 'payload/types'
import { defaultGlobalAccess } from '../lib/accessControl'

const Seo: GlobalConfig = {
	slug: 'seo',
	admin: {
		description: 'Search engine optimization',
	},
	access: defaultGlobalAccess,
	fields: [
		{
			name: 'siteName',
			label: 'Site Name',
			type: 'text',
			required: true,
			admin: {
				description:
					'This is the primary title that will be displayed for the site. Titles used in pages will be concatenated to this.',
			},
		},
		{
			name: 'description',
			type: 'textarea',
			required: true,
		},
		{
			name: 'favicon',
			type: 'upload',
			relationTo: 'media',
			required: true,
		},
		{
			name: 'image',
			label: 'Image',
			type: 'upload',
			relationTo: 'media',
			admin: {
				description:
					'This image will be viewed on search engines and scaled for mobile and social media such as Twitter.',
			},
		},
	],
}

export default Seo

import type { CollectionConfig } from 'payload/types'
import { ADMIN, USER } from '../constants/roles'
import accessControl from '../lib/accessControl'
import uniqueId from '../hooks/uniqueId'
import Blocks from '../blocks'
import Hero from '../blocks/Hero'
import Section from '../blocks/Section'
import Slug from '../fields/Slug'
import LastModifiedBy from '../fields/LastModifiedBy'
import CreatedBy from '../fields/CreatedBy'

const Pages: CollectionConfig = {
	slug: 'pages',
	admin: {
		useAsTitle: 'page',
		disableDuplicate: true,
		description: 'Create a page with components',
		defaultColumns: ['page', '_status', 'lastModifiedBy', 'updatedAt'],
	},
	access: {
		create: ({ req: { user } }) => accessControl(user, ADMIN),
		read: () => true,
		update: ({ req: { user } }) => accessControl(user, USER),
		delete: ({ req: { user } }) => accessControl(user, ADMIN),
	},
	hooks: {
		beforeChange: [uniqueId],
	},
	versions: {
		maxPerDoc: 5,
		retainDeleted: true,
		drafts: {
			autosave: {
				interval: 5000, // 5 seconds
			},
		},
	},
	fields: [
		Slug('page'),
		LastModifiedBy,
		CreatedBy,
		{
			name: 'page',
			type: 'text',
			required: true,
		},
		{
			name: 'meta',
			type: 'group',
			label: 'Page Meta',
			fields: [
				{
					name: 'title',
					type: 'text',
					admin: {
						description:
							'Only title the page itself. It will be appended to the site name given in the SEO global.',
					},
				},
				{
					name: 'description',
					type: 'textarea',
				},
				{
					name: 'keywords',
					type: 'text',
				},
				{
					name: 'image',
					type: 'upload',
					relationTo: 'media',
				},
			],
		},
		{
			name: 'content',
			type: 'blocks',
			minRows: 1,
			maxRows: 20,
			blocks: Blocks.concat(Hero, Section),
			required: true,
		},
	],
}

export default Pages

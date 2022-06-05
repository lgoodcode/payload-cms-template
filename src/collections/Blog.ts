import type { CollectionConfig } from 'payload/types'
import { ADMIN, USER } from '../constants/roles'
import accessControl from '../lib/accessControl'
import uniqueId from '../hooks/uniqueId'
import Slug from '../fields/Slug'
import Created from '../fields/Created'
import CreatedBy from '../fields/CreatedBy'
import Updated from '../fields/Updated'
import LastModifiedBy from '../fields/LastModifiedBy'
import ImageCustom from '../fields/ImageCustom'
import Image from '../fields/Image'

const Blogs: CollectionConfig = {
	slug: 'blog',
	admin: {
		useAsTitle: 'title',
		disableDuplicate: true,
		defaultColumns: ['title', 'createdBy', 'lastModifiedBy', 'updatedAt'],
	},
	access: {
		create: ({ req: { user } }) => accessControl(user, USER),
		read: () => true,
		update: ({ req: { user } }) => accessControl(user, ADMIN),
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
		Slug('title'),
		LastModifiedBy,
		CreatedBy,
		Created,
		Updated,
		{
			name: 'title',
			type: 'text',
			required: true,
		},
		{
			name: 'meta',
			type: 'group',
			label: 'Blog Meta',
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
			],
		},
		Image({ required: true }),
		{
			name: 'readTime',
			type: 'number',
			min: 1,
			required: true,
			admin: {
				position: 'sidebar',
				description: 'Estimated time to read in minutes.',
			},
		},
		{
			name: 'content',
			type: 'array',
			minRows: 1,
			required: true,
			hooks: {
				/**
				 * If used an image for a paragraph at a point in time and was saved,
				 * removing it doesn't remove it from the database so we check if the
				 * `hasImage` checkbox is checked, and if it is, returns the data
				 * unmodified otherwise, we map the paragraphs and reset the image
				 * property.
				 */
				beforeChange: [
					({ value }) =>
						value.map((item) => {
							if (item.hasImage) {
								return item
							}

							return {
								...item,
								imageField: {
									...item.imageField,
									image: null,
								},
							}
						}),
				],
			},
			fields: [
				{
					name: 'hasImage',
					label: 'Image',
					type: 'checkbox',
					required: true,
				},
				ImageCustom({
					admin: {
						condition: (_, siblingData) => Boolean(siblingData.hasImage),
					},
				}),
				{
					name: 'text',
					type: 'textarea',
					required: true,
				},
			],
		},
	],
}

export default Blogs

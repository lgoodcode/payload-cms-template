import type { CollectionConfig } from 'payload/types'
import path from 'path'
import { USER, ADMIN } from '../constants/roles'
import accessControl from '../lib/accessControl'
import uniqueId from '../hooks/uniqueId'
import LastModifiedBy from '../fields/LastModifiedBy'

const Media: CollectionConfig = {
	slug: 'media',
	admin: {
		useAsTitle: 'name',
		description: 'All media related content',
		disableDuplicate: true,
	},
	access: {
		create: ({ req: { user } }) => accessControl(user, USER),
		read: () => true,
		update: ({ req: { user } }) => accessControl(user, USER),
		delete: ({ req: { user } }) => accessControl(user, ADMIN),
	},
	hooks: {
		beforeChange: [uniqueId],
	},
	upload: {
		staticURL: '/media',
		staticDir: path.join(process.cwd(), 'media'),

		// imageSizes: [
		// 	{
		// 		name: 'thumbnail',
		// 		width: 400,
		// 		height: 300,
		// 	},
		// 	{
		// 		name: 'card',
		// 		width: 768,
		// 		height: 1024,
		// 	},
		// 	{
		// 		name: 'tablet',
		// 		width: 1024,
		// 		// By specifying `null` or leaving a height undefined,
		// 		// the image will be sized to a certain width,
		// 		// but it will retain its original aspect ratio
		// 		// and calculate a height automatically.
		// 		height: null,
		// 	},
		// ],
		adminThumbnail: 'thumbnail',
		mimeTypes: ['image/*'],
	},
	fields: [
		LastModifiedBy,
		{
			name: 'name',
			type: 'text',
			required: true,
			unique: true,
		},
		{
			name: 'alt',
			type: 'text',
			required: true,
		},
	],
}

export default Media

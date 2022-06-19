import type { CollectionConfig } from 'payload/types'
import { USER, ADMIN } from '../constants/roles'
import accessControl from '../lib/accessControl'
import uniqueId from '../hooks/uniqueId'
import LastModifiedBy from '../fields/LastModifiedBy'
import uploadFile from '../hooks/uploadFile'

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
		beforeChange: [uniqueId, uploadFile],
	},
	upload: {
		disableLocalStorage: true,
		mimeTypes: ['image/*'],
		// For the thumbnail, we retrieve the image URL
		adminThumbnail: ({ doc }) => `${process.env.PAYLOAD_PUBLIC_AWS_PUBLIC_URL}/${doc.filename}`,
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

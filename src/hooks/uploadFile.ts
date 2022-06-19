import type { CollectionBeforeChangeHook } from 'payload/types'
import { upload } from '../lib/aws'

const uploadFile: CollectionBeforeChangeHook = async ({ req }) => {
	await upload(req.files.file)
}

export default uploadFile

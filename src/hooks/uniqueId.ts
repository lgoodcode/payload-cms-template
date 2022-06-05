import type { CollectionBeforeValidateHook } from 'payload/types'
import uid from '../lib/uid'

/**
 * This sets a custom id to the object.\
 * Payload requires the id to be a fixed length of 24 characters.\
 * Only creates an id on the `create` operation.
 */
const uniqueId: CollectionBeforeValidateHook = (args) =>
	args.operation === 'create'
		? {
				...args.data,
				_id: uid(),
		  }
		: args.data

export default uniqueId

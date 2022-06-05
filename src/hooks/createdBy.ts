import type { FieldHook } from 'payload/types'

/**
 * If creating new data, set the field to the current user. Otherwise, we do
 * nothing and will retain the original value.
 */
const createdBy: FieldHook = ({ req, operation }) => {
	if (operation === 'create') {
		return req.user.name
	}
}

export default createdBy

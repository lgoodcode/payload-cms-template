import type { FieldHook } from 'payload/types'

/**
 * When updating a resource, to return the current date.
 */
const updated: FieldHook = ({ operation }) => {
	if (operation === 'update') {
		return new Date().toLocaleDateString()
	}
}

export default updated

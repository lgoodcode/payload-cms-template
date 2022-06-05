import type { FieldHook } from 'payload/types'

/**
 * When creating a resource, to return the current date.
 */
const created: FieldHook = ({ operation }) => {
	if (operation === 'create') {
		return new Date().toLocaleDateString()
	}
}

export default created

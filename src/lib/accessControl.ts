import { type User as PayloadUser } from 'payload/dist/auth'
import { USER, ADMIN, SUPER_USER } from '../constants/roles'
import { User } from '../types/payload-types'

export type AccessControl = User['role'] | Array<User['role']>

/**
 * Function used to determine whether a given user has the appropriate access
 * from the specified access control role or list of roles.
 */
export default function accessControl(user: User | PayloadUser, access: AccessControl) {
	if (typeof access !== 'string') {
		return access.indexOf((user as User).role) !== -1
	}

	switch (access) {
		case USER:
			return Boolean(user)
		case ADMIN:
			return user && (user.role === ADMIN || user.role === SUPER_USER)
		case SUPER_USER:
			return user && user.role === SUPER_USER
	}
}

/**
 * read: `PUBLIC` \
 * update: `USER`
 */
export const defaultGlobalAccess = {
	read: () => true,
	update: ({ req: { user } }) => accessControl(user, USER),
}

import type { GlobalConfig, CollectionConfig } from 'payload/types'
import type { Access } from 'payload/config'

/**
 * Forces the access control properties to be set to ensure security
 * and prevent unprivileged modification of data.
 *
 * The use of the `Omit` keyword lets us extend the
 */

export declare interface GlobalConfig extends Omit<GlobalConfig, 'access'> {
	access: {
		read: Access
		readDrafts?: Access
		readVersions?: Access
		update: Access
	}
}

export declare interface CollectionConfig extends Omit<CollectionConfig, 'access'> {
	access: {
		create: Access
		read: Access
		readVersions?: Access
		update: Access
		delete: Access
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		admin?: (args?: any) => boolean
		unlock?: Access
	}
}

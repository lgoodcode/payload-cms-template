import type { FieldHook } from 'payload/types'

/**
 * This hook is to be used on the `beforeChange` hook because we only want to
 * update the modified property when it is successfully updated. The hook
 * `beforeValidate` will always run on any attempt to update even if
 * unsuccessful
 */
const lastModifiedBy: FieldHook = ({ req }) => req.user.name

export default lastModifiedBy

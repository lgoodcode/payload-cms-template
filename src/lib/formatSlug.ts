import { type FieldHook } from 'payload/types'

const format = (val: string) =>
	val
		.replace(/ /g, '-')
		.replace(/[^\w-/]+/g, '')
		.toLowerCase()

export default function formatSlug(field: string): FieldHook {
	return function FormatSlug({ value, data }) {
		if (!value && !data[field]) return ''
		return format(value || data[field])
	}
}

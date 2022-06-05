import type { Field } from 'payload/types'

const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

const Phone = (required = false): Field => ({
	name: 'phone',
	label: 'Phone',
	type: 'text',
	required,
	validate: (val) => (phoneRegex.test(val) ? true : 'Invalid phone number'),
})

export default Phone

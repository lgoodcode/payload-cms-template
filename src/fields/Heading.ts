import type { Field } from 'payload/types'
import type { TextField } from 'payload/dist/fields/config/types'

const Heading = (options?: Partial<TextField>): Field => ({
	label: 'Heading',
	type: 'row',
	fields: [
		{
			...options,
			name: 'heading',
			type: 'text',
			required: true,
		},
		{
			name: 'size',
			type: 'select',
			defaultValue: 'md',
			admin: {
				width: '1rem',
				// TODO: implement handling for frontend sizing
				disabled: true,
			},
			options: [
				{
					label: 'sm',
					value: 'sm',
				},
				{
					label: 'md',
					value: 'md',
				},
				{
					label: 'lg',
					value: 'lg',
				},
				{
					label: 'xl',
					value: 'xl',
				},
				{
					label: '2xl',
					value: '2xl',
				},
			],
		},
	],
})

export default Heading

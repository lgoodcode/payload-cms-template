import type { GlobalConfig } from 'payload/types'
import { ADMIN } from '../constants/roles'
import accessControl from '../lib/accessControl'
import triggerBuild from '../lib/triggerBuild'

const Build: GlobalConfig = {
	slug: 'build',
	label: 'Build',
	access: {
		read: ({ req: { user } }) => accessControl(user, ADMIN),
		update: ({ req: { user } }) => accessControl(user, ADMIN),
	},
	hooks: {
		// Reset the status on page load
		beforeRead: [
			({ doc }) => ({
				...doc,
				build: false,
				status: '',
			}),
		],
	},
	fields: [
		{
			name: 'build',
			type: 'checkbox',
			required: true,
			admin: {
				description:
					'When checked and saved, it will trigger a request to rebuild the website to display new changes.',
			},
			hooks: {
				beforeChange: [
					async ({ value }) => {
						if (value) {
							return await triggerBuild()
						}
					},
				],
			},
		},
		{
			name: 'status',
			type: 'text',
			admin: {
				readOnly: true,
				condition: (_, siblingData) => siblingData.build,
			},
			hooks: {
				beforeChange: [
					({ siblingData }) =>
						siblingData.build
							? 'Build triggered. Please wait a few minutes for it to complete.'
							: '',
				],
			},
		},
	],
}

export default Build

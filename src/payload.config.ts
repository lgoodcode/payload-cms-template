import { buildConfig } from 'payload/config'
import path from 'path'
import Examples from './collections/Examples'
import Users from './collections/Users'

export default buildConfig({
	serverURL: 'http://localhost:4000',
	admin: {
		user: Users.slug,
	},
	collections: [
		Users,
		// Add Collections here
		Examples,
	],
	typescript: {
		outputFile: path.resolve(__dirname, 'payload-types.ts'),
	},
})

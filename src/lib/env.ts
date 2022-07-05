import { config as dotenv } from 'dotenv'

if (process.env.NODE_ENV !== 'production') {
	dotenv({ path: '.env.development' })
	dotenv({ path: '.env.local' })
}

dotenv()

if (!process.env.PORT) {
	throw new Error(`[env] Port must be specified. Recieved: ${process.env.port}`)
}

if (!process.env.PAYLOAD_SECRET) {
	throw new Error(`[env] PAYLOAD_SECRET is not defined. Received: ${process.env.PAYLOAD_SECRET}`)
}

if (!process.env.MONGODB_URI) {
	throw new Error(`[env] MONGODB_URI is not defined. Received: ${process.env.MONGODB_URI}`)
}

if (!process.env.AWS_ACCESS_KEY_ID) {
	throw new Error(
		`[env] AWS_ACCESS_KEY_ID is not defined. Received: ${process.env.AWS_ACCESS_KEY_ID}`
	)
}

if (!process.env.AWS_SECRET_ACCESS_KEY) {
	throw new Error(
		`[env] AWS_SECRET_ACCESS_KEY is not defined. Received: ${process.env.AWS_SECRET_ACCESS_KEY}`
	)
}

if (!process.env.AWS_BUCKET) {
	throw new Error(`[env] AWS_BUCKET is not defined. Received: ${process.env.AWS_BUCKET}`)
}

if (!process.env.PAYLOAD_PUBLIC_AWS_PUBLIC_URL) {
	throw new Error(
		`[env] PAYLOAD_PUBLIC_AWS_PUBLIC_URL is not defined. Received: ${process.env.PAYLOAD_PUBLIC_AWS_PUBLIC_URL}`
	)
}

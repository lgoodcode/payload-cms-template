import express from 'express'
import payload from 'payload'
import { config as dotenv } from 'dotenv'

if (process.env.NODE_ENV !== 'production') {
	dotenv({ path: '.env.development' })
}

dotenv()

if (!process.env.PAYLOAD_SECRET) {
	throw new Error('[env] PAYLOAD_SECRET is not defined')
}

if (!process.env.MONGODB_URI) {
	throw new Error('[env] MONGODB_URI is not defined')
}

const app = express()

app.get('/', (_, res) => {
	res.redirect('/admin')
})

// Initialize Payload
payload.init({
	secret: process.env.PAYLOAD_SECRET,
	mongoURL: process.env.MONGODB_URI,
	express: app,
	// TODO: configure email service
	// email: {
	// },
	onInit: () => {
		payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
	},
})

// Add your own express routes here

// Error handler for promises - silently catch
process.on('uncaughtException', (err) => {
	console.error(`[Uncaught Error]:\n${err.stack}`)
	process.exit(1)
})

app.listen(process.env.PORT)

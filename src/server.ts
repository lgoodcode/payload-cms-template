import express from 'express'
import payload from 'payload'
import { config as dotenv } from 'dotenv'

dotenv()

if (!process.env.PAYLOAD_SECRET) {
	throw new Error('[env] PAYLOAD_SECRET is not defined')
}

if (!process.env.MONGO_URI) {
	throw new Error('[env] MONGO_URI is not defined')
}

const app = express()

// Redirect root to Admin panel
app.get('/', (_, res) => {
	res.redirect('/admin')
})

// Initialize Payload
payload.init({
	secret: process.env.PAYLOAD_SECRET,
	mongoURL: process.env.MONGO_URI,
	express: app,
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

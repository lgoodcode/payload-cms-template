import express from 'express'
import payload from 'payload'
import './lib/env'

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
	// email: {},
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

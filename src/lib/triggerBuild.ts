const triggerBuild = async () => {
	if (process.env.NODE_ENV === 'production') {
		if (!process.env.BUILD_WEBHOOK_URL) {
			throw new Error(
				`[env] BUILD_WEBHOOK_URL is not defined. Received: ${process.env.BUILD_WEBHOOK_URL}`
			)
		}

		const res = await fetch(process.env.BUILD_WEBHOOK_URL, { method: 'POST' })
		return res.ok
	}
}
export default triggerBuild

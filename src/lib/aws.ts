import AWS from 'aws-sdk'

const s3 = new AWS.S3({
	credentials: {
		accessKeyId: process.env.AWS_ACCESS_KEY_ID,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	},
})

export interface UploadedFile extends File {
	name: string
	mimetype: string
	data: Buffer
}

export const upload = async (file: UploadedFile) =>
	new Promise<string>((res) => {
		s3.upload(
			{
				Bucket: process.env.AWS_BUCKET,
				Key: file.name,
				ContentType: file.mimetype,
				ACL: 'public-read',
				Body: file.data,
			},
			function (err, data) {
				if (err) {
					throw new Error('Failed to upload to AWS', err)
				}
				res(data.Location)
			}
		)
	})

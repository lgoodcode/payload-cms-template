import type { Block } from 'payload/types'

const BlogPosts: Block = {
	slug: 'blog-posts',
	labels: {
		singular: 'Blog Posts',
		plural: 'Blog Posts',
	},
	fields: [
		{
			name: 'use',
			type: 'checkbox',
			required: true,
		},
		{
			name: 'heading',
			label: 'Heading',
			type: 'text',
			required: true,
			admin: {
				condition: (_, siblingData) => Boolean(siblingData.use),
			},
		},
		{
			name: 'posts',
			type: 'relationship',
			relationTo: 'blog',
			maxDepth: 2,
			hasMany: true,
			required: true,
			admin: {
				condition: (_, siblingData) => Boolean(siblingData.use),
				description: 'The posts are sorted in descending order (newest to oldest).',
			},
		},
	],
}

export default BlogPosts

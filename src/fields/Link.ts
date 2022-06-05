import type { Field } from 'payload/types'

/**
 * Contains a hidden field `slug` to hold the slug for when the page type is
 * selected and will save the id of the page. Whenever that resource would then
 * be requested, it will replace that with the entire linked page's data,
 * which could result in a circular structure.
 *
 * The slug field will then reference the page. Which the client can then use.
 */
const Link = (type: 'both' | 'page' | 'url'): Field => ({
	type: 'row',
	fields: [
		{
			name: 'type',
			type: 'radio',
			required: true,
			admin: {
				layout: 'horizontal',
				hidden: type !== 'both',
			},
			defaultValue: type === 'both' ? 'url' : type,
			options: [
				{
					label: 'URL',
					value: 'url',
				},
				{
					label: 'Page',
					value: 'page',
				},
			],
		},
		{
			name: 'label',
			label: 'Label',
			type: 'text',
			required: true,
			admin: {
				width: '50%',
			},
		},
		{
			name: 'page',
			label: 'Page to link to',
			type: 'relationship',
			relationTo: 'pages',
			required: true,
			hasMany: false,
			// This is important because the page will point and retrieve the data of
			// the page in the collection it is related to, which can be circular or
			// just unecessary so we disable that by limiting the depth of the query.
			maxDepth: 0,
			admin: {
				width: '50%',
				hidden: type === 'url',
				condition: (_, siblingData) => siblingData?.type === 'page',
			},
		},
		{
			name: 'url',
			label: 'URL',
			type: 'text',
			required: true,
			admin: {
				width: '50%',
				hidden: type === 'page',
				condition: (_, siblingData) => siblingData?.type === 'url',
			},
			hooks: {
				/**
				 * When setting the URL, if the type selected is for pages, then we
				 * perform a lookup for the page slug and set it as the url.
				 */
				beforeValidate: [
					async ({ siblingData, req }) => {
						if (siblingData?.type === 'page') {
							const page = await req.payload.findByID({
								collection: 'pages',
								id: siblingData.page,
							})

							return page.slug === 'home' ? '/' : `/${page.slug}`
						}
					},
				],
			},
		},
	],
})

export default Link

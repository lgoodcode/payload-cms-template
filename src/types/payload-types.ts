/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "build".
 */
export interface Build {
	id: string
	build: boolean
	status?: string
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "nav".
 */
export interface Navigation {
	id: string
	links?: {
		type: 'url' | 'page'
		label: string
		page: string | Page
		url: string
		id?: string
	}[]
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
	id: string
	_status?: 'draft' | 'published'
	slug?: string
	lastModifiedBy?: string
	createdBy?: string
	page: string
	meta?: {
		title?: string
		description?: string
		keywords?: string
		image?: Media
	}
	content: (
		| {
				use: boolean
				heading: string
				posts: (string | Blog)[]
				id?: string
				blockName?: string
				blockType: 'blog-posts'
		  }
		| {
				useForm: boolean
				id?: string
				blockName?: string
				blockType: 'contact-form'
		  }
		| {
				email: string
				id?: string
				blockName?: string
				blockType: 'email'
		  }
		| {
				text: string
				id?: string
				blockName?: string
				blockType: 'text'
		  }
		| {
				textarea: string
				id?: string
				blockName?: string
				blockType: 'textarea'
		  }
		| {
				texts: {
					text: string
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'textareas'
		  }
		| {
				heading: string
				size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
				id?: string
				blockName?: string
				blockType: 'heading'
		  }
		| {
				headings: {
					heading: string
					size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'headings'
		  }
		| {
				image?: Media
				id?: string
				blockName?: string
				blockType: 'image'
		  }
		| {
				images: {
					image?: Media
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'images'
		  }
		| {
				imageField?: {
					image: Media
					hasText?: boolean
					texts: {
						text: string
						id?: string
					}[]
					hasLink?: boolean
					link?: {
						type: 'url' | 'page'
						label: string
						page: string | Page
						url: string
					}
				}
				id?: string
				blockName?: string
				blockType: 'image-custom'
		  }
		| {
				images: {
					imageField?: {
						image: Media
						hasText?: boolean
						texts: {
							text: string
							id?: string
						}[]
						hasLink?: boolean
						link?: {
							type: 'url' | 'page'
							label: string
							page: string | Page
							url: string
						}
					}
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'image-custom-multiple'
		  }
		| {
				type: 'url' | 'page'
				label: string
				page: string | Page
				url: string
				id?: string
				blockName?: string
				blockType: 'link'
		  }
		| {
				links: {
					type: 'url' | 'page'
					label: string
					page: string | Page
					url: string
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'links'
		  }
		| {
				linkGroup?: {
					heading: string
					link?: {
						type: 'url' | 'page'
						label: string
						page: string | Page
						url: string
						id?: string
					}[]
				}
				id?: string
				blockName?: string
				blockType: 'link-group'
		  }
		| {
				header: string
				links: {
					isLink?: boolean
					text: string
					url?: string
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'link-text-group'
		  }
		| {
				groups: {
					header: string
					links: {
						isLink?: boolean
						text: string
						url: string
						id?: string
					}[]
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'multiple-link-text-group'
		  }
		| {
				groups: {
					text: string
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'text-groups'
		  }
		| {
				header: string
				text: string
				id?: string
				blockName?: string
				blockType: 'text-header'
		  }
		| {
				groups: {
					header: string
					text: string
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'text-header-group'
		  }
		| {
				header: string
				text: string
				id?: string
				blockName?: string
				blockType: 'textarea-header'
		  }
		| {
				groups: {
					header: string
					text: string
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'textarea-header-group'
		  }
		| {
				header: string
				texts: {
					text: string
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'multiple-text-header'
		  }
		| {
				groups: {
					header: string
					texts: {
						text: string
						id?: string
					}[]
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'multiple-text-header-group'
		  }
		| {
				images?: {
					image: Media
					id?: string
				}[]
				headings?: {
					heading: string
					size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
					id?: string
				}[]
				text?: {
					body: string
					id?: string
				}[]
				ctas?: {
					type: 'url' | 'page'
					label: string
					page: string | Page
					url: string
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'hero'
		  }
		| {
				blocks: (
					| {
							use: boolean
							heading: string
							posts: (string | Blog)[]
							id?: string
							blockName?: string
							blockType: 'blog-posts'
					  }
					| {
							useForm: boolean
							id?: string
							blockName?: string
							blockType: 'contact-form'
					  }
					| {
							email: string
							id?: string
							blockName?: string
							blockType: 'email'
					  }
					| {
							text: string
							id?: string
							blockName?: string
							blockType: 'text'
					  }
					| {
							textarea: string
							id?: string
							blockName?: string
							blockType: 'textarea'
					  }
					| {
							texts: {
								text: string
								id?: string
							}[]
							id?: string
							blockName?: string
							blockType: 'textareas'
					  }
					| {
							heading: string
							size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
							id?: string
							blockName?: string
							blockType: 'heading'
					  }
					| {
							headings: {
								heading: string
								size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
								id?: string
							}[]
							id?: string
							blockName?: string
							blockType: 'headings'
					  }
					| {
							image?: Media
							id?: string
							blockName?: string
							blockType: 'image'
					  }
					| {
							images: {
								image?: Media
								id?: string
							}[]
							id?: string
							blockName?: string
							blockType: 'images'
					  }
					| {
							imageField?: {
								image: Media
								hasText?: boolean
								texts: {
									text: string
									id?: string
								}[]
								hasLink?: boolean
								link?: {
									type: 'url' | 'page'
									label: string
									page: string | Page
									url: string
								}
							}
							id?: string
							blockName?: string
							blockType: 'image-custom'
					  }
					| {
							images: {
								imageField?: {
									image: Media
									hasText?: boolean
									texts: {
										text: string
										id?: string
									}[]
									hasLink?: boolean
									link?: {
										type: 'url' | 'page'
										label: string
										page: string | Page
										url: string
									}
								}
								id?: string
							}[]
							id?: string
							blockName?: string
							blockType: 'image-custom-multiple'
					  }
					| {
							type: 'url' | 'page'
							label: string
							page: string | Page
							url: string
							id?: string
							blockName?: string
							blockType: 'link'
					  }
					| {
							links: {
								type: 'url' | 'page'
								label: string
								page: string | Page
								url: string
								id?: string
							}[]
							id?: string
							blockName?: string
							blockType: 'links'
					  }
					| {
							linkGroup?: {
								heading: string
								link?: {
									type: 'url' | 'page'
									label: string
									page: string | Page
									url: string
									id?: string
								}[]
							}
							id?: string
							blockName?: string
							blockType: 'link-group'
					  }
					| {
							header: string
							links: {
								isLink?: boolean
								text: string
								url?: string
								id?: string
							}[]
							id?: string
							blockName?: string
							blockType: 'link-text-group'
					  }
					| {
							groups: {
								header: string
								links: {
									isLink?: boolean
									text: string
									url: string
									id?: string
								}[]
								id?: string
							}[]
							id?: string
							blockName?: string
							blockType: 'multiple-link-text-group'
					  }
					| {
							groups: {
								text: string
								id?: string
							}[]
							id?: string
							blockName?: string
							blockType: 'text-groups'
					  }
					| {
							header: string
							text: string
							id?: string
							blockName?: string
							blockType: 'text-header'
					  }
					| {
							groups: {
								header: string
								text: string
								id?: string
							}[]
							id?: string
							blockName?: string
							blockType: 'text-header-group'
					  }
					| {
							header: string
							text: string
							id?: string
							blockName?: string
							blockType: 'textarea-header'
					  }
					| {
							groups: {
								header: string
								text: string
								id?: string
							}[]
							id?: string
							blockName?: string
							blockType: 'textarea-header-group'
					  }
					| {
							header: string
							texts: {
								text: string
								id?: string
							}[]
							id?: string
							blockName?: string
							blockType: 'multiple-text-header'
					  }
					| {
							groups: {
								header: string
								texts: {
									text: string
									id?: string
								}[]
								id?: string
							}[]
							id?: string
							blockName?: string
							blockType: 'multiple-text-header-group'
					  }
				)[]
				id?: string
				blockName?: string
				blockType: 'section'
		  }
	)[]
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
	id: string
	url?: string
	filename?: string
	mimeType?: string
	filesize?: number
	lastModifiedBy?: string
	name: string
	alt: string
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "blog".
 */
export interface Blog {
	id: string
	_status?: 'draft' | 'published'
	slug?: string
	lastModifiedBy?: string
	createdBy?: string
	created?: string
	updated?: string
	title: string
	meta?: {
		title?: string
		description?: string
		keywords?: string
	}
	image: Media
	readTime: number
	content: {
		hasImage: boolean
		imageField?: {
			image: Media
			hasText?: boolean
			texts: {
				text: string
				id?: string
			}[]
			hasLink?: boolean
			link?: {
				type: 'url' | 'page'
				label: string
				page: string | Page
				url: string
			}
		}
		text: string
		id?: string
	}[]
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contact-info".
 */
export interface ContactInformation {
	id: string
	phone?: string
	email?: string
	address?: string
	other?: (
		| {
				type: 'url' | 'page'
				label: string
				page: string | Page
				url: string
				id?: string
				blockName?: string
				blockType: 'link'
		  }
		| {
				links: {
					type: 'url' | 'page'
					label: string
					page: string | Page
					url: string
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'links'
		  }
		| {
				linkGroup?: {
					heading: string
					link?: {
						type: 'url' | 'page'
						label: string
						page: string | Page
						url: string
						id?: string
					}[]
				}
				id?: string
				blockName?: string
				blockType: 'link-group'
		  }
		| {
				header: string
				links: {
					isLink?: boolean
					text: string
					url?: string
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'link-text-group'
		  }
		| {
				groups: {
					header: string
					links: {
						isLink?: boolean
						text: string
						url: string
						id?: string
					}[]
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'multiple-link-text-group'
		  }
		| {
				groups: {
					text: string
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'text-groups'
		  }
		| {
				header: string
				text: string
				id?: string
				blockName?: string
				blockType: 'text-header'
		  }
		| {
				groups: {
					header: string
					text: string
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'text-header-group'
		  }
		| {
				header: string
				text: string
				id?: string
				blockName?: string
				blockType: 'textarea-header'
		  }
		| {
				groups: {
					header: string
					text: string
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'textarea-header-group'
		  }
		| {
				header: string
				texts: {
					text: string
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'multiple-text-header'
		  }
		| {
				groups: {
					header: string
					texts: {
						text: string
						id?: string
					}[]
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'multiple-text-header-group'
		  }
	)[]
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "seo".
 */
export interface Seo {
	id: string
	siteName: string
	description: string
	favicon: Media
	image?: Media
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "social-media".
 */
export interface SocialMedia {
	id: string
	links?: {
		type: 'url' | 'page'
		label: string
		page: string | Page
		url: string
		id?: string
	}[]
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
	id: string
	copyright: string
	other: (
		| {
				type: 'url' | 'page'
				label: string
				page: string | Page
				url: string
				id?: string
				blockName?: string
				blockType: 'link'
		  }
		| {
				links: {
					type: 'url' | 'page'
					label: string
					page: string | Page
					url: string
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'links'
		  }
		| {
				linkGroup?: {
					heading: string
					link?: {
						type: 'url' | 'page'
						label: string
						page: string | Page
						url: string
						id?: string
					}[]
				}
				id?: string
				blockName?: string
				blockType: 'link-group'
		  }
		| {
				header: string
				links: {
					isLink?: boolean
					text: string
					url?: string
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'link-text-group'
		  }
		| {
				groups: {
					header: string
					links: {
						isLink?: boolean
						text: string
						url: string
						id?: string
					}[]
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'multiple-link-text-group'
		  }
		| {
				groups: {
					text: string
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'text-groups'
		  }
		| {
				header: string
				text: string
				id?: string
				blockName?: string
				blockType: 'text-header'
		  }
		| {
				groups: {
					header: string
					text: string
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'text-header-group'
		  }
		| {
				header: string
				text: string
				id?: string
				blockName?: string
				blockType: 'textarea-header'
		  }
		| {
				groups: {
					header: string
					text: string
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'textarea-header-group'
		  }
		| {
				header: string
				texts: {
					text: string
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'multiple-text-header'
		  }
		| {
				groups: {
					header: string
					texts: {
						text: string
						id?: string
					}[]
					id?: string
				}[]
				id?: string
				blockName?: string
				blockType: 'multiple-text-header-group'
		  }
	)[]
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
	id: string
	email?: string
	resetPasswordToken?: string
	resetPasswordExpiration?: string
	loginAttempts?: number
	lockUntil?: string
	name: string
	role: 'user' | 'admin' | 'superuser'
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "submissions".
 */
export interface Submission {
	id: string
	submitted?: string
	source: string
	name: string
	email: string
	phone?: string
	message: string
}

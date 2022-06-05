// Hero and Section are omitted and only directly imported in the collection
import BlogPosts from './BlogPosts'
import ContactForm from './ContactForm'
import Fields from './fields'
import Heading from './Heading'
import Headings from './Headings'
import Image from './Image'
import Images from './Images'
import ImageCustom from './ImageCustom'
import ImageCustoms from './ImageCustoms'
import Link from './Link'
import Links from './Links'
import LinkGroup from './LinkGroup'
import Texts from './texts'

export default [
	BlogPosts,
	ContactForm,
	...Fields,
	Heading,
	Headings,
	Image,
	Images,
	ImageCustom,
	ImageCustoms,
	Link,
	Links,
	LinkGroup,
	...Texts,
]

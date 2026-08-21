// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
	twitterHandle?: string
	schemaOrg?: Record<string, any>
}

export const configData: Config = {
	siteTitle: 'PSLN Trust | Pichumani Sri Lakshmi Narasimhan Trust, Coimbatore',
	siteDescription:
		'PSLN Trust supports underprivileged communities in Coimbatore through girl-child education, food, clothing, and care for the elderly and children in need.',
	ogImage: '/gallery/home-visit-donation-2.jpeg',
	logo: {
		src: '',
		alt: 'PSLN Trust logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true,
	schemaOrg: {
		'@context': 'https://schema.org',
		'@type': 'NGO',
		name: 'Pichumani Sri Lakshmi Narasimhan Trust',
		alternateName: 'PSLN Trust',
		foundingDate: '2024-08',
		description:
			'A charitable trust based in Coimbatore serving the underprivileged through education, food, clothing, and other humanitarian needs.',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Flat No. 101, "A" Block, Ramani\'s SRISHTI Apartment, 291, Trichy Road, Singanallur',
			addressLocality: 'Coimbatore',
			postalCode: '641005',
			addressRegion: 'Tamil Nadu',
			addressCountry: 'IN'
		},
		telephone: '+91-9176917161',
		email: 'pslnt@yahoo.com',
		sameAs: ['https://www.youtube.com/@PSLNTRUST']
	}
}

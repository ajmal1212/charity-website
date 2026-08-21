// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'PSLN Trust',
		aboutText:
			'Pichumani Sri Lakshmi Narasimhan Trust serves the underprivileged of Coimbatore through education, food, clothing, and humanitarian support, empowering lives with dignity and hope.',
		logo: {
			src: '/trust logo.png',
			alt: 'PSLN Trust logo',
			text: 'PSLN Trust'
		}
	},
	footerColumns: [
		{
			category: 'About',
			subCategories: [
				{
					subCategory: 'About Us',
					subCategoryLink: '/about'
				},
				{
					subCategory: 'FAQ',
					subCategoryLink: '/faq'
				},
				{
					subCategory: 'Contact',
					subCategoryLink: '/contact'
				}
			]
		},
		{
			category: 'Get Involved',
			subCategories: [
				{
					subCategory: 'Donate',
					subCategoryLink: '/donate'
				},
				{
					subCategory: 'Call Us',
					subCategoryLink: 'tel:+919176917161'
				},
				{
					subCategory: 'Email Us',
					subCategoryLink: 'mailto:pslnt@yahoo.com'
				}
			]
		},
		{
			category: 'Legal',
			subCategories: [
				{
					subCategory: 'Privacy Policy',
					subCategoryLink: '/privacy-policy'
				},
				{
					subCategory: 'Terms & Conditions',
					subCategoryLink: '/terms'
				},
				{
					subCategory: 'Data Deletion',
					subCategoryLink: '/data-deletion'
				}
			]
		}
	],
	subFooter: {
		copywriteText:
			'© PICHUMANI SRI LAKSHMI NARASIMHAN TRUST. DARPAN ID: TN/2025/0490055.'
	}
}

// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '',
		alt: 'PSLN Trust logo',
		text: 'PSLN Trust'
	},
	navItems: [
		{ name: 'Home', link: '/' },
		{ name: 'About Us', link: '/about' },
		{ name: 'Donate', link: '/donate' },
		{ name: 'FAQ', link: '/faq' },
		{ name: 'Contact', link: '/contact' }
	],
	navActions: [{ name: 'Donate Now', link: '/donate', style: 'primary', size: 'lg' }]
}

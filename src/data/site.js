/**
 * Central site configuration.
 * Update contact details, WhatsApp number and stats here — nothing else needs to change.
 */

export const site = {
  name: 'Growfluence Studio',
  shortName: 'Growfluence',
  studio: 'Studio',
  tagline: 'Marketing That Brings People To Your Table.',
  description:
    'Growfluence Studio helps restaurants and cafés grow through social media, paid advertising, content, influencer marketing and digital strategy.',
  email: 'hello@growfluencestudio.com',
  phone: '+91 90000 00000',
  location: 'Bengaluru, India',
  /** WhatsApp number in international format, digits only. Override with VITE_WHATSAPP_NUMBER. */
  whatsapp: {
    number: import.meta.env.VITE_WHATSAPP_NUMBER || '919000000000',
    message: 'Hi Growfluence Studio, I would like a free growth strategy for my restaurant.',
  },
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '/contact' },
]

export const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { label: 'YouTube', href: 'https://youtube.com', icon: 'youtube' },
  { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
]

/**
 * Performance statistics — DESIGN PLACEHOLDERS.
 * Replace `value`/`label` with verified business data before launch.
 */
export const heroStats = [
  { value: '200+', label: 'Restaurants' },
  { value: '500+', label: 'Campaigns' },
  { value: '2M+', label: 'Orders & Walk-ins' },
  { value: '50+', label: 'Cities' },
]

export const aboutStats = [
  { value: '200+', label: 'Restaurants Served' },
  { value: '500+', label: 'Campaigns Managed' },
  { value: '2M+', label: 'People Reached' },
  { value: '50+', label: 'Cities' },
]

export const outcomes = [
  { title: 'More Orders', icon: 'ShoppingBag' },
  { title: 'More Walk-ins', icon: 'Store' },
  { title: 'Stronger Brand', icon: 'Sparkles' },
  { title: 'Higher Revenue', icon: 'TrendingUp' },
]

export const heroServices = [
  { label: 'Social Media', icon: 'Share2' },
  { label: 'Google Ads', icon: 'Target' },
  { label: 'Zomato & Swiggy', icon: 'UtensilsCrossed' },
  { label: 'Content', icon: 'Camera' },
  { label: 'Influencer Marketing', icon: 'Megaphone' },
]

export const serviceOptions = [
  'Social Media Management',
  'Google & Meta Ads',
  'Food Photography & Reels',
  'Influencer Marketing',
  'Zomato & Swiggy Optimization',
  'Website Development',
  'Google Business Profile',
  'WhatsApp Marketing',
  'Menu Design & Branding',
  'Strategy & Consulting',
]

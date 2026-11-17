/**
 * Testimonials — genuine client reviews supplied by the customer.
 *
 * Wording, business names, locations and attributions are reproduced exactly
 * as provided. Do not paraphrase or invent content here.
 */
import jashnImage from '../assets/jashn.webp'
import burgerWokImage from '../assets/burger-wok.webp'
import cafeBistro57Image from '../assets/cafe-bistro-57.jpg'
import bikanerSweetsSnacksImage from '../assets/bikaner-sweets-snacks.webp'
import chaileelaImage from '../assets/chaileela.avif'
import chaileelaWebpImage from '../assets/chaileela.webp'
import chaileelaJpgImage from '../assets/chaileela.jpg'

export const testimonials = [
  {
    id: 'jashn',
    restaurant: 'Jashn',
    location: 'Jaipur, Rajasthan',
    quote:
      "We joined the team with a clear focus on improving our delivery business, as our delivery orders were just around 20 per month. Within a few months, this has grown to 120+ orders – a remarkable 515% increase. Our delivery revenue has also grown from around ₹13K to ₹54K+, while influencers and marketing activities have helped us achieve strong reach and visibility. We're really happy with the growth and results the team has delivered for Jashn.",
    attribution: 'Owner, Jashn',
    rating: 5,
    image: jashnImage,
    imageAlt: 'Jashn restaurant entrance, Jaipur',
  },
  {
    id: 'burger-wok-cafe',
    restaurant: 'The Burger Wok Cafe',
    location: 'Gurugram, Haryana',
    quote:
      "We started working with the team right from the opening of The Burger Wok Cafe, when we were starting completely from scratch with zero platform presence and revenue. In just our second month, we achieved ₹2 lakh in revenue, and since then our orders and dine-in business have continued to grow steadily. One of the biggest improvements has been our online reputation — our Zomato and Swiggy ratings have grown from around 2.8 to 4.0 stars. The team also manages our complete social media presence, Instagram and influencer marketing, which has helped us build strong visibility and reach. We're happy to have had them with us from day one and look forward to growing even further together.",
    attribution: 'Owner, The Burger Wok Cafe',
    rating: 5,
    image: burgerWokImage,
    imageAlt: 'The Burger Wok Cafe interior',
  },
  {
    id: 'cafe-bistro-57',
    restaurant: 'Cafe Bistro 57',
    location: 'Rohini, Delhi',
    quote:
      "We've been working with the team for the last 3–4 months, initially with a complete focus on our social media presence. They have handled our content and social media management, helping us improve our online visibility and engagement. We've now also partnered with them to manage our online delivery platforms with a clear focus on driving sales and growing our delivery business. The team has been proactive, creative and consistent throughout, and we're happy to continue working with them for the next stage of our growth.",
    attribution: 'Owner, Cafe Bistro 57',
    rating: 5,
    image: cafeBistro57Image,
    imageAlt: 'Cafe Bistro 57 storefront',
  },
  {
    id: 'bikaner-sweets-snacks',
    restaurant: 'Bikaner Sweets & Snacks',
    location: 'Pandav Nagar, Delhi',
    quote:
      "We recently started working with Growfluence Studio for our social media, Zomato and Swiggy management. The team has been very professional, responsive and proactive. They understand our requirements well and are helping us improve our online presence and manage our platforms more effectively.\n\nOverall, we are happy with their work and support so far. Looking forward to achieving more together.",
    attribution: 'Bikaner Sweets & Snacks',
    rating: 5,
    image: bikanerSweetsSnacksImage,
    imageAlt: 'Bikaner Sweets & Snacks storefront',
  },
  {
    id: 'chaileela',
    restaurant: 'Chaileela',
    location: 'Noida Sec 127',
    quote:
      "We recently partnered with Growfluence Studio to manage and strengthen our Chaileela's cafe at Noida Sec 127 digital presence, and our experience so far has been positive. Their team is handling our social media management, marketing activities, influencer collaborations, food and ambience shoots, and Google Business Profile (GMB) management. We appreciate their proactive approach, creative content planning, attention to detail and understanding our target audience. What we particularly like is their focus on local marketing, engaging content, and strategies designed to increase restaurant visibility and customer footfall. Although our association is still new, the team has been supportive, responsive, and enthusiastic about helping grow. Looking forward to building a strong and successful partnership with Growfluence Studio!",
    attribution: 'Team Chaileela - Noida 127',
    rating: 5,
    image: chaileelaImage,
    fallbackImage: chaileelaWebpImage,
    fallbackJpg: chaileelaJpgImage,
    imageAlt: 'Chaileela cafe, Noida Sec 127',
  },
]

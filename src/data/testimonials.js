/**
 * Testimonials — genuine client reviews supplied by the customer.
 *
 * Wording, business names, locations and attributions are reproduced exactly
 * as provided. Do not paraphrase or invent content here.
 */
import jashnImage from '../assets/jashn.webp'
import burgerWokImage from '../assets/burger-wok.webp'
import cafeBistro57Image from '../assets/cafe-bistro-57.jpg'

export const testimonials = [
  {
    id: 'jashn',
    restaurant: 'Jashn',
    location: 'Jaipur, Jaipur Nagar Nigam Area, Rajasthan',
    quote:
      "We joined the team with a clear focus on improving our delivery business, as our delivery orders were just around 20 per month. Within a few months, this has grown to 120+ orders – a remarkable 515% increase. Our delivery revenue has also grown from around ₹13K to ₹54K+, while influencers and marketing activities have helped us achieve strong reach and visibility. We're really happy with the growth and results the team has delivered for Jashn.",
    attribution: 'Owner, Jashn',
    image: jashnImage,
    imageAlt: 'Jashn restaurant entrance, Jaipur',
  },
  {
    id: 'burger-wok-cafe',
    restaurant: 'The Burger Wok Cafe',
    quote:
      "We started working with the team right from the opening of The Burger Wok Cafe, when we were starting completely from scratch with zero platform presence and revenue. In just our second month, we achieved ₹2 lakh in revenue, and since then our orders and dine-in business have continued to grow steadily. One of the biggest improvements has been our online reputation — our Zomato and Swiggy ratings have grown from around 2.8 to 4.0 stars. The team also manages our complete social media presence, Instagram and influencer marketing, which has helped us build strong visibility and reach. We're happy to have had them with us from day one and look forward to growing even further together.",
    attribution: 'Owner, The Burger Wok Cafe',
    image: burgerWokImage,
    imageAlt: 'The Burger Wok Cafe interior',
  },
  {
    id: 'cafe-bistro-57',
    restaurant: 'Cafe Bistro 57',
    quote:
      "We've been working with the team for the last 3–4 months, initially with a complete focus on our social media presence. They have handled our content and social media management, helping us improve our online visibility and engagement. We've now also partnered with them to manage our online delivery platforms with a clear focus on driving sales and growing our delivery business. The team has been proactive, creative and consistent throughout, and we're happy to continue working with them for the next stage of our growth.",
    attribution: 'Owner, Cafe Bistro 57',
    image: cafeBistro57Image,
    imageAlt: 'Cafe Bistro 57 storefront',
  },
]

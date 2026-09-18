/**
 * Centralised imagery.
 *
 * All photography is loaded from Unsplash's CDN and is used as placeholder
 * art direction. Swap the IDs below (or replace `unsplash` with your own CDN)
 * to use licensed brand photography — no component changes required.
 */

const CDN = 'https://images.unsplash.com/photo-'

/** Build an optimised, cropped Unsplash URL. */
export const unsplash = (id, width = 1200, quality = 80) =>
  `${CDN}${id}?auto=format&fit=crop&w=${width}&q=${quality}`

/** Photo ID registry — reference these keys from data files. */
export const PHOTOS = {
  // Restaurant & food
  restaurantInterior: '1517248135467-4c7edcad34c4',
  restaurantDining: '1414235077428-338989a2e8c0',
  cafeAmbience: '1554118811-1e0d58224f24',
  coffeePour: '1495474472287-4d71bcdd2085',
  platedDish: '1546069901-ba9599a7e63c',
  fineDining: '1504674900247-0877df9cc836',
  grilledDish: '1544025162-d76694265947',
  dessert: '1551024506-0bccd828d307',
  breakfast: '1533089860892-a7c6f0a88666',
  chefAtWork: '1556910103-1c02745aae4d',
  // People
  avatarOne: '1500648767791-00dcc994a43e',
  avatarTwo: '1494790108377-be9c29b29330',
  avatarThree: '1507003211169-0a1dd7228f2d',
}

/** Resolve a registry key (or raw ID) to a ready-to-use URL. */
export const getImage = (key, width = 1200, quality = 80) =>
  unsplash(PHOTOS[key] ?? key, width, quality)

/** Pre-resolved images used directly by sections. */
export const IMAGES = {
  heroBackground: getImage('restaurantInterior', 2000, 78),
  heroDish: getImage('platedDish', 900, 82),
  heroDishSmall: getImage('fineDining', 500, 82),
  aboutChef: getImage('chefAtWork', 1100, 82),
  aboutInterior: getImage('cafeAmbience', 700, 82),
  ctaBackground: getImage('restaurantDining', 2000, 78),
}

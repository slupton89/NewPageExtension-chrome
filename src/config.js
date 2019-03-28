import {
  API_URL,
  OWEATHER_API_KEY,
  GOOGLE_APP_ID,
  DARKSKY_API_KEY,
  landscapeGal,
  spaceGal,
  citiesGal,
  abstractGal,
 } from './env.js'


export const API_URI =  API_URL
export const GOOGLE_ID = GOOGLE_APP_ID || 'Missing GOOGLE_APP_ID'
export const OWEATHER_KEY = OWEATHER_API_KEY || 'Missing OWEATHER_API_KEY'
export const DARKSKY_KEY = DARKSKY_API_KEY || 'Missing DARKSKY_API_KEY'
export const landscapeId = landscapeGal || 'Missing Landscape Gallery ID'
export const spaceId = spaceGal || 'Missing Space Gallery ID'
export const citiesId = citiesGal || 'Missing Cities Gallery ID'
export const abstractId = abstractGal || 'Missing Abstract Gallery ID'
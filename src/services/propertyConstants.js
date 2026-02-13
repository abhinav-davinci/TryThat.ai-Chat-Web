// Lister types
export const LISTER_TYPES = [
  { value: 'channel_partner', label: 'Channel Partner/Broker' },
  { value: 'owner', label: 'Owner' },
  { value: 'builder', label: 'Builder' },
]

// Property types with Lucide icon names
export const PROPERTY_TYPES = [
  { value: 'commercial', label: 'Commercial', icon: 'Building2' },
  { value: 'residential', label: 'Residential', icon: 'Home' },
  { value: 'land', label: 'Land', icon: 'TreePine' },
]

// Categories per property type
const CATEGORIES = {
  commercial: [
    'Office Space',
    'Shop/Showroom',
    'Warehouse/Godown',
    'Industrial Building',
    'Co-working Space',
    'Commercial Land',
  ],
  residential: [
    'Apartment',
    'Villa',
    'Independent House',
    'Builder Floor',
    'Penthouse',
    'Studio Apartment',
    'Farm House',
  ],
  land: [
    'Residential Plot',
    'Commercial Plot',
    'Agricultural Land',
    'Industrial Land',
    'Farm Land',
  ],
}

// Specifications per category
const SPECIFICATIONS = {
  'Apartment': ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5+ BHK'],
  'Villa': ['2 BHK', '3 BHK', '4 BHK', '5 BHK', '6+ BHK'],
  'Independent House': ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5+ BHK'],
  'Builder Floor': ['1 BHK', '2 BHK', '3 BHK', '4 BHK'],
  'Penthouse': ['3 BHK', '4 BHK', '5 BHK', '5+ BHK'],
  'Studio Apartment': ['Studio', '1 RK'],
  'Farm House': ['2 BHK', '3 BHK', '4 BHK', '5+ BHK'],
  'Office Space': ['Small (< 500 sqft)', 'Medium (500-2000 sqft)', 'Large (2000-5000 sqft)', 'Very Large (5000+ sqft)'],
  'Shop/Showroom': ['Small', 'Medium', 'Large', 'Anchor Store'],
  'Warehouse/Godown': ['Small', 'Medium', 'Large'],
  'Industrial Building': ['Small', 'Medium', 'Large'],
  'Co-working Space': ['Hot Desk', 'Dedicated Desk', 'Private Cabin', 'Full Floor'],
  'Commercial Land': [],
  'Residential Plot': [],
  'Commercial Plot': [],
  'Agricultural Land': [],
  'Industrial Land': [],
  'Farm Land': [],
}

// Availability options
export const AVAILABILITY_OPTIONS = [
  { value: 'sale', label: 'Sale' },
  { value: 'rent', label: 'Rent' },
  { value: 'both', label: 'Both' },
]

// Suggestion chips per property type + category
const SUGGESTION_CHIPS = {
  'residential:Apartment': ['East-facing', 'Vastu-compliant', 'Gated society', 'Near metro', 'Modular kitchen', '24x7 security', 'Power backup', 'Covered parking', 'RERA approved', 'Semi-furnished'],
  'residential:Villa': ['Independent', 'Private garden', 'Swimming pool', 'Gated community', 'Premium locality', 'Vastu-compliant', 'Corner plot', 'Fully furnished', 'RERA approved', 'Club house'],
  'residential:Independent House': ['Independent', 'Corner plot', 'East-facing', 'Vastu-compliant', 'Near market', 'Near school', 'Peaceful locality', 'Well-maintained', 'Ready to move', 'Power backup'],
  'residential:Builder Floor': ['Top floor', 'Ground floor', 'Park facing', 'Lift available', 'Car parking', 'Vastu-compliant', 'Near metro', 'Modular kitchen', 'RERA approved', 'Ready to move'],
  'residential:Penthouse': ['Terrace garden', 'Panoramic view', 'Private elevator', 'Premium finishes', 'Rooftop pool', 'Smart home', 'RERA approved', 'Fully furnished', 'Club house', 'City views'],
  'residential:Studio Apartment': ['Fully furnished', 'Near IT hub', 'High ROI', 'Near metro', 'Gated society', '24x7 security', 'Power backup', 'Compact living', 'Investment ready', 'Ready to move'],
  'residential:Farm House': ['Organic farming', 'Scenic views', 'Weekend getaway', 'Private pool', 'Large plot', 'Fruit trees', 'Peaceful', 'Near highway', 'Water supply', 'Boundary wall'],
  'commercial:Office Space': ['Plug and play', 'Furnished', 'IT park', 'Business hub', 'Meeting rooms', '24x7 access', 'Ample parking', 'Central AC', 'Power backup', 'Near metro'],
  'commercial:Shop/Showroom': ['Main road', 'High footfall', 'Ground floor', 'Glass frontage', 'Prime location', 'Corner shop', 'Ample parking', 'Near market', 'Commercial zone', 'Ready to use'],
  'commercial:Warehouse/Godown': ['Loading dock', 'High ceiling', 'Industrial area', 'Near highway', 'Power supply', 'Fire safety', 'Security', 'Large area', 'Easy access', 'Commercial zone'],
  'land:Residential Plot': ['DTCP approved', 'Clear title', 'Corner plot', 'East-facing', 'Near main road', 'Gated layout', 'RERA approved', 'Well connected', 'Water supply', 'Electricity'],
  'land:Commercial Plot': ['Commercial zone', 'Main road', 'Clear title', 'Near market', 'High visibility', 'Ample space', 'Well connected', 'DTCP approved', 'Corner plot', 'Ready for construction'],
  'land:Agricultural Land': ['Fertile soil', 'Bore well', 'Water source', 'Near village', 'Fenced', 'Road access', 'Clear title', 'Irrigation', 'Fruit trees', 'Organic farming'],
}

// Default chips when no specific match
const DEFAULT_CHIPS = ['Well-maintained', 'Prime location', 'Good connectivity', 'Near amenities', 'Clear documentation', 'Immediate availability', 'Negotiable price', 'Owner direct', 'Investment opportunity', 'Best in class']

export function getCategoriesForType(propertyType) {
  return CATEGORIES[propertyType] || []
}

export function getSpecsForCategory(category) {
  return SPECIFICATIONS[category] || []
}

export function getSuggestionChips(propertyType, category) {
  if (propertyType && category) {
    const key = `${propertyType}:${category}`
    if (SUGGESTION_CHIPS[key]) return SUGGESTION_CHIPS[key]
  }
  if (propertyType) {
    const typeChips = Object.entries(SUGGESTION_CHIPS)
      .filter(([k]) => k.startsWith(propertyType + ':'))
      .flatMap(([, v]) => v)
    const unique = [...new Set(typeChips)]
    if (unique.length > 0) return unique.slice(0, 10)
  }
  return DEFAULT_CHIPS
}

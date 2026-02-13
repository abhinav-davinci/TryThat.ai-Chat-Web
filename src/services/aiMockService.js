// Context-aware mock AI service for property listing

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Title completions keyed by prefix (lowercase)
const TITLE_COMPLETIONS = {
  residential: {
    'spacious': ' 3BHK with City Views in Andheri West',
    'luxury': ' Villa with Private Pool in Whitefield',
    'modern': ' Apartment with Modular Kitchen near Metro',
    'premium': ' 2BHK in Gated Society with Club House',
    'beautiful': ' Independent House with Garden in HSR Layout',
    'affordable': ' 1BHK in Prime Location near IT Park',
    'elegant': ' Penthouse with Terrace Garden in Bandra',
    'newly': ' Renovated 3BHK with Italian Marble Flooring',
    'cozy': ' 2BHK Apartment in Family-Friendly Neighborhood',
    'stunning': ' 4BHK Villa with Panoramic Hill Views',
    'bright': ' East-Facing 2BHK with Ample Natural Light',
    'well': '-Maintained 3BHK in RERA Approved Complex',
    'sea': ' View 3BHK Apartment in Worli, Mumbai',
    'ready': ' to Move 2BHK with Covered Parking',
    'fully': ' Furnished 1BHK Studio near Cyber City',
    'semi': '-Furnished 3BHK with Modular Kitchen',
    'brand': ' New 2BHK in Premium Gated Community',
    'corner': ' Plot Independent House with Garden',
    'vastu': ' Compliant 3BHK East-Facing Apartment',
  },
  commercial: {
    'spacious': ' Commercial Office Space in BKC Business Hub',
    'premium': ' Office Space with Conference Room in IT Park',
    'modern': ' Co-working Space with All Amenities',
    'prime': ' Location Shop on Main Road with High Footfall',
    'affordable': ' Office Space in Commercial Complex',
    'fully': ' Furnished Plug & Play Office in Cyber Hub',
    'large': ' Warehouse Space near NH Highway',
    'ready': ' to Use Office Space with Workstations',
    'well': '-Connected Commercial Space near Metro',
    'bright': ' Ground Floor Showroom on Main Road',
  },
  land: {
    'prime': ' Residential Plot in DTCP Approved Layout',
    'large': ' Agricultural Land with Bore Well Facility',
    'corner': ' Plot in Gated Community with Clear Title',
    'affordable': ' Residential Plot near Developing Hub',
    'dtcp': ' Approved Plot with East Facing in Premium Layout',
    'fertile': ' Farm Land with Water Source and Road Access',
    'well': '-Connected Commercial Plot on Main Road',
    'clear': ' Title Residential Plot in Gated Layout',
    'east': '-Facing Corner Plot in Premium Location',
    'investment': ' Grade Commercial Plot near IT Corridor',
  },
}

const DEFAULT_COMPLETIONS = {
  'spacious': ' Property in Prime Location',
  'luxury': ' Property with Premium Amenities',
  'modern': ' Property with Contemporary Design',
  'premium': ' Property in Gated Community',
  'beautiful': ' Property with Great Surroundings',
  'affordable': ' Property in Growing Locality',
}

function findCompletion(text, completionMap) {
  const lower = text.toLowerCase().trim()
  for (const [prefix, completion] of Object.entries(completionMap)) {
    if (lower.endsWith(prefix) || lower === prefix) {
      return completion
    }
  }
  // Partial match: check if user is typing a known prefix
  const lastWord = lower.split(' ').pop()
  if (lastWord.length >= 3) {
    for (const [prefix, completion] of Object.entries(completionMap)) {
      if (prefix.startsWith(lastWord) && prefix !== lastWord) {
        const remaining = prefix.slice(lastWord.length)
        return remaining + completion
      }
    }
  }
  return null
}

/**
 * Returns an inline ghost text completion for the title input
 */
export async function getInlineCompletion(text, context = {}) {
  await delay(200)
  if (!text || text.trim().length < 3) return null

  const { propertyType = 'residential' } = context
  const typeCompletions = TITLE_COMPLETIONS[propertyType] || TITLE_COMPLETIONS.residential
  const allCompletions = { ...typeCompletions, ...DEFAULT_COMPLETIONS }

  return findCompletion(text, allCompletions)
}

/**
 * Returns 3 AI-generated title suggestions
 */
export async function generateTitleOptions(text, context = {}) {
  await delay(800)
  const { propertyType = 'residential', category = '', specifications = '' } = context

  const spec = specifications ? ` ${specifications}` : ''
  const cat = category || 'Property'

  const titleSets = {
    residential: [
      `Stunning${spec} ${cat} in Premium Gated Society with World-Class Amenities`,
      `Spacious${spec} ${cat} with Modular Kitchen and Covered Parking`,
      `Beautiful${spec} ${cat} in Prime Location – Ready to Move`,
    ],
    commercial: [
      `Premium${spec} ${cat} in Central Business District`,
      `Fully Furnished${spec} ${cat} with All Modern Amenities`,
      `Strategically Located${spec} ${cat} with Excellent Connectivity`,
    ],
    land: [
      `Prime${spec} ${cat} with Clear Title in Approved Layout`,
      `East-Facing${spec} ${cat} in Developing Area with Great Potential`,
      `Well-Connected${spec} ${cat} near Major Infrastructure Projects`,
    ],
  }

  const base = titleSets[propertyType] || titleSets.residential

  // If user typed something, incorporate it
  if (text && text.trim().length > 2) {
    return base.map((t, i) => {
      if (i === 0) return `${text.trim()} – ${cat} in Premium Location`
      return t
    })
  }

  return base
}

/**
 * Returns a structured property description with bullet points
 */
export async function generateDescription(context = {}) {
  await delay(800)
  const { propertyType = 'residential', category = '', specifications = '', title = '' } = context

  const spec = specifications || ''
  const cat = category || 'Property'

  const descriptions = {
    residential: `Welcome to this exceptional ${spec} ${cat} that redefines modern living.

Key Highlights:
• Spacious rooms with premium vitrified flooring
• Modular kitchen with granite countertop and chimney
• 24x7 security with CCTV surveillance
• Covered car parking with visitor parking
• Well-maintained common areas and landscaped gardens
• Power backup for all common areas and lifts
• Children's play area and senior citizen corner
• Close to schools, hospitals, and shopping centers

This property is located in a well-connected area with easy access to public transportation. RERA approved and ready for immediate possession.`,

    commercial: `Premium ${spec} ${cat} available in a prime commercial location.

Key Highlights:
• Spacious layout ideal for corporate setup
• Central air conditioning with individual controls
• 24x7 power backup with DG set
• Ample parking space for staff and visitors
• High-speed elevator access
• Modern fire safety systems installed
• Conference room and common pantry access
• IT/ITES ready with structured cabling

Strategically located with excellent connectivity to major business hubs. Suitable for IT companies, startups, and corporate offices.`,

    land: `Premium ${spec} ${cat} available in a rapidly developing area.

Key Highlights:
• Clear title with all approvals in place
• Well-laid roads and underground drainage
• 24x7 security with gated access
• Water and electricity connections available
• Surrounded by established residential areas
• Close to schools, hospitals, and markets
• Excellent appreciation potential
• DTCP/RERA approved layout

Ideal for building your dream home or as a long-term investment. The area is witnessing rapid infrastructure development.`,
  }

  return descriptions[propertyType] || descriptions.residential
}

/**
 * Returns a line-level completion for the textarea
 */
export async function getLineCompletion(text, context = {}) {
  await delay(300)
  if (!text || text.trim().length < 5) return null

  const lastLine = text.split('\n').pop().trim().toLowerCase()
  if (lastLine.length < 3) return null

  const lineCompletions = {
    'spacious': ' rooms with ample natural light and cross ventilation',
    'modern': ' amenities including gym, swimming pool, and clubhouse',
    'located': ' in a prime area with excellent connectivity',
    'close': ' to metro station, schools, and shopping centers',
    'well': ' maintained society with 24x7 security and power backup',
    'premium': ' quality construction with earthquake-resistant structure',
    'fully': ' furnished with modular kitchen and wardrobes',
    'rera': ' approved project with clear legal documentation',
    'vastu': ' compliant design ensuring positive energy flow',
    'gated': ' community with landscaped gardens and play areas',
    'east': ' facing unit ensuring morning sunlight in all rooms',
    'power': ' backup available for all apartments and common areas',
    'covered': ' parking space for two cars with visitor parking',
    'near': ' major IT hubs, hospitals, and entertainment zones',
    'ready': ' to move with immediate possession available',
    'the': ' property offers excellent value for money in this location',
    'this': ' well-designed space is perfect for families and professionals',
    'ideal': ' for families looking for a peaceful yet connected lifestyle',
  }

  for (const [prefix, completion] of Object.entries(lineCompletions)) {
    if (lastLine.endsWith(prefix) || lastLine.includes(prefix)) {
      return completion
    }
  }

  return null
}

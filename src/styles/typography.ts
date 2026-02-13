// Font families
export const fontFamily = {
  primary: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  mono: ['Fira Code', 'Monaco', 'Consolas', 'monospace'],
  sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'], // Alias for primary
} as const;

// Font weights
export const fontWeight = {
  regular: '400',
  medium: '500',
  'semi-bold': '600',
  bold: '700',
} as const;

// Font sizes (in rem for better scalability)
export const fontSize = {
  // Headings
  '6xl': '3.75rem',    /* 60px */
  '5xl': '3rem',       /* 48px */
  '4xl': '2.25rem',    /* 36px */
  '3xl': '1.875rem',   /* 30px */
  '2xl': '1.5rem',     /* 24px */
  'xl': '1.25rem',     /* 20px */
  'lg': '1.125rem',    /* 18px */
  
  // Body text
  'base': '0.875rem',  /* 14px - body-text-1 */
  'base-2': '1rem',    /* 16px - body-text-2 */
  
  // Components
  'btn': '1rem',       /* 16px - button text */
  'navlink': '1rem',   /* 16px - navigation links */
  'xs': '0.625rem',    /* 10px - footer text */
  
  // Cards
  'card-title': '1.25rem',    /* 20px */
  'card-lg': '1.125rem',      /* 18px */
  'card-md': '0.875rem',      /* 14px */
  'card-sm': '0.75rem',       /* 12px */
} as const;

// Line heights
export const lineHeight = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
  
  // Specific line heights for tokens
  'jumbo': '5.15625rem',      /* 82.5px */
  'h1': '3.75rem',            /* 60px */
  'h2': '2.8125rem',          /* 45px */
  'h3': '2.8125rem',          /* 45px */
  'h4': '2.625rem',           /* 42px */
  'h5': '2.8125rem',          /* 45px */
  'h6': '2.8125rem',          /* 45px */
  'body-1': '1.125rem',       /* 18px */
  'body-2': '1.5rem',         /* 24px */
  'btn': '1.5rem',            /* 24px */
  'navlink': '1.5rem',        /* 24px */
  'footer': '0.9375rem',      /* 15px */
  'card-title': '1.875rem',   /* 30px */
  'card-lg': '1.3125rem',     /* 21px */
  'card-md': '1.3125rem',     /* 21px */
  'card-sm': '1.125rem',      /* 18px */
} as const;

// Typography tokens based on your specifications
export const typography = {
  // Headings
  'jumbo': {
    fontSize: fontSize['6xl'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.jumbo,
    fontFamily: fontFamily.primary.join(', '),
  },
  'h1': {
    fontSize: fontSize['5xl'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.h1,
    fontFamily: fontFamily.primary.join(', '),
  },
  'h2': {
    fontSize: fontSize['4xl'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.h2,
    fontFamily: fontFamily.primary.join(', '),
  },
  'h3': {
    fontSize: fontSize['3xl'],
    fontWeight: fontWeight['semi-bold'],
    lineHeight: lineHeight.h3,
    fontFamily: fontFamily.primary.join(', '),
  },
  'h4': {
    fontSize: fontSize['2xl'],
    fontWeight: fontWeight['semi-bold'],
    lineHeight: lineHeight.h4,
    fontFamily: fontFamily.primary.join(', '),
  },
  'h5': {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.h5,
    fontFamily: fontFamily.primary.join(', '),
  },
  'h6': {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.h6,
    fontFamily: fontFamily.primary.join(', '),
  },
  
  // Body text
  'body-1': {
    fontSize: fontSize.base,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight['body-1'],
    fontFamily: fontFamily.primary.join(', '),
  },
  'body-2': {
    fontSize: fontSize['base-2'],
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight['body-2'],
    fontFamily: fontFamily.primary.join(', '),
  },
  
  // Components
  'button': {
    fontSize: fontSize.btn,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.btn,
    fontFamily: fontFamily.primary.join(', '),
  },
  'navlink': {
    fontSize: fontSize.navlink,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.navlink,
    fontFamily: fontFamily.primary.join(', '),
  },
  'footer': {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.footer,
    fontFamily: fontFamily.primary.join(', '),
  },
  
  // Card components
  'card-title': {
    fontSize: fontSize['card-title'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight['card-title'],
    fontFamily: fontFamily.primary.join(', '),
  },
  'card-lg': {
    fontSize: fontSize['card-lg'],
    fontWeight: fontWeight['semi-bold'],
    lineHeight: lineHeight['card-lg'],
    fontFamily: fontFamily.primary.join(', '),
  },
  'card-md': {
    fontSize: fontSize['card-md'],
    fontWeight: fontWeight['semi-bold'],
    lineHeight: lineHeight['card-md'],
    fontFamily: fontFamily.primary.join(', '),
  },
  'card-sm': {
    fontSize: fontSize['card-sm'],
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight['card-sm'],
    fontFamily: fontFamily.primary.join(', '),
  },
} as const;

// Tailwind CSS typography configuration
export const tailwindTypography = {
  fontFamily: {
    primary: fontFamily.primary,
    sans: fontFamily.sans,
    mono: fontFamily.mono,
  },
  fontSize: {
    // Convert to Tailwind format [fontSize, lineHeight]
    '6xl': [fontSize['6xl'], lineHeight.jumbo],
    '5xl': [fontSize['5xl'], lineHeight.h1],
    '4xl': [fontSize['4xl'], lineHeight.h2],
    '3xl': [fontSize['3xl'], lineHeight.h3],
    '2xl': [fontSize['2xl'], lineHeight.h4],
    'xl': [fontSize.xl, lineHeight.h5],
    'lg': [fontSize.lg, lineHeight.h6],
    'base': [fontSize.base, lineHeight['body-1']],
    'base-2': [fontSize['base-2'], lineHeight['body-2']],
    'btn': [fontSize.btn, lineHeight.btn],
    'navlink': [fontSize.navlink, lineHeight.navlink],
    'xs': [fontSize.xs, lineHeight.footer],
    'card-title': [fontSize['card-title'], lineHeight['card-title']],
    'card-lg': [fontSize['card-lg'], lineHeight['card-lg']],
    'card-md': [fontSize['card-md'], lineHeight['card-md']],
    'card-sm': [fontSize['card-sm'], lineHeight['card-sm']],
  },
  fontWeight: {
    regular: fontWeight.regular,
    medium: fontWeight.medium,
    semibold: fontWeight['semi-bold'],
    bold: fontWeight.bold,
  },
  lineHeight: {
    none: lineHeight.none,
    tight: lineHeight.tight,
    snug: lineHeight.snug,
    normal: lineHeight.normal,
    relaxed: lineHeight.relaxed,
    loose: lineHeight.loose,
    jumbo: lineHeight.jumbo,
    h1: lineHeight.h1,
    h2: lineHeight.h2,
    h3: lineHeight.h3,
    h4: lineHeight.h4,
    h5: lineHeight.h5,
    h6: lineHeight.h6,
    'body-1': lineHeight['body-1'],
    'body-2': lineHeight['body-2'],
    btn: lineHeight.btn,
    navlink: lineHeight.navlink,
    footer: lineHeight.footer,
    'card-title': lineHeight['card-title'],
    'card-lg': lineHeight['card-lg'],
    'card-md': lineHeight['card-md'],
    'card-sm': lineHeight['card-sm'],
  },
} as const;

// Type definitions
export type FontFamily = typeof fontFamily;
export type FontWeight = typeof fontWeight;
export type FontSize = typeof fontSize;
export type LineHeight = typeof lineHeight;
export type Typography = typeof typography;

// Helper function to get CSS custom properties
export const getTypographyCSSVariables = () => {
  const cssVars: Record<string, string> = {};
  
  // Font families
 
  
  // Typography tokens
  Object.entries(typography).forEach(([key, value]) => {
    cssVars[`--text-${key}-font-size`] = value.fontSize;
    cssVars[`--text-${key}-font-weight`] = value.fontWeight;
    cssVars[`--text-${key}-line-height`] = value.lineHeight;
    cssVars[`--text-${key}-font-family`] = value.fontFamily;
  });
  
  return cssVars;
};

// Helper function to create typography utility classes
export const createTypographyClass = (token: keyof typeof typography) => {
  const style = typography[token];
  return {
    fontSize: style.fontSize,
    fontWeight: style.fontWeight,
    lineHeight: style.lineHeight,
    fontFamily: style.fontFamily,
  };
};

// Semantic typography groups
export const headings = {
  jumbo: typography.jumbo,
  h1: typography.h1,
  h2: typography.h2,
  h3: typography.h3,
  h4: typography.h4,
  h5: typography.h5,
  h6: typography.h6,
} as const;

export const bodyText = {
  'body-1': typography['body-1'],
  'body-2': typography['body-2'],
} as const;

export const components = {
  button: typography.button,
  navlink: typography.navlink,
  footer: typography.footer,
} as const;

export const cards = {
  title: typography['card-title'],
  large: typography['card-lg'],
  medium: typography['card-md'],
  small: typography['card-sm'],
} as const;

// Responsive typography helpers
export const responsiveTypography = {
  'jumbo-responsive': {
    base: typography['card-lg'], // 18px on mobile
    md: typography.h3,           // 30px on tablet
    lg: typography.jumbo,        // 60px on desktop
  },
  'h1-responsive': {
    base: typography.h4,         // 24px on mobile
    md: typography.h2,           // 36px on tablet  
    lg: typography.h1,           // 48px on desktop
  },
  'body-responsive': {
    base: typography['body-1'],  // 14px on mobile
    md: typography['body-2'],    // 16px on tablet+
  },
} as const;

export default {
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
  typography,
  tailwindTypography,
  headings,
  bodyText,
  components,
  cards,
  responsiveTypography,
};
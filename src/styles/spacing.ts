export const spacing = {
  px: '1px',
  0: '0',
  1: '0.25rem',   /* 4px */
  2: '0.5rem',    /* 8px */
  3: '0.75rem',   /* 12px */
  4: '1rem',      /* 16px */
  5: '1.25rem',   /* 20px */
  6: '1.5rem',    /* 24px */
  7: '1.75rem',   /* 28px */
  8: '2rem',      /* 32px */
  9: '2.25rem',   /* 36px */
  10: '2.5rem',   /* 40px */
  11: '2.75rem',  /* 44px */
  12: '3rem',     /* 48px */
  14: '3.5rem',   /* 56px */
  16: '4rem',     /* 64px */
  20: '5rem',     /* 80px */
  24: '6rem',     /* 96px */
  28: '7rem',     /* 112px */
  32: '8rem',     /* 128px */
} as const;

// Extended spacing values for larger layouts
export const extendedSpacing = {
  ...spacing,
  36: '9rem',     /* 144px */
  40: '10rem',    /* 160px */
  44: '11rem',    /* 176px */
  48: '12rem',    /* 192px */
  52: '13rem',    /* 208px */
  56: '14rem',    /* 224px */
  60: '15rem',    /* 240px */
  64: '16rem',    /* 256px */
  72: '18rem',    /* 288px */
  80: '20rem',    /* 320px */
  96: '24rem',    /* 384px */
} as const;

// Semantic spacing for specific use cases
export const semanticSpacing = {
  none: '0',
  xs: '0.25rem',    /* 4px */
  sm: '0.5rem',     /* 8px */
  md: '1rem',       /* 16px */
  lg: '1.5rem',     /* 24px */
  xl: '2rem',       /* 32px */
  '2xl': '2.5rem',  /* 40px */
  '3xl': '3rem',    /* 48px */
  '4xl': '4rem',    /* 64px */
  '5xl': '5rem',    /* 80px */
  '6xl': '6rem',    /* 96px */
} as const;

// Border Radius values
export const borderRadius = {
  none: '0',
  xs: '0.0625rem',  /* 1px */
  sm: '0.125rem',   /* 2px */
  md: '0.375rem',   /* 6px */
  lg: '0.5rem',     /* 8px */
  xl: '0.75rem',    /* 12px */
  '2xl': '1rem',    /* 16px */
  '3xl': '1.5rem',  /* 24px */
  '4xl': '2rem',    /* 32px */
  full: '9999px',
  DEFAULT: '0.375rem', /* 6px - default for rounded class */
} as const;

// Extended border radius for specific use cases
export const extendedBorderRadius = {
  ...borderRadius,
  // Corner-specific values
  't-sm': '0.125rem 0.125rem 0 0',
  't-md': '0.375rem 0.375rem 0 0',
  't-lg': '0.5rem 0.5rem 0 0',
  't-xl': '0.75rem 0.75rem 0 0',
  'b-sm': '0 0 0.125rem 0.125rem',
  'b-md': '0 0 0.375rem 0.375rem',
  'b-lg': '0 0 0.5rem 0.5rem',
  'b-xl': '0 0 0.75rem 0.75rem',
  'l-sm': '0.125rem 0 0 0.125rem',
  'l-md': '0.375rem 0 0 0.375rem',
  'l-lg': '0.5rem 0 0 0.5rem',
  'l-xl': '0.75rem 0 0 0.75rem',
  'r-sm': '0 0.125rem 0.125rem 0',
  'r-md': '0 0.375rem 0.375rem 0',
  'r-lg': '0 0.5rem 0.5rem 0',
  'r-xl': '0 0.75rem 0.75rem 0',
} as const;

// Semantic border radius for UI components
export const semanticBorderRadius = {
  button: '0.375rem',     /* 6px */
  'button-sm': '0.25rem', /* 4px */
  'button-lg': '0.5rem',  /* 8px */
  card: '0.5rem',         /* 8px */
  modal: '0.75rem',       /* 12px */
  input: '0.375rem',      /* 6px */
  badge: '9999px',        /* full */
  avatar: '9999px',       /* full */
  tooltip: '0.25rem',     /* 4px */
  dropdown: '0.5rem',     /* 8px */
  tab: '0.375rem 0.375rem 0 0', /* rounded top only */
} as const;

// Type definitions
export type Spacing = typeof spacing;
export type ExtendedSpacing = typeof extendedSpacing;
export type SemanticSpacing = typeof semanticSpacing;
export type BorderRadius = typeof borderRadius;
export type ExtendedBorderRadius = typeof extendedBorderRadius;
export type SemanticBorderRadius = typeof semanticBorderRadius;

// Helper function to get CSS custom properties for spacing
export const getSpacingCSSVariables = () => {
  const cssVars: Record<string, string> = {};
  
  Object.entries(extendedSpacing).forEach(([key, value]) => {
    cssVars[`--space-${key}`] = value;
  });
  
  return cssVars;
};

// Helper function to get CSS custom properties for border radius
export const getBorderRadiusCSSVariables = () => {
  const cssVars: Record<string, string> = {};
  
  Object.entries(borderRadius).forEach(([key, value]) => {
    cssVars[`--radius-${key}`] = value;
  });
  
  return cssVars;
};

// Helper function to get all CSS custom properties
export const getAllCSSVariables = () => {
  return {
    ...getSpacingCSSVariables(),
    ...getBorderRadiusCSSVariables(),
  };
};

// Helper function to convert rem to px (assuming 16px base)
export const remToPx = (remValue: string): number => {
  const remNumber = parseFloat(remValue.replace('rem', ''));
  return remNumber * 16;
};

// Helper function to get pixel values for spacing
export const getSpacingInPixels = () => {
  const pixelValues: Record<string, number> = {};
  
  Object.entries(extendedSpacing).forEach(([key, value]) => {
    if (value === '0') {
      pixelValues[key] = 0;
    } else if (value === '1px') {
      pixelValues[key] = 1;
    } else {
      pixelValues[key] = remToPx(value);
    }
  });
  
  return pixelValues;
};

// Helper function to get pixel values for border radius
export const getBorderRadiusInPixels = () => {
  const pixelValues: Record<string, number | string> = {};
  
  Object.entries(borderRadius).forEach(([key, value]) => {
    if (value === '0') {
      pixelValues[key] = 0;
    } else if (value === '9999px') {
      pixelValues[key] = '9999px';
    } else {
      pixelValues[key] = remToPx(value);
    }
  });
  
  return pixelValues;
};

// Tailwind CSS spacing configuration
export const tailwindSpacing = {
  ...extendedSpacing,
  // Add semantic spacing with different keys to avoid conflicts
  'xs': semanticSpacing.xs,
  'sm': semanticSpacing.sm,
  'md': semanticSpacing.md,
  'lg': semanticSpacing.lg,
  'xl': semanticSpacing.xl,
  '2xl': semanticSpacing['2xl'],
  '3xl': semanticSpacing['3xl'],
  '4xl': semanticSpacing['4xl'],
  '5xl': semanticSpacing['5xl'],
  '6xl': semanticSpacing['6xl'],
};

// Tailwind CSS border radius configuration
export const tailwindBorderRadius = {
  ...borderRadius,
  // Add semantic border radius
  button: semanticBorderRadius.button,
  'button-sm': semanticBorderRadius['button-sm'],
  'button-lg': semanticBorderRadius['button-lg'],
  card: semanticBorderRadius.card,
  modal: semanticBorderRadius.modal,
  input: semanticBorderRadius.input,
  badge: semanticBorderRadius.badge,
  avatar: semanticBorderRadius.avatar,
  tooltip: semanticBorderRadius.tooltip,
  dropdown: semanticBorderRadius.dropdown,
};

// For margin and padding specific values (if you need different values)
export const marginSpacing = tailwindSpacing;
export const paddingSpacing = tailwindSpacing;

// Component-specific spacing presets
export const componentSpacing = {
  // Button spacing
  'button-padding-sm': '0.25rem 0.75rem',    /* py-1 px-3 */
  'button-padding-md': '0.5rem 1rem',        /* py-2 px-4 */
  'button-padding-lg': '0.75rem 1.5rem',     /* py-3 px-6 */
  
  // Card spacing
  'card-padding': '1.5rem',                  /* p-6 */
  'card-padding-sm': '1rem',                 /* p-4 */
  'card-padding-lg': '2rem',                 /* p-8 */
  
  // Input spacing
  'input-padding': '0.5rem 0.75rem',         /* py-2 px-3 */
  'input-padding-sm': '0.25rem 0.5rem',      /* py-1 px-2 */
  'input-padding-lg': '0.75rem 1rem',        /* py-3 px-4 */
  
  // Section spacing
  'section-margin': '3rem 0',                /* my-12 */
  'section-padding': '2rem',                 /* p-8 */
} as const;

export default {
  spacing,
  extendedSpacing,
  semanticSpacing,
  borderRadius,
  extendedBorderRadius,
  semanticBorderRadius,
  tailwindSpacing,
  tailwindBorderRadius,
  componentSpacing,
};
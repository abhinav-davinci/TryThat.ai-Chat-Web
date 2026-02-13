export const shadows = {
  // No shadow
  none: 'none',
  
  // Basic shadows
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  
  // Extended shadows
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.35)',
  
  // Inner shadows
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  'inner-sm': 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  'inner-md': 'inset 0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  'inner-lg': 'inset 0 8px 16px -4px rgba(0, 0, 0, 0.1)',
} as const;

// Colored shadows for different themes
export const coloredShadows = {
  // Primary colored shadows
  'primary-sm': '0 1px 2px 0 rgba(37, 88, 166, 0.1)',
  'primary-md': '0 4px 6px -1px rgba(37, 88, 166, 0.15), 0 2px 4px -1px rgba(37, 88, 166, 0.1)',
  'primary-lg': '0 10px 15px -3px rgba(37, 88, 166, 0.2), 0 4px 6px -2px rgba(37, 88, 166, 0.1)',
  'primary-xl': '0 20px 25px -5px rgba(37, 88, 166, 0.25), 0 10px 10px -5px rgba(37, 88, 166, 0.1)',
  
  // Secondary colored shadows
  'secondary-sm': '0 1px 2px 0 rgba(255, 163, 29, 0.1)',
  'secondary-md': '0 4px 6px -1px rgba(255, 163, 29, 0.15), 0 2px 4px -1px rgba(255, 163, 29, 0.1)',
  'secondary-lg': '0 10px 15px -3px rgba(255, 163, 29, 0.2), 0 4px 6px -2px rgba(255, 163, 29, 0.1)',
  
  // Success shadows
  'success-sm': '0 1px 2px 0 rgba(22, 163, 74, 0.1)',
  'success-md': '0 4px 6px -1px rgba(22, 163, 74, 0.15), 0 2px 4px -1px rgba(22, 163, 74, 0.1)',
  
  // Error shadows
  'error-sm': '0 1px 2px 0 rgba(255, 68, 68, 0.1)',
  'error-md': '0 4px 6px -1px rgba(255, 68, 68, 0.15), 0 2px 4px -1px rgba(255, 68, 68, 0.1)',
  
  // Warning shadows
  'warning-sm': '0 1px 2px 0 rgba(254, 249, 195, 0.3)',
  'warning-md': '0 4px 6px -1px rgba(254, 249, 195, 0.4), 0 2px 4px -1px rgba(254, 249, 195, 0.25)',
} as const;

// Elevation shadows (Material Design inspired)
export const elevationShadows = {
  'elevation-0': 'none',
  'elevation-1': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  'elevation-2': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  'elevation-3': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  'elevation-4': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  'elevation-5': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
} as const;

// Dark mode shadows
export const darkShadows = {
  'dark-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
  'dark-md': '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.25)',
  'dark-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.25)',
  'dark-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3)',
  'dark-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
  
  // Dark mode with subtle glow
  'dark-glow-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.3), 0 0 4px 0 rgba(91, 115, 242, 0.1)',
  'dark-glow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.25), 0 0 8px 0 rgba(91, 115, 242, 0.15)',
  'dark-glow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.25), 0 0 12px 0 rgba(91, 115, 242, 0.2)',
} as const;



// Combined shadows object
export const allShadows = {
  ...shadows,
  ...coloredShadows,
  ...elevationShadows,
  ...darkShadows,
} as const;

// Type definitions
export type Shadows = typeof shadows;
export type ColoredShadows = typeof coloredShadows;
export type ElevationShadows = typeof elevationShadows;
export type DarkShadows = typeof darkShadows;
export type AllShadows = typeof allShadows;

// Helper function to get CSS custom properties
export const getShadowCSSVariables = () => {
  const cssVars: Record<string, string> = {};
  
  Object.entries(allShadows).forEach(([key, value]) => {
    cssVars[`--shadow-${key}`] = value;
  });
  
  return cssVars;
};

// Helper function to create custom shadows
export const createShadow = (
  offsetX: number,
  offsetY: number,
  blurRadius: number,
  spreadRadius: number = 0,
  color: string = 'rgba(0, 0, 0, 0.1)'
): string => {
  return `${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${color}`;
};

// Helper function to create multiple shadows
export const combineShadows = (...shadows: string[]): string => {
  return shadows.join(', ');
};

// Tailwind CSS shadow configuration
export const tailwindShadows = {
  // Default shadows
  DEFAULT: shadows.md,
  ...allShadows,
} as const;

// Shadow presets for common UI elements
export const shadowPresets = {
  card: shadows.md,
  button: shadows.sm,
  'button-hover': shadows.md,
  'button-active': shadows.inner,
  modal: shadows.xl,
  dropdown: shadows.lg,
  tooltip: shadows.md,
  navbar: shadows.sm,
  sidebar: shadows.lg,
  'floating-action': shadows['2xl'],
} as const;

export default shadows;
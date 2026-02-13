

export const colors = {
    // Primary Colors
    primary: {
      main: '#2558A6',
      light: '#4A7BC8',
      dark: '#1A4282',
      50: '#E8F1FF',
      100: '#D1E3FF',
      200: '#A3C7FF',
      300: '#75ABFF',
      400: '#478FFF',
      500: '#2558A6',
      600: '#1E4685',
      700: '#173464',
      800: '#102342',
      900: '#091121',
      DEFAULT: '#2558A6', // This becomes the default when using 'primary' without a shade
    },
  
    // Secondary Colors
    secondary: {
      main: '#FFA31D',
      light: '#FFB448',
      dark: '#CD8319',
      50: '#FFF3E0',
      100: '#FFE0B2',
      200: '#FFCC80',
      300: '#FFB74D',
      400: '#FFA726',
      500: '#FFA31D',
      600: '#FB8C00',
      700: '#EF6C00',
      800: '#E65100',
      900: '#BF360C',
      DEFAULT: '#FFA31D',
    },
  
    // Accent Colors
    accent: {
      success: '#16A34A',
      warning: '#FEF9C3',
      error: '#FF4444',
      info: '#2196F3',
      'dark-green': '#14532D',
      'not-available-brown': '#CD820A',
      'green-light': '#22C55E',
      shop: '#386C8F',
      'positive-tags': '#DCFCE7',
    },
  
    // Background Colors
    bg: {
      primary: '#FFFFFF',
      secondary: '#F8FAFC',
      tertiary: '#F1F5F9',
      overlay: 'rgba(37, 88, 166, 0.05)',
    },
  
    // Neutral Colors
    neutral: {
      50: '#F8FAFC',
      100: '#F1F5F9',
      200: '#E2E8F0',
      300: '#CBD5E1',
      400: '#94A3B8',
      500: '#64748B',
      600: '#475569',
      700: '#334155',
      800: '#1E293B',
      900: '#0F172A',
      DEFAULT: '#64748B',
    },
  
    // Gray Colors
    gray: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      DEFAULT: '#9E9E9E',
    },
  
    // Dark theme colors
    dark: {
      bg: '#0b0f19',
      panel: '#0f1525',
      elevated: '#111827',
      border: '#1f2937',
      text: '#e5e7eb',
      muted: '#9ca3af',
      primary: '#5b73f2',
      accent: '#6b63f6',
    },
  } as const;
  
  // Type definition for the colors object
  export type Colors = typeof colors;
  
  // Helper function to get CSS custom properties
  export const getCSSVariables = () => {
    const cssVars: Record<string, string> = {};
    
    const flatten = (obj: any, prefix = '') => {
      Object.entries(obj).forEach(([key, value]) => {
        const cssKey = prefix ? `${prefix}-${key}` : key;
        
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
          flatten(value, cssKey);
        } else {
          cssVars[`--color-${cssKey}`] = value as string;
        }
      });
    };
    
    flatten(colors);
    return cssVars;
  };
  
  // Tailwind CSS colors configuration
  export const tailwindColors = {
    primary: colors.primary,
    secondary: colors.secondary,
    accent: colors.accent,
    neutral: colors.neutral,
    gray: colors.gray,
    bg: colors.bg,
    dark: colors.dark,
    
    // Standard color names for easier usage
    success: colors.accent.success,
    warning: colors.accent.warning,
    error: colors.accent.error,
    info: colors.accent.info,
  };
  
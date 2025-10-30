export type ThemeType = {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    textLight: string;
    border: string;
    error: string;
    success: string;
    cardBg: string;
    gradientStart: string;
    gradientEnd: string;
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  shadows: {
    small: string;
    medium: string;
    large: string;
  };
  transitions: {
    default: string;
    slow: string;
    fast: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
    round: string;
  };
};

const theme: ThemeType = {
  colors: {
    primary: '#4F46E5', // Indigo
    secondary: '#10B981', // Emerald
    accent: '#F59E0B', // Amber
    background: '#FFFFFF',
    text: '#1F2937', // Gray 800
    textLight: '#6B7280', // Gray 500
    border: '#E5E7EB', // Gray 200
    error: '#EF4444', // Red
    success: '#10B981', // Green
    cardBg: '#F9FAFB', // Gray 50
    gradientStart: '#4F46E5', // Indigo
    gradientEnd: '#7C3AED', // Violet
  },
  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  shadows: {
    small: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.05)',
    medium: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    large: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
  transitions: {
    default: 'all 0.3s ease',
    slow: 'all 0.6s ease',
    fast: 'all 0.15s ease',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
    round: '50%',
  },
};

export default theme;
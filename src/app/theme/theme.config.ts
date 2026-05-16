export interface AppThemeConfig {
  colorScheme: {
    light: {
      primaryColor: string;
    };
    dark: {
      primaryColor: string;
    };
  };

  borderRadius: {
    sm: string;
    md: string;
    lg: string;
  };

  fontFamily: string;
  baseFontSize: string;
}

export const DEFAULT_THEME_CONFIG: AppThemeConfig = {
  colorScheme: {
    light: {
      primaryColor: '',
    },
    dark: {
      primaryColor: '',
    },
  },

  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },

  fontFamily: 'Inter, system-ui, sans-serif',
  baseFontSize: '14px',
};

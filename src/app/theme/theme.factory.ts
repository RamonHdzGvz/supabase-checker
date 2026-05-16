import Lara from '@primeuix/themes/lara';
import { definePreset } from '@primeuix/themes';
//
import { AppThemeConfig, DEFAULT_THEME_CONFIG } from './theme.config';

export function customPrimeTheme(config: AppThemeConfig = DEFAULT_THEME_CONFIG) {
  return definePreset(Lara, {

  });
}

// now using this (wip)
export const prolitigioPrimeTheme = definePreset(Lara, {
  semantic: {
    // primary color for everything in general
    primary: {
      500: 'var(--color-madison-800)',
      600: 'var(--color-madison-900)',
      700: 'var(--color-madison-950)'
    }
  },
  components: {
    // custom colors for button component
    button: {
      colorScheme: {
        light: {
          root: {
            warn: {
              background: 'var(--color-golden-500)',
              hoverBackground: 'var(--color-golden-600)',
              activeBackground: 'var(--color-golden-700)',
              hoverBorderColor: 'var(--color-golden-600)',
              borderColor: 'var(--color-golden-500)',
              activeBorderColor: 'var(--color-golden-700)',
              color: '#ffffff',
              hoverColor: '#ffffff',
              activeColor: '#ffffff',
            }
          },
        }
      }
    }
  }
});
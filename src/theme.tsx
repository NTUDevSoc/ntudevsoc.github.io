import { extendTheme, theme as baseTheme } from '@chakra-ui/react'

interface ThemeExtensions {
  colors: {
    devsoc: {
      primary: string;
      secondary: string;
    }
  }
}

export type Theme = typeof baseTheme & ThemeExtensions;

export const theme: Theme = extendTheme({
  colors: {
    devsoc: {
      primary: '#102542',
      secondary: '#FFFFFF'
    }
  }
}) as Theme;
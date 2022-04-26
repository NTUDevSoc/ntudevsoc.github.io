import { Box, chakra } from '@chakra-ui/react'
import { theme } from '../../theme'

export const Card = chakra(Box, {
  baseStyle: {
    backgroundColor: theme.colors.gray['100'],
    boxShadow: `10px 10px 5px -10px ${theme.colors.gray['700']}`,
    borderRadius: '0.25rem',
    padding: '0.75rem'
  }
})
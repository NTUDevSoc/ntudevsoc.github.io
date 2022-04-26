import { chakra } from '@chakra-ui/react'
import { Link } from 'gatsby'
import { lighten } from 'polished'
import { theme } from '../../theme'

export const AvatarImage = chakra('img', {
  baseStyle: {
    borderStyle: 'none',
    borderRadius: '50%',
    width: '100px',
    padding: '0.5rem'
  }
})

export const ProfileLink = chakra(Link, {
  baseStyle: {
    _hover: {
      color: lighten(0.5, theme.colors.black)
    }
  }
})
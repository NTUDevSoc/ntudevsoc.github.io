import { chakra, Flex, Link } from '@chakra-ui/react'
import React, { FunctionComponent } from "react";
import { DevSocLogo } from "../shared/devsoc-logo";
import { lighten } from "polished";
import { theme} from '../../theme'

export const Header: FunctionComponent = () => {
  return (
    <Flex as='nav' backgroundColor='devsoc.primary' alignItems='center' justifyContent='center' height='3.5rem'>
      <DevSocLogo />
      <NavLink to="/">Home</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/join-us">Join Us</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/archive">Archives</NavLink>
    </Flex>
  );
};

const NavLink = chakra(Link, {
  baseStyle: {
    display: 'inline-block',
    backgroundColor: theme.colors.devsoc.primary,
    color: theme.colors.devsoc.secondary,
    padding: '1rem',
    textDecoration: 'none',
    _hover: {
      backgroundColor: lighten(0.1, theme.colors.devsoc.primary),
      textDecoration: 'none'
    }
  }
})
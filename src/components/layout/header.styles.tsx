import theme from "../../theme.json";
import styled from "styled-components";
import React from "react";
import { Link } from "gatsby";
import { lighten } from "polished";

export const Navbar = styled.nav({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.colours.primary,
});

export const NavLink = styled(props => <Link {...props} />)({
  display: "inline-block",
  backgroundColor: theme.colours.primary,
  color: theme.colours.secondary,
  padding: theme.spacing.default,
  textDecoration: "none",

  ":hover": {
      backgroundColor: lighten(0.1, theme.colours.primary)
  }
});

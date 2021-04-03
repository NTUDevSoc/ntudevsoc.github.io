import React, { FunctionComponent } from "react";
import { Navbar, NavLink } from "./header.styles";

export const Header: FunctionComponent = () => {
  return (
    <Navbar>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/join-us">Join Us</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/archive">Archives</NavLink>
    </Navbar>
  );
};

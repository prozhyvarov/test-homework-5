import React from 'react'
import { HeaderNavigation, StyledNavLink } from './Header.styled';

const Header = () => {
  return (
    <header>
      <HeaderNavigation>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </HeaderNavigation>
    </header>
  );
}

export default Header

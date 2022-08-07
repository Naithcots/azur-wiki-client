import { useState } from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <StyledHeader>
      <Logo src="/azurlane_logo.svg" alt="logo" />
      <Hamburger navOpen={navOpen} setNavOpen={setNavOpen} />
    </StyledHeader>
  );
};
export default Header;

const StyledHeader = styled.header`
  margin: 1em;

  position: fixed;
  top: 0;
  left: 0;
`;

const Logo = styled.img`
  max-width: 175px;
  user-select: none;
`;

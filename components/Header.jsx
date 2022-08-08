import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <StyledHeader>
      <Image
        src="/azurlane_logo.svg"
        alt="logo"
        width={150}
        height={75}
        style={{ userSelect: "none" }}
        priority
      />
      <Hamburger navOpen={navOpen} setNavOpen={setNavOpen} />
    </StyledHeader>
  );
};
export default Header;

const StyledHeader = styled.header`
  padding: 1em 1.5em;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 900;
`;

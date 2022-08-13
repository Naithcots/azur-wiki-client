import Image from "next/image";
import { useState } from "react";
import Hamburger from "../Hamburger/Hamburger";
import { StyledHeader, ImageContainer } from "./styles";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <StyledHeader>
      <ImageContainer>
        <Image
          src="/azurlane_logo.svg"
          alt="logo"
          layout="fill"
          style={{ userSelect: "none" }}
          priority
        />
      </ImageContainer>
      <Hamburger navOpen={navOpen} setNavOpen={setNavOpen} />
    </StyledHeader>
  );
};
export default Header;

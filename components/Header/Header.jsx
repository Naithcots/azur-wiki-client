import Image from "next/image";
import { useState } from "react";
import Hamburger from "../Hamburger/Hamburger";
import { StyledHeader, ImageContainer } from "./styles";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <StyledHeader>
      <Image
        src="/azurlane_logo.svg"
        alt="logo"
        width={120}
        height={55}
        style={{ userSelect: "none" }}
        priority
      />
      <Hamburger navOpen={navOpen} setNavOpen={setNavOpen} />
    </StyledHeader>
  );
};
export default Header;

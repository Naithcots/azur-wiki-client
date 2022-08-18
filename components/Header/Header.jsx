import Image from "next/image";
import { useEffect, useState } from "react";
import Hamburger from "../Hamburger/Hamburger";
import Menu from "../Menu/Menu";
import { StyledHeader } from "./styles";
import useBodyOverflow from "../../hooks/useBodyOverflow";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { setOverflow } = useBodyOverflow();

  useEffect(() => {
    if (navOpen) {
      window.scrollTo({ top: 0, behavior: "auto" });
      setOverflow("hidden");
    } else setOverflow("visible");
  }, [navOpen]);

  return (
    <>
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

      <Menu navOpen={navOpen} />
    </>
  );
};
export default Header;

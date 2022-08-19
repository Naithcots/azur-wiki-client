import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import useNation from "../../hooks/useNation";
import Hamburger from "../Hamburger/Hamburger";
import Menu from "../Menu/Menu";
import { StyledHeader } from "./styles";
import useBodyOverflow from "../../hooks/useBodyOverflow";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { setOverflow } = useBodyOverflow();
  const { setNation } = useNation();

  const isDesktop = useMediaQuery({
    query: "(min-width: 876px)",
  });

  useEffect(() => {
    if (navOpen) {
      window.scrollTo({ top: 0, behavior: "auto" });
      setOverflow("hidden");
    } else !isDesktop && setOverflow("visible");
  }, [navOpen, isDesktop]);

  return (
    <>
      <StyledHeader>
        <Link href="/">
          <a onClick={() => setNation(null)}>
            <Image
              src="/azurlane_logo.svg"
              alt="logo"
              width={120}
              height={55}
              style={{ userSelect: "none" }}
              priority
            />
          </a>
        </Link>
        <Hamburger navOpen={navOpen} setNavOpen={setNavOpen} />
      </StyledHeader>

      <Menu navOpen={navOpen} setNavOpen={setNavOpen} />
    </>
  );
};
export default Header;

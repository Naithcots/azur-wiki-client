import { Line, StyledHamburger } from "./styles";

const Hamburger = ({ navOpen, setNavOpen }) => {
  return (
    <StyledHamburger
      open={navOpen}
      onClick={() => {
        navOpen ? setNavOpen(false) : setNavOpen(true);
      }}
    >
      <Line />
      <Line />
      <Line />
    </StyledHamburger>
  );
};
export default Hamburger;

import Search from "../Search/Search";
import { StyledMenu } from "./styles";

const Menu = ({ navOpen, setNavOpen }) => {
  return (
    <StyledMenu open={navOpen}>
      <Search setNavOpen={setNavOpen} />
      {/* <LinksContainer>
        <Link href="#" passHref>
          <a>About</a>
        </Link>
      </LinksContainer> */}
    </StyledMenu>
  );
};
export default Menu;

import { useState } from "react";
import { useQuery } from "@apollo/client";
import GET_SHIPS_BY_KEYWORD from "../../queries/ShipsByKeyword";
import Link from "next/link";
import {
  StyledSearch,
  SearchContainer,
  InputContainer,
  Label,
  Input,
  ResultsContainer,
  Spinner,
  Result,
  Thumbnail,
  Code,
} from "./styles";

const Search = ({ setNavOpen }) => {
  const [keyword, setKeyword] = useState("");
  const { error, loading, data } = useQuery(GET_SHIPS_BY_KEYWORD, {
    variables: {
      keyword,
    },
  });

  return (
    <StyledSearch>
      <SearchContainer>
        <InputContainer>
          <Input
            type="text"
            placeholder=" "
            onKeyUp={(e) => setKeyword(e.target.value)}
          ></Input>
          <Label>Search</Label>
        </InputContainer>
      </SearchContainer>

      <ResultsContainer>
        {error && <Spinner />}
        {loading && <Spinner />}
        {keyword &&
          data &&
          data.shipsByKeyword.map((ship) => (
            <Link href={`/ship/${ship.id}`} key={ship.id}>
              <Result onClick={() => setNavOpen(false)}>
                <Thumbnail src={ship.thumbnail} />
                <Code>{ship.names.code}</Code>
              </Result>
            </Link>
          ))}
      </ResultsContainer>
    </StyledSearch>
  );
};
export default Search;

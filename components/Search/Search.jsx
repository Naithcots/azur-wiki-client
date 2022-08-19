import { useState } from "react";
import { useQuery } from "@apollo/client";
import GET_SHIPS_BY_KEYWORD from "../../queries/ShipsByKeyword";
import Link from "next/link";
import {SearchContainer, Input, ResultsContainer, Spinner, Result, Thumbnail, Code} from "./styles";

const Search = ({ setNavOpen }) => {
  const [keyword, setKeyword] = useState("");
  const { error, loading, data } = useQuery(GET_SHIPS_BY_KEYWORD, {
    variables: {
      keyword,
    },
  });

  return (
    <>
      <SearchContainer>
        <Input type="text" onKeyUp={(e) => setKeyword(e.target.value)}></Input>
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
    </>
  );
};
export default Search;

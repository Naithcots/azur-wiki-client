import { gql } from "@apollo/client";

const GET_SHIPS_BY_KEYWORD = gql`
  query getShipsByKeyword($keyword: String!) {
    shipsByKeyword(keyword: $keyword) {
      id
      names {
        en
        code
      }
      nationality
      thumbnail
    }
  }
`;

export default GET_SHIPS_BY_KEYWORD;

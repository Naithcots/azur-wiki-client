import { gql } from "@apollo/client";

const SHIPS_BY_NATIONALITY = gql`
  query getShipsByNat($nat: Nationality!) {
    shipsByNationality(nationality: $nat) {
      id
      names {
        en
        code
      }
      nationality
      thumbnail
      class
      rarity
      stars
      hullType
      stats {
        baseStats {
          health
          torpedo
          luck
          reload
        }
      }
      skills {
        names {
          en
        }
        icon
        description
      }
      gallery {
        description
        url
      }
      skins {
        name
        image
      }
      obtainedFrom {
        obtainedFrom
      }
    }
  }
`;

export default SHIPS_BY_NATIONALITY;

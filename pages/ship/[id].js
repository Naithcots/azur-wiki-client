import { useMediaQuery } from "react-responsive";
import ShipGeneral from "../../components/ShipGeneral/ShipGeneral";
import ShipSkills from "../../components/ShipSkills/ShipSkills";
import ShipSkins from "../../components/ShipSkins/ShipSkins";
import useScrollWheel from "../../hooks/useScrollWheel";
import { StyledShips, MobileStyledShips } from "../../styles/shared/Ship";

const Ship = ({ ship }) => {
  const { transformValue, next } = useScrollWheel();
  const isDesktop = useMediaQuery({
    query: "(min-width: 876px)",
  });

  if (!isDesktop)
    return (
      <>
        <MobileStyledShips>
          <ShipGeneral ship={ship} next={next} />
          <ShipSkills ship={ship} next={next} />
          <ShipSkins ship={ship} />
        </MobileStyledShips>
      </>
    );

  return (
    <>
      <StyledShips transformValue={transformValue}>
        <ShipGeneral ship={ship} next={next} />
        <ShipSkills ship={ship} next={next} />
        <ShipSkins ship={ship} />
      </StyledShips>
    </>
  );
};
export default Ship;

export const getStaticPaths = async () => {
  const res = await fetch("https://cryptic-shore-85492.herokuapp.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query GetShips {
            ships {
                id
            }
        }
      `,
    }),
  });
  const ships = await res.json();
  const paths = ships.data.ships.map((ship) => ({
    params: { id: ship.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch("https://cryptic-shore-85492.herokuapp.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query getShipById($id: ID!) {
            shipById(id: $id) {
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
        `,
      variables: {
        id: params.id,
      },
    }),
  });
  const data = await res.json();
  const ship = data.data.shipById;

  return {
    props: { ship },
  };
};

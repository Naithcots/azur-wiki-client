import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { FaHeart } from "react-icons/fa";
import { AiOutlineReload } from "react-icons/ai";
import { GiClover, GiTorpedo } from "react-icons/gi";
import Container from "../styles/shared/Container";
import ShipPanel from "../styles/shared/ShipPanel";
import ScrollIndicator from "../styles/shared/ScrollIndicator";

const ShipGeneral = ({ ship, setPanelInput }) => {
  const [animationStart, setAnimationStart] = useState(false);
  const [skinLoaded, setSkinLoaded] = useState(false);
  const totalAnimationDuration = 500;

  console.log(ship);

  let stars = "";
  for (let i = 1; i <= ship.stars; i++) {
    stars += "★";
  }

  useEffect(() => {
    setSkinLoaded(false);
    setAnimationStart(true);

    const timeout = setTimeout(() => {
      setAnimationStart(false);
      setSkinLoaded(true);
    }, totalAnimationDuration);

    return () => clearTimeout(timeout);
  }, [ship]);

  return (
    <Container>
      <StyledShipGeneral animate={animationStart}>
        <Info>
          <Code animate={animationStart}>{ship.names.en}</Code>
          <Hull animate={animationStart}>{ship.hullType}</Hull>
        </Info>

        {/* Stats */}
        <StatsContainer>
          {/* <StatsTitle>Base</StatsTitle> */}
          <Stats>
            <Stat>
              <HeartIcon />
              <StatText>{ship.stats.baseStats.health}</StatText>
            </Stat>
            <Stat>
              <LuckIcon />
              <StatText>{ship.stats.baseStats.luck}</StatText>
            </Stat>
            <Stat>
              <ReloadIcon />
              <StatText>{ship.stats.baseStats.reload}</StatText>
            </Stat>
            <Stat>
              <TorpedoIcon />
              <StatText>{ship.stats.baseStats.torpedo}</StatText>
            </Stat>
          </Stats>
        </StatsContainer>
        {/* Stats */}

        {ship.obtainedFrom.obtainedFrom && (
          <ObtainedFrom>
            <ObtainedHeading>How to obtain?</ObtainedHeading>
            <ObtainedText>{ship.obtainedFrom.obtainedFrom}</ObtainedText>
          </ObtainedFrom>
        )}

        <TopRightInfo>
          <Nationality>{ship.nationality}</Nationality>
          <Stars>{stars}</Stars>
        </TopRightInfo>
        <Rarity>{ship.rarity}</Rarity>
      </StyledShipGeneral>

      <Skin
        src={ship.skins[0].image}
        alt="skin"
        loaded={skinLoaded}
        onLoad={() => setSkinLoaded(true)}
      />
      <ScrollIndicator text={"Skills"} onClick={() => setPanelInput("next")} />
    </Container>
  );
};
export default ShipGeneral;

const panelAnim = keyframes`
    from {
        transform: rotateX(90deg);
    }

    to {
        transform: rotateX(0);
    }
`;

const StyledShipGeneral = styled(ShipPanel)`
  ${({ animate }) =>
    animate &&
    css`
      animation: ${panelAnim} 650ms forwards;
    `}
`;

const Info = styled.div`
  width: fit-content;
`;

const codeAnim = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to{ 
        opacity: 1;
        transform: translateX(0);
    }
`;

const Code = styled.h1`
  margin: 0;

  font-size: 4rem;
  letter-spacing: 1px;

  ${({ animate }) =>
    animate &&
    css`
      animation: ${codeAnim} 350ms forwards;
    `}
`;

const hullAnim = keyframes`
    from {
        opacity: 0;
        transform: translateX(200px);
        
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const Hull = styled.h3`
  margin: 0em 0 0.25em 0em;

  opacity: 0.85;

  font-size: 1.5rem;

  ${({ animate }) =>
    animate &&
    css`
      animation: ${hullAnim} 350ms forwards;
    `}
`;

const StatsContainer = styled.div`
  margin: 1.25em 0;
`;

const Stats = styled.div`
  display: flex;
  gap: 1.5em;
`;

const StatsTitle = styled.h2``;

const Stat = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: 1fr 1fr;
`;

const StatText = styled.p`
  margin: 0.25em 0;
  font-size: 1.5rem;
  font-weight: 600;
`;

const HeartIcon = styled(FaHeart)`
  display: block;
  font-size: 2rem;
`;
const LuckIcon = styled(GiClover)`
  display: block;
  font-size: 2rem;
`;
const ReloadIcon = styled(AiOutlineReload)`
  display: block;
  font-size: 2rem;
`;
const TorpedoIcon = styled(GiTorpedo)`
  display: block;
  font-size: 2rem;
`;

const ObtainedFrom = styled.div`
  width: 40%;
  margin: 1em 0;
  line-height: normal;
`;

const ObtainedHeading = styled.h3`
  margin: 0 0 0.25em 0;
`;

const ObtainedText = styled.p`
  margin: 0;
`;

const TopRightInfo = styled.div`
  position: absolute;
  top: 0.25em;
  right: 1.25em;
`;

const Nationality = styled.p`
  margin: 0;

  font-size: 3rem;
  font-weight: 800;

  opacity: 0.1;
`;

const Stars = styled.p`
  margin: -0.25em 0;
  font-size: 2.25rem;

  text-align: right;
  opacity: 0.1;
`;

const Rarity = styled.p`
  margin: 0;

  position: absolute;
  bottom: 0.25em;
  left: 0.25em;

  font-size: 3.5rem;
  font-weight: 800;

  opacity: 0.1;
`;

const skinAnim = keyframes`
    from {
        visibility: visible;
        opacity: 0;
        transform: translateX(25px);
    }

    to {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
    }
`;

const Skin = styled.img`
  max-width: 50vw;
  max-height: 70vh;

  position: absolute;
  bottom: 1vh;
  right: 0;

  user-select: none;

  visibility: hidden;
  z-index: 10;

  filter: drop-shadow(2px 1px 0 #444) drop-shadow(-1px -1px 0 #444);

  ${({ loaded }) =>
    loaded &&
    css`
      animation: ${skinAnim} 500ms forwards;
    `}
`;

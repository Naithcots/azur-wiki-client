import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { BsChevronDoubleDown } from "react-icons/bs";

const ShipGeneral = ({ ship, setPanelInput }) => {
  const [animationStart, setAnimationStart] = useState(false);
  const [skinLoaded, setSkinLoaded] = useState(false);
  const totalAnimationDuration = 500;

  let stars = "";
  for (let i = 1; i <= ship.stars; i++) {
    stars += "★";
  }

  useEffect(() => {
    setSkinLoaded(false);
    setAnimationStart(true);

    const timeout = setTimeout(() => {
      setAnimationStart(false);
      //   setSkinLoaded(true);
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
      <ScrollIndicator onClick={() => setPanelInput("next")}>
        <ArrowDown />
        <IndicatorText>Skills</IndicatorText>
      </ScrollIndicator>
    </Container>
  );
};
export default ShipGeneral;

const containerAnim = keyframes`
    from {
        transform: rotateX(90deg);
    }

    to {
        transform: rotateX(0);
    }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  place-items: center;

  position: relative;
`;

const StyledShipGeneral = styled.div`
  width: 100%;
  min-height: 65vh;
  max-height: 80vh;

  padding: 1em 1.25em;

  position: relative;
  box-sizing: border-box;

  border-radius: 0.5em;

  color: #fff;
  background-color: #444;

  user-select: none;

  ${({ animate }) =>
    animate &&
    css`
      animation: ${containerAnim} 650ms forwards;
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
  margin: 0.15em 0 0 0.25em;

  opacity: 0.85;

  font-size: 1.25rem;

  ${({ animate }) =>
    animate &&
    css`
      animation: ${hullAnim} 350ms forwards;
    `}
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

const ScrollIndicatorAnim = keyframes`
  0% {
    transform: translateY(0);
  }
  40%, 60% {
    transform: translateY(2vh);
  }
  100% {
    transform: translateY(0);
  }

`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 6vh;
  left: 12vw;

  display: flex;
  align-items: center;
  gap: 0.75em;

  cursor: pointer;

  animation: ${ScrollIndicatorAnim} 8000ms infinite;
`;

const IndicatorText = styled.p`
  margin: 0;
  font-size: 2rem;
  letter-spacing: 2px;

  font-weight: 600;
`;

const ArrowDown = styled(BsChevronDoubleDown)`
  /* position: absolute; */
  font-size: 3rem;
`;

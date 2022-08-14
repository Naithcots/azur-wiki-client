import styled, { css, keyframes } from "styled-components";
import ShipPanel from "../../styles/shared/ShipPanel";
import { FaHeart } from "react-icons/fa";
import { AiOutlineReload } from "react-icons/ai";
import { GiClover, GiTorpedo } from "react-icons/gi";

export const panelAnim = keyframes`
    from {
        transform: rotateX(90deg);
    }

    to {
        transform: rotateX(0);
    }
`;

export const StyledShipGeneral = styled(ShipPanel)`
  ${({ animate }) =>
    animate &&
    css`
      animation: ${panelAnim} 650ms forwards;
    `}
`;

export const Info = styled.div`
  width: fit-content;
  position: relative;
  z-index: 10;
`;

export const codeAnim = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to{ 
        opacity: 1;
        transform: translateX(0);
    }
`;

export const Code = styled.h1`
  margin: 0;

  font-size: clamp(2rem, 6vw, 4rem);
  letter-spacing: 1px;

  ${({ animate }) =>
    animate &&
    css`
      animation: ${codeAnim} 350ms forwards;
    `}
`;

export const hullAnim = keyframes`
    from {
        opacity: 0;
        transform: translateX(200px);
        
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Hull = styled.h3`
  margin: 0em 0 0.25em 0em;
  font-weight: 400;

  opacity: 0.8;

  font-size: clamp(1.15rem, 3vw, 1.5rem);

  ${({ animate }) =>
    animate &&
    css`
      animation: ${hullAnim} 350ms forwards;
    `}
`;

export const StatsContainer = styled.div`
  margin: 1.25em 0;
  position: relative;
  z-index: 10;
`;

export const Stats = styled.div`
  display: flex;
  gap: 1.65em;

  @media (min-width: 876px) {
    gap: 1.5em;
  }
`;

export const StatsTitle = styled.h2``;

export const Stat = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: 1fr 1fr;
`;

export const StatText = styled.p`
  margin: 0.25em 0;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const HeartIcon = styled(FaHeart)`
  display: block;
  font-size: 2rem;
`;
export const LuckIcon = styled(GiClover)`
  display: block;
  font-size: 2rem;
`;
export const ReloadIcon = styled(AiOutlineReload)`
  display: block;
  font-size: 2rem;
`;
export const TorpedoIcon = styled(GiTorpedo)`
  display: block;
  font-size: 2rem;
`;

export const ObtainedFrom = styled.div`
  margin: 1em 0;
  line-height: normal;
  position: relative;
  z-index: 10;

  @media (min-width: 676px) {
    width: 40%;
  }
`;

export const ObtainedHeading = styled.h3`
  margin: 0 0 0.25em 0;
`;

export const ObtainedText = styled.p`
  margin: 0;
`;

export const TopRightInfo = styled.div`
  position: absolute;
  top: 0.25em;
  right: 1.25em;
`;

export const Nationality = styled.p`
  margin: 0;

  font-size: clamp(1.5rem, 5vw, 3rem);
  font-weight: 800;

  opacity: 0.1;
`;

export const Stars = styled.p`
  margin: -0.25em 0;
  font-size: 1.25rem;

  text-align: right;
  opacity: 0.1;
`;

export const Rarity = styled.p`
  margin: 0;

  position: absolute;
  bottom: 0.25em;
  left: 0.35em;

  font-size: clamp(1.5rem, 6vw, 3.5rem);
  font-weight: 800;

  opacity: 0.1;
`;

export const ImageAnim = keyframes`
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

export const ThumbnailAnim = keyframes`
    from {
        visibility: visible;
        opacity: 0;
        transform: translateX(5px);
    }

    to {
        visibility: visible;
        opacity: 0.2;
        transform: translateX(0);
    }
`;

export const Thumbnail = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;

  width: auto;
  max-height: 100%;
  opacity: 0;

  z-index: 5;

  ${({ loaded }) =>
    loaded &&
    css`
      animation: ${ThumbnailAnim} 500ms forwards;
    `}
`;

export const Skin = styled.img`
  max-width: 50vw;
  max-height: 70vh;

  position: absolute;
  bottom: 1vh;
  right: 0vw;

  opacity: 0;
  user-select: none;

  visibility: hidden;
  z-index: 10;

  filter: drop-shadow(2px 1px 0 #444) drop-shadow(-1px -1px 0 #444);

  ${({ loaded }) =>
    loaded &&
    css`
      animation: ${ImageAnim} 500ms forwards;
    `}
`;

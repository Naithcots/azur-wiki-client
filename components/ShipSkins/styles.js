import styled from "styled-components";

export const SkinsContainer = styled.div`
  /* margin: 0.5em 0; */

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
  justify-content: center;
  flex-wrap: wrap;
  gap: 1em;

  /* max-height: 65vh; */
  /* overflow-y: scroll; */

  @media (min-width: 676px) {
    max-height: 100%;
    overflow-y: hidden;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #333;
  }

  &::-webkit-scrollbar-track {
    background: #555;
  }
`;

export const Skin = styled.div`
  &:hover > img {
    transform: scale(1.05);
  }

  cursor: pointer;
`;

export const SkinImage = styled.img`
  max-width: 100%;
  max-height: 20vh;

  object-fit: contain;

  display: block;
  margin: 0 auto;

  transition: transform 250ms;
`;

export const SkinName = styled.p`
  text-align: center;
  font-weight: 600;
`;

export const SkinText = styled.span`
  font-size: clamp(6rem, 10vw, 10rem);
  opacity: 0.05;

  position: absolute;
  bottom: 0;
  right: 2.5vw;
`;

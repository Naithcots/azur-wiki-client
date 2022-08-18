import { useState } from "react";
import styled, { css, keyframes } from "styled-components";

const NationIcon = ({ data, nation, setNation, animationDuration }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <NationContainer show={!nation} duration={animationDuration} key={data.id}>
      <Image
        src={data.icon}
        width={150}
        height={120}
        loaded={imageLoaded}
        onLoad={() => setImageLoaded(true)}
        onClick={() => setNation(data.search)}
      />
      <Name>{data.name}</Name>
      <Prefix>{data.prefix}</Prefix>
    </NationContainer>
  );
};
export default NationIcon;

const openAnimationUpper = keyframes`
    from {
        transform: translateY(-100px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;

    }
`;

const openAnimationLower = keyframes`
    from {
        transform: translateY(100px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;

    }
`;

const closeAnimationUpper = keyframes`
    from {
        transform: translateY(0);
        opacity: 1;
    }
    to {
        transform: translateY(-100px);
        opacity: 0;

    }
`;

const closeAnimationLower = keyframes`
    from {
        transform: translateY(0);
        opacity: 1;
    }
    to {
        transform: translateY(100px);
        opacity: 0;

    }
`;

const closeAnimationLeft = keyframes`
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(-50px);
        opacity: 0;

    }
`;

const closeAnimationRight = keyframes`
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(50px);
        opacity: 0;

    }
`;

const openOpacityAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const closeOpacityAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const NationContainer = styled.div`
  flex: 1;

  position: relative;

  transition: transform 200ms;

  &:nth-child(odd) {
    ${({ show, duration }) =>
      !show &&
      css`
        animation: ${closeAnimationLeft} ${duration}ms;
      `}
  }

  &:nth-child(even) {
    ${({ show, duration }) =>
      !show &&
      css`
        animation: ${closeAnimationRight} ${duration}ms;
      `}
  }

  @media (min-width: 876px) {
    &:nth-child(-n + 5) {
      ${({ show, duration }) =>
        show
          ? css`
              animation: ${openAnimationUpper} ${duration}ms;
            `
          : css`
              animation: ${closeAnimationUpper} ${duration}ms;
            `}
    }

    &:nth-last-child(-n + 4) {
      ${({ show, duration }) =>
        show
          ? css`
              animation: ${openAnimationLower} ${duration}ms;
            `
          : css`
              animation: ${closeAnimationLower} ${duration}ms;
            `}
    }
  }

  @media (min-width: 576px) {
    &:nth-child(-n + 3) {
      ${({ show, duration }) =>
        show
          ? css`
              animation: ${openAnimationUpper} ${duration}ms;
            `
          : css`
              animation: ${closeAnimationUpper} ${duration}ms;
            `}
    }

    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(6) {
      ${({ show, duration }) =>
        show
          ? css`
              animation: ${openOpacityAnimation} ${duration}ms;
            `
          : css`
              animation: ${closeOpacityAnimation} ${duration}ms;
            `}
    }

    &:nth-last-child(-n + 3) {
      ${({ show, duration }) =>
        show
          ? css`
              animation: ${openAnimationLower} ${duration}ms;
            `
          : css`
              animation: ${closeAnimationLower} ${duration}ms;
            `}
    }
  }

  @media (min-width: 1210px) {
    &:nth-child(7),
    &:nth-child(8),
    &:nth-child(9) {
      grid-column: span 2;
    }

    &:nth-child(7) {
      justify-self: right;
    }

    &:nth-child(9) {
      justify-self: left;
    }

    &:nth-child(-n + 6) {
      ${({ show, duration }) =>
        show
          ? css`
              animation: ${openAnimationUpper} ${duration}ms;
            `
          : css`
              animation: ${closeAnimationUpper} ${duration}ms;
            `}
    }

    &:nth-last-child(-n + 3) {
      ${({ show, duration }) =>
        show
          ? css`
              animation: ${openAnimationLower} ${duration}ms;
            `
          : css`
              animation: ${closeAnimationLower} ${duration}ms;
            `}
    }
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const ImageAnim = keyframes`
    0%, 50% {
        transform: scale(0);
        opacity: .25;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
`;

const Image = styled.img`
  width: auto;
  height: 100px;

  display: block;
  margin: 0 auto;

  animation: ${ImageAnim} 1350ms forwards;

  cursor: pointer;

  @media (min-width: 576px) {
    height: 120px;
  }
`;

const Name = styled.p`
  text-align: center;
  /* font-size: 1.25rem; */
  font-size: clamp(1rem, 4vw, 1.25rem);
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 0.25em;
`;

const PrefixAnim = keyframes`
    0%, 35% {
        font-size: 3.25rem;
        transform: translateY(-200%);
    }

    100% {
        font-size: 1.25rem;
        transform: translateY(0);

    }
`;

const Prefix = styled.div`
  margin: 0;
  text-align: center;
  font-weight: 800;

  animation: ${PrefixAnim} 1500ms forwards;
`;

import styled, { keyframes } from "styled-components";
import { BsChevronDoubleDown } from "react-icons/bs";

const ScrollIndicator = ({ text, onClick }) => {
  return (
    <StyledScrollIndicator onClick={onClick}>
      <ArrowDown />
      <IndicatorText>{text}</IndicatorText>
    </StyledScrollIndicator>
  );
};
export default ScrollIndicator;

const ScrollIndicatorAnim = keyframes`
  0% {
    transform: translate(-50%, 0);
  }
  40%, 60% {
    transform: translate(-50%, 2vh);
  }
  100% {
    transform: translate(-50%, 0);
  }
`;

const StyledScrollIndicator = styled.div`
  position: absolute;
  bottom: 4.5vh;
  left: 50%;

  display: flex;
  align-items: center;
  gap: 0.75em;

  cursor: pointer;

  animation: ${ScrollIndicatorAnim} 8000ms infinite;

  @media (min-width: 676px) {
    bottom: 6vh;
    left: 12vw;
  }
`;

const IndicatorText = styled.p`
  margin: 0;
  font-size: 2rem;
  letter-spacing: 2px;

  font-weight: 600;
`;

const ArrowDown = styled(BsChevronDoubleDown)`
  font-size: 3rem;
`;

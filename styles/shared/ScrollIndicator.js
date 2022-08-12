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
    transform: translateY(0);
  }
  40%, 60% {
    transform: translateY(2vh);
  }
  100% {
    transform: translateY(0);
  }
`;

const StyledScrollIndicator = styled.div`
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
  font-size: 3rem;
`;

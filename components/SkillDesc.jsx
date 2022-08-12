import styled, { css } from "styled-components";
import { FaChevronDown } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const SkillDesc = ({ children }) => {
  const [expanded, setExpanded] = useState(true);
  const [textHeight, setTextHeight] = useState(null);
  const [showChevron, setShowChevron] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const height = ref && ref.current && ref.current.clientHeight;
    console.log(height);
    setTextHeight(height);
    setExpanded(false);
  }, [ref]);

  useEffect(() => {
    if (!expanded) {
      const height = ref && ref.current && ref.current.clientHeight;
      if (height === textHeight) setShowChevron(false);
      else setShowChevron(true);
    }
  }, [textHeight]);

  return (
    <StyledSkillDesc>
      <Text ref={ref} height={textHeight} expanded={expanded}>
        {children}
      </Text>
      <Chevron
        show={showChevron ? 1 : 0}
        expanded={expanded ? 1 : 0}
        onClick={() => (expanded ? setExpanded(false) : setExpanded(true))}
      />
    </StyledSkillDesc>
  );
};
export default SkillDesc;

const StyledSkillDesc = styled.div``;

const Text = styled.p`
  margin-top: 0.75em;
  position: relative;

  font-size: 0.85rem;
  text-align: justify;
  line-height: normal;

  z-index: 3;

  overflow: hidden;

  text-overflow: ellipsis;

  ${({ expanded, height }) =>
    expanded
      ? css`
          max-height: ${height + "px"};
        `
      : css`
          max-height: 38px;
        `}

  /* background: ${({ expanded }) =>
    expanded
      ? null
      : "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(31,31,31,0.3) 30%, rgba(255,255,255,0) 100%);"}; */

  transition: max-height 250ms;
`;

const Chevron = styled(FaChevronDown)`
  width: 100%;

  display: ${({ show }) => (show ? "block" : "none")};
  text-align: center;

  font-size: 1rem;

  transform: ${({ expanded }) => (expanded ? "rotateZ(180deg)" : "rotateZ(0)")};
  transition: transform 250ms;

  cursor: pointer;
`;

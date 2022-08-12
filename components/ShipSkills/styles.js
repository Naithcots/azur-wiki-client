import styled from "styled-components";

export const StyledShipPanel = styled.div`
  width: 100%;
  min-height: 65vh;
  max-height: 80vh;

  padding: 1em 2em;

  position: relative;
  box-sizing: border-box;

  border-radius: 0.5em;

  color: #fff;
  background-color: #444;

  user-select: none;
`;

export const Code = styled.h2`
  margin: 0.25em 0 1em;
  font-size: 2rem;
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ amount }) => `repeat(${amount}, 1fr)`};
  gap: 2em;
`;

export const Skill = styled.div`
  text-align: center;
`;

export const SkillIcon = styled.img`
  height: 80px;
`;

export const SkillName = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
`;

export const SkillDesc = styled.p`
  text-align: justify;
  line-height: normal;
`;

export const SkillText = styled.span`
  font-size: clamp(6rem, 10vw, 10rem);
  opacity: 0.05;

  position: absolute;
  bottom: 0;
  right: 2.5vw;
`;

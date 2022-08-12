import styled from "styled-components";
import Container from "../styles/shared/Container";
import ScrollIndicator from "../styles/shared/ScrollIndicator";

const ShipSkills = ({ ship, setPanelInput }) => {
  return (
    <Container>
      <StyledShipPanel>
        <Code>{ship.names.code}</Code>
        <SkillsContainer amount={ship.skills.length}>
          {ship.skills.map((skill) => (
            <Skill key={skill.names.en}>
              <SkillIcon src={skill.icon}></SkillIcon>
              <SkillName>{skill.names.en}</SkillName>
              <SkillDesc>{skill.description}</SkillDesc>
            </Skill>
          ))}
        </SkillsContainer>

        <SkillText>SKILLS</SkillText>
      </StyledShipPanel>
      <ScrollIndicator text={"Gallery"} onClick={() => setPanelInput("next")} />
    </Container>
  );
};
export default ShipSkills;

const StyledShipPanel = styled.div`
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

const Code = styled.h2`
  margin: 0.25em 0 1em;
  font-size: 2rem;
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ amount }) => `repeat(${amount}, 1fr)`};
  gap: 2em;
`;

const Skill = styled.div`
  text-align: center;
`;

const SkillIcon = styled.img`
  height: 80px;
`;

const SkillName = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
`;

const SkillDesc = styled.p`
  text-align: justify;
  line-height: normal;
`;

const SkillText = styled.span`
  font-size: 15rem;
  opacity: 0.05;

  position: absolute;
  bottom: 0;
  right: 2.5vw;
`;

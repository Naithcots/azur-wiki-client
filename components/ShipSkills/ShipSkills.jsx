import { useMediaQuery } from "react-responsive";
import Container from "../../styles/shared/Container";
import ScrollIndicator from "../../styles/shared/ScrollIndicator";
import {
  Code,
  Skill,
  SkillDesc,
  SkillIcon,
  SkillName,
  SkillsContainer,
  SkillText,
  StyledShipPanel,
} from "./styles";

const ShipSkills = ({ ship, next }) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 876px)",
  });

  return (
    <Container>
      <StyledShipPanel>
        {isDesktop && <Code>{ship.names.code}</Code>}
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
      {isDesktop && <ScrollIndicator text={"Gallery"} onClick={next} />}
    </Container>
  );
};
export default ShipSkills;

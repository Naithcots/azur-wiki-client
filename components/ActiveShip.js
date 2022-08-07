import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
// import SkillDesc from "./SkillDesc";

const ActiveShip = ({ ship }) => {
  const [animationStart, setAnimationStart] = useState(false);
  const [skinLoaded, setSkinLoaded] = useState(false);
  const totalAnimationDuration = 500;
  //   console.log(ship);
  let stars = "";
  for (let i = 1; i <= ship.stars; i++) {
    stars += "★";
  }

  console.log(animationStart);

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
    <>
      <StyledActiveShip animate={animationStart}>
        <Info>
          <Code
            animate={animationStart}
            // onAnimationEnd={() => setAnimationStart(false)}
          >
            {ship.names.en}
          </Code>
          <Hull animate={animationStart}>{ship.hullType}</Hull>
        </Info>
        {/* <SkillsContainer>
          {ship.skills.map((skill, idx) => (
            <Skill key={idx}>
              <SkillName>{skill.names.en}</SkillName>
              <SkillDesc>{skill.description}</SkillDesc>
              <SkillIcon src={skill.icon} />
            </Skill>
          ))}
        </SkillsContainer> */}
        <TopRightInfo>
          <Nationality>{ship.nationality}</Nationality>
          <Stars>{stars}</Stars>
        </TopRightInfo>
        <Rarity>{ship.rarity}</Rarity>
      </StyledActiveShip>
      <Skin
        src={ship.skins[0].image}
        alt="skin"
        loaded={skinLoaded}
        onLoad={() => setSkinLoaded(true)}
      />
    </>
  );
};
export default ActiveShip;

const containerAnim = keyframes`
    from {
        transform: rotateX(90deg);
        /* opacity: 0.5; */
    }

    to {
        transform: rotateX(0);
        /* opacity: 1; */
    }
`;

const StyledActiveShip = styled.div`
  width: 100%;
  min-height: 65vh;

  padding: 1em 1.25em;

  position: relative;
  box-sizing: border-box;

  border-radius: 0.5em;

  color: #fff;
  background-color: #444;

  user-select: none;

  /* animation: ${containerAnim} 500ms; */

  ${({ animate }) =>
    animate
      ? css`
          animation: ${containerAnim} 650ms forwards;
        `
      : null}
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
    animate
      ? css`
          animation: ${codeAnim} 350ms forwards;
        `
      : null}
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
    animate
      ? css`
          animation: ${hullAnim} 350ms forwards;
        `
      : null}
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
  bottom: 0;
  right: 7vw;

  user-select: none;

  /* opacity: 0;
  transform: translateX(100px); */

  visibility: hidden;
  z-index: 10;

  ${({ loaded }) =>
    loaded &&
    css`
      animation: ${skinAnim} 500ms forwards;
    `}
`;

// const SkillsContainer = styled.div``;

// const Skill = styled.div`
//   position: relative;
// `;

// const SkillName = styled.p`
//   margin-bottom: 0;

//   font-size: 1.15rem;
//   font-weight: 600;

//   z-index: 3;
// `;

// const SkillIcon = styled.img`
//   max-width: 80px;

//   position: absolute;
//   top: 0;
//   right: 0;

//   z-index: 1;

//   opacity: 0.15;
// `;

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Container from "../../styles/shared/Container";
import ScrollIndicator from "../../styles/shared/ScrollIndicator";
import {
  ObtainedText,
  Code,
  HeartIcon,
  Hull,
  Info,
  LuckIcon,
  ObtainedFrom,
  ObtainedHeading,
  ReloadIcon,
  Stat,
  Stats,
  StatsContainer,
  StatText,
  StyledShipGeneral,
  TorpedoIcon,
  TopRightInfo,
  Nationality,
  Stars,
  Rarity,
  Thumbnail,
  Skin,
} from "./styles";

const ShipGeneral = ({ ship, next }) => {
  const [animationStart, setAnimationStart] = useState(false);
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);
  const [skinLoaded, setSkinLoaded] = useState(false);
  const totalAnimationDuration = 500;

  const isDesktop = useMediaQuery({
    query: "(min-width: 876px)",
  });

  let stars = "";
  for (let i = 1; i <= ship.stars; i++) {
    stars += "★";
  }

  useEffect(() => {
    setAnimationStart(true);
    setSkinLoaded(false);
    setThumbnailLoaded(false);

    const timeout = setTimeout(() => {
      setAnimationStart(false);
      setSkinLoaded(true);
      setThumbnailLoaded(true);
    }, totalAnimationDuration);

    return () => clearTimeout(timeout);
  }, [ship]);

  if (!isDesktop)
    return (
      <Container>
        <StyledShipGeneral animate={animationStart}>
          <Info>
            <Code animate={animationStart}>{ship.names.en}</Code>
            <Hull animate={animationStart}>{ship.hullType}</Hull>
          </Info>

          <StatsContainer>
            {/* <StatsTitle>Base</StatsTitle> */}
            <Stats>
              <Stat>
                <HeartIcon />
                <StatText>{ship.stats.baseStats.health}</StatText>
              </Stat>
              <Stat>
                <LuckIcon />
                <StatText>{ship.stats.baseStats.luck}</StatText>
              </Stat>
              <Stat>
                <ReloadIcon />
                <StatText>{ship.stats.baseStats.reload}</StatText>
              </Stat>
              <Stat>
                <TorpedoIcon />
                <StatText>{ship.stats.baseStats.torpedo}</StatText>
              </Stat>
            </Stats>
          </StatsContainer>

          {ship.obtainedFrom.obtainedFrom && (
            <ObtainedFrom>
              <ObtainedHeading>How to obtain?</ObtainedHeading>
              <ObtainedText>{ship.obtainedFrom.obtainedFrom}</ObtainedText>
            </ObtainedFrom>
          )}
        </StyledShipGeneral>

        <Rarity>{ship.rarity}</Rarity>
        <Thumbnail
          src={ship.thumbnail}
          alt="thumbnail"
          width={256}
          height={256}
          loaded={thumbnailLoaded}
          onLoad={() => setThumbnailLoaded(true)}
        />
      </Container>
    );

  return (
    <Container>
      <StyledShipGeneral animate={animationStart}>
        <Info>
          <Code animate={animationStart}>{ship.names.en}</Code>
          <Hull animate={animationStart}>{ship.hullType}</Hull>
        </Info>

        <StatsContainer>
          {/* <StatsTitle>Base</StatsTitle> */}
          <Stats>
            <Stat>
              <HeartIcon />
              <StatText>{ship.stats.baseStats.health}</StatText>
            </Stat>
            <Stat>
              <LuckIcon />
              <StatText>{ship.stats.baseStats.luck}</StatText>
            </Stat>
            <Stat>
              <ReloadIcon />
              <StatText>{ship.stats.baseStats.reload}</StatText>
            </Stat>
            <Stat>
              <TorpedoIcon />
              <StatText>{ship.stats.baseStats.torpedo}</StatText>
            </Stat>
          </Stats>
        </StatsContainer>

        {ship.obtainedFrom.obtainedFrom && (
          <ObtainedFrom>
            <ObtainedHeading>How to obtain?</ObtainedHeading>
            <ObtainedText>{ship.obtainedFrom.obtainedFrom}</ObtainedText>
          </ObtainedFrom>
        )}

        <TopRightInfo>
          <Nationality>{ship.nationality}</Nationality>
          <Stars>{stars}</Stars>
        </TopRightInfo>
        <Rarity>{ship.rarity}</Rarity>
      </StyledShipGeneral>
      <Skin
        src={ship.skins[0].image}
        alt="skin"
        loaded={skinLoaded}
        onLoad={() => setSkinLoaded(true)}
      />
      <ScrollIndicator text={"Skills"} onClick={next} />
    </Container>
  );
};
export default ShipGeneral;

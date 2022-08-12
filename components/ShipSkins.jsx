import React, { useState } from "react";
import styled from "styled-components";
import Container from "../styles/shared/Container";
import ShipPanel from "../styles/shared/ShipPanel";
import SkinModal from "./SkinModal";

const ShipSkins = ({ ship }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const showModal = (imageSrc) => {
    setModalImage(imageSrc);
    setModalOpen(true);
  };

  return (
    <>
      <Container>
        <ShipPanel>
          <SkinsContainer>
            {ship.skins.map((skin) => (
              <Skin key={skin.name} onClick={() => showModal(skin.image)}>
                <SkinImage
                  src={skin.image}
                  alt={skin.name}
                  width={200}
                  height={200}
                />
                <SkinName>{skin.name}</SkinName>
              </Skin>
            ))}
          </SkinsContainer>
        </ShipPanel>
      </Container>
      {modalOpen && <SkinModal src={modalImage} setModalOpen={setModalOpen} />}
    </>
  );
};
export default ShipSkins;

const SkinsContainer = styled.div`
  margin: 0.5em 0;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* gap: 2em; */
`;

const Skin = styled.div`
  min-width: 250px;

  border-left: 1px solid #777;

  &:hover > img {
    transform: scale(1.05);
  }

  cursor: pointer;
`;

const SkinImage = styled.img`
  width: auto;
  max-height: 200px;

  display: block;
  margin: 0 auto;

  transition: transform 250ms;
`;

const SkinName = styled.p`
  text-align: center;
  font-weight: 600;
`;

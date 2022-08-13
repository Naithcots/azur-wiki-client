import React, { useState } from "react";
import Container from "../../styles/shared/Container";
import ShipPanel from "../../styles/shared/ShipPanel";
import SkinModal from "../SkinModal/SkinModal";
import { Skin, SkinImage, SkinName, SkinsContainer, SkinText } from "./styles";

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
          <SkinText>SKINS</SkinText>
        </ShipPanel>
      </Container>
      {modalOpen && (
        <SkinModal
          src={modalImage}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
};
export default ShipSkins;

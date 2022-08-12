import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";

const SkinModal = ({ src, setModalOpen }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(
        <StyledSkinModal onClick={() => setModalOpen(false)}>
          <ImageContainer>
            <Image src={src} layout="fill" objectFit="contain" />
          </ImageContainer>
          <CloseBtn onClick={() => setModalOpen(false)} />
        </StyledSkinModal>,
        document.getElementById("portal")
      )
    : null;
};
export default SkinModal;

const StyledSkinModal = styled.div`
  width: 100%;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;

  display: grid;
  place-items: center;

  z-index: 999;

  backdrop-filter: brightness(0.2) blur(0.1em);
`;

const ImageContainer = styled.div`
  width: 85vw;
  height: 75vh;

  text-align: center;

  position: relative;
`;

const CloseBtn = styled(GrClose)`
  position: absolute;
  top: 0.5em;
  right: 0.5em;

  font-size: 3.5rem;

  cursor: pointer;

  & > path {
    stroke: #fff;
  }
`;

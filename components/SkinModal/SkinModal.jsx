import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { CloseBtn, ImageContainer, StyledSkinModal } from "./styles";

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

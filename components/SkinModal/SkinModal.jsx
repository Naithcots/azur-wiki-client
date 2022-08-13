import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { CloseBtn, ImageContainer, StyledSkinModal } from "./styles";
import useBodyOverflow from "../../hooks/useBodyOverflow";

const SkinModal = ({ src, modalOpen, setModalOpen }) => {
  const [mounted, setMounted] = useState(false);
  const { setOverflow } = useBodyOverflow();

  const isDesktop = useMediaQuery({
    query: "(min-width: 876px)",
  });

  useEffect(() => {
    modalOpen && setOverflow("hidden");
  }, [modalOpen]);

  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
      !isDesktop && setOverflow("visible");
    };
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

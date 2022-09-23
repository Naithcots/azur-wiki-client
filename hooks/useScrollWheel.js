import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import useBodyOverflow from "./useBodyOverflow";

const useScrollWheel = () => {
  const [value, setValue] = useState(0);
  const { setOverflow } = useBodyOverflow();

  const handleWheel = (e) => {
    if (e.deltaY < 0) prev();
    else if (e.deltaY > 0) next();
  };

  const prev = () => {
    const viewPortHeight = window.innerHeight;
    if (value === 0) return;
    setValue((value -= viewPortHeight));
  };

  const next = () => {
    const viewPortHeight = window.innerHeight;
    const totalHeight = document.body.scrollHeight;
    if (value >= totalHeight - viewPortHeight) return;
    setValue((value += viewPortHeight));
  };

  const reset = () => {
    setValue(0);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    return () => removeEventListener("wheel", handleWheel);
  }, [value]);

  // Reset value and set body overflow when window is resized
  const isDesktop = useMediaQuery({
    query: "(min-width: 876px)",
  });

  useEffect(() => {
    if (isDesktop) {
      window.scrollTo(0, 0);
      reset();
      setOverflow("hidden");
    } else {
      window.scrollTo(0, 0);
      reset();
      setOverflow("visible");
    }
  }, [isDesktop]);

  return { transformValue: value, prev, next, reset };
};
export default useScrollWheel;

import { useEffect, useState } from "react";

const useScrollWheel = () => {
  const [transformValue, setTransformValue] = useState(0);
  const [panelInput, setPanelInput] = useState(null);

  const handleWheel = (e) => {
    const viewPortHeight = window.innerHeight;
    const totalHeight = document.body.scrollHeight;

    if (e.deltaY < 0) {
      if (transformValue === 0) return;
      setTransformValue((transformValue += viewPortHeight));
    } else if (e.deltaY > 0) {
      if (-transformValue >= totalHeight - viewPortHeight) return;
      setTransformValue((transformValue -= viewPortHeight));
    }
  };

  const handlePanel = (input) => {
    const viewPortHeight = window.innerHeight;
    const totalHeight = document.body.scrollHeight;

    if (input === "prev") {
      if (transformValue === 0) return;
      setTransformValue((transformValue += viewPortHeight));
    } else if (input === "next") {
      if (-transformValue >= totalHeight - viewPortHeight) return;
      setTransformValue((transformValue -= viewPortHeight));
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    return () => removeEventListener("wheel", handleWheel);
  }, [transformValue]);

  useEffect(() => {
    handlePanel(panelInput);
    setPanelInput(null);
  }, [panelInput]);

  return [transformValue, setPanelInput];
};
export default useScrollWheel;

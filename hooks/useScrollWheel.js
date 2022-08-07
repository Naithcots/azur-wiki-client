import { useEffect, useState } from "react";

const useScrollWheel = () => {
  const [transformValue, setTransformValue] = useState(0);

  const handleWheel = (e) => {
    const viewPortHeight = window.innerHeight;
    const totalHeight = document.body.scrollHeight;

    if (e.deltaY < 0) {
      //   console.log("Scroll up");
      if (transformValue === 0) return;
      setTransformValue((transformValue += viewPortHeight));
    } else if (e.deltaY > 0) {
      //   console.log("Scroll down");
      if (-transformValue >= totalHeight - viewPortHeight) return;
      setTransformValue((transformValue -= viewPortHeight));
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    return () => removeEventListener("wheel", handleWheel);
  }, []);

  return { transformValue };
};
export default useScrollWheel;

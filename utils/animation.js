import { easeOut } from "motion";


export const slideInVariants = (
  direction = "left",
  duration = 0.5,
  distance = 100,
  useCustom = true
) => {
  const x =
    direction === "left" ? -distance : direction === "right" ? distance : 0;
  const y =
    direction === "top" ? -distance : direction === "bottom" ? distance : 0;
  return {
    hidden: { x, y, opacity: 0 },
    visible: (i) => {
      const animation = {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          delay: useCustom ? i * 0.3 : 0,
          duration,
          ease: easeOut,
        },
      };
      if (useCustom) {
        animation.custom = i;
      }
      return animation;
    },
  };
};
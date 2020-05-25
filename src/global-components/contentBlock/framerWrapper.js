export const framerWrapper = {
  inView: (animation) => {
    let obj = {};
    if (animation.includes("opacity")) {
      obj = { ...obj, opacity: 1 };
    }

    if (animation.includes("left") || animation.includes("right")) {
      obj = { ...obj, x: 0, transition: { type: "spring", damping: 17.5 } };
    }

    if (animation.includes("bottom")) {
      obj = { ...obj, y: 0 };
    }
    return obj;
  },
  outOfView: (animation) => {
    let obj = {};
    if (animation.includes("opacity")) {
      obj = { ...obj, opacity: 0 };
    }

    if (animation.includes("left")) {
      obj = { ...obj, x: "-100%" };
    }

    if (animation.includes("right")) {
      obj = { ...obj, x: "100%" };
    }

    if (animation.includes("bottom")) {
      obj = { ...obj, y: 150 };
    }

    return obj;
  },
};

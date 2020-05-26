// Components==============
import { SubMenuContext } from "components-react-lib";
import { motion } from "framer-motion";
import React, { useContext } from "react";
import styled from "styled-components";
// =========================

const BarWrapper = styled(motion.div)`
  position: absolute;
  top: 27.5px;
  height: 3px;
`;

const Bar = styled(motion.div)`
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  background: ${({ theme: { primary } }) => primary[3]};
  height: 100%;
  width: 100%;
`;

export default function BarComp({ menu, arrayLength }) {
  const { selected } = useContext(SubMenuContext);

  const animateCondition = selected === menu;

  const wrapper = {
    show: {
      width: 75 * arrayLength,
      transition: { when: "afterChildren" },
    },

    hide: {
      width: 100,
    },
  };

  const bar = {
    show: {
      rotate: 90,
      transition: { type: "tween" },
    },

    hide: {
      rotate: 0,
    },
  };

  return (
    <BarWrapper
      animate={animateCondition && "show"}
      initial="hide"
      variants={wrapper}
    >
      <Bar style={{ originX: 0, originY: 0 }} variants={bar} />
    </BarWrapper>
  );
}

// Components==============
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
// =========================

const Svg = styled.svg`
  width: 35px;
`;

export default function ScrollIndicator() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 76"
      className="scrollIndicator"
    >
      <g>
        <g>
          <path
            d="M20,5A15.017,15.017,0,0,1,35,20V56A15,15,0,0,1,5,56V20A15.017,15.017,0,0,1,20,5m0-5h0A20,20,0,0,0,0,20V56A20,20,0,0,0,20,76h0A20,20,0,0,0,40,56V20A20,20,0,0,0,20,0Z"
            fill="#1489a3"
          />
          <motion.rect
            x="12.1053"
            y="15"
            width="15.7895"
            height="30"
            rx="7.8947"
            fill="#1489a3"
            animate={{ y: [0, 15, 0] }}
            transition={{
              loop: Infinity,
              duration: 1.7,
              repeatDelay: 0.4,
            }}
          />
        </g>
      </g>
    </Svg>
  );
}

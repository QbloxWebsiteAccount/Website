import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
  padding-top: ${({ theme: { spacing }, index, noPadding }) =>
    noPadding && index === 0
      ? spacing[10]
      : index === 0
      ? spacing[14]
      : spacing[8]};

  margin-bottom: ${({ theme: { spacing }, marginBottom, lastItem }) =>
    lastItem ? spacing[13] : spacing[marginBottom]};

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    margin-bottom: ${({ theme: { spacing }, marginBottom, lastItem }) =>
      lastItem ? spacing[15] : spacing[marginBottom + 2]};
  }

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopL}) {
    margin-bottom: ${({ theme: { spacing }, marginBottom, lastItem }) =>
      lastItem ? spacing[16] : spacing[marginBottom + 3]};
  }
`;

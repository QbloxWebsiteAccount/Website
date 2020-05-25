// Components==============
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import ContentBlockWrapper from "./ContentBlockWrapper";

// =========================

const Wrapper = styled(motion.div)`
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

export default function ContentBlock({ content, path }) {
  const arrLength = content.length;

  const contentBlock = content.map((e, index) => {
    const type = e.__typename;
    const mb = e.marginBottom || 4;
    const lastItem = index + 1 === arrLength;
    const animation = e.animation || [];

    const condition =
      mb === 1
        ? 5
        : mb === 2
        ? 7
        : mb === 3
        ? 10
        : mb === 4
        ? 12
        : mb === 5
        ? 15
        : mb === 6
        ? 16
        : 12;

    return (
      <ContentBlockWrapper
        key={index}
        condition={condition}
        lastItem={lastItem}
        type={type}
        path={path}
        e={e}
        index={index}
        Wrapper={Wrapper}
        animation={animation}
      />
    );
  });

  return contentBlock;
}

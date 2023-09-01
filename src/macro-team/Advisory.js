// Components==============
import { motion } from "framer-motion";
import Img from "gatsby-image";
import { useMeasure, useMediaQ } from "hooks-lib";
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div`
  margin-bottom: ${({ theme: { spacing } }) => spacing[14]};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${({ gridGap }) => `${gridGap}px`};

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.tablet}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Image = styled(Img)`
  width: 100%;
  height: ${({ height }) => ` ${height / 2}px`};

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.tablet}) {
    height: ${({ height }) => ` ${height / 3}px`};
  }

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    height: ${({ height }) => ` ${height / 4}px`};
  }

  img {
    object-position: center 10% !important;
  }
`;

const Name = styled.p`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  ${({ theme: { fontSize } }) => fontSize.xl}
  margin-top: ${({ theme: { spacing } }) => spacing[0]};
`;

const Function = styled.p`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
`;

const Position = styled.p`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
`;

const Flex = styled.div`
  display: flex;
  margin-top: ${({ theme: { spacing } }) => spacing[0]};

  div {
    margin: 0 ${({ theme: { spacing } }) => spacing[0]};
  }
`;

export default function Advisory({ content }) {
  const [ref, bounds] = useMeasure();

  const noMobile = useMediaQ("min", 450);

  const gridGap = noMobile ? 40 : 20;
  const height = bounds.width - gridGap;
  const items = content.map((e, index) => {
    const image = e.image?.asset?.fluid;

    return (
      <motion.div key={index} whileHover={{ scale: 1.05 }}>
        {image && (
          <Image
            fluid={image}
            alt={e.name}
            height={e.team ? height * 2 + 400 : height}
            team={e.team}
          />
        )}
        <Name>{e.name}</Name>
        <Function>{e.function}</Function>
        <Position>{e.postion}</Position>
        <Flex>
          <p>at {e.location}</p>
          <div>|</div>
          <p>{e.place}</p>
        </Flex>
      </motion.div>
    );
  });

  return (
    <Wrapper ref={ref} gridGap={gridGap}>
      {items}
    </Wrapper>
  );
}

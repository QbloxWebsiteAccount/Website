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

  #team {
    grid-column: 1 / 3;
    grid-row: 3 / span 2;
  }

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.tablet}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;

    #team {
      grid-row: 2 / span 2;
      grid-column: 3/ 5;
    }
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

const Job = styled.p`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
`;

function Employee({ e, height }) {
  const image = e?.image?.asset?.fluid;
  const name = e?.name;
  const team = e?.team;
  const job = e?.job;

  return (
    <motion.div id={team ? "team" : ""} whileHover={{ scale: 1.05 }}>
      {!name.includes("team") ? (
        <Image
          fluid={image}
          alt={name}
          height={team ? height * 2 + 400 : height}
          team={team}
        />
      ) : (
        <a
          href="https://qblox.jobs.personio.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            fluid={image}
            alt={name}
            height={team ? height * 2 + 400 : height}
            team={team}
          />
        </a>
      )}
      <Name>{name}</Name>
      <Job>{job}</Job>
    </motion.div>
  );
}

export default function Grid({ employees }) {
  const [ref, bounds] = useMeasure();

  const noMobile = useMediaQ("min", 450);

  const gridGap = noMobile ? 40 : 20;
  const height = bounds.width - gridGap;

  return (
    <Wrapper ref={ref} gridGap={gridGap}>
      {employees.map((e, index) => (
        <Employee e={e} index={index} height={height} key={index} />
      ))}
    </Wrapper>
  );
}

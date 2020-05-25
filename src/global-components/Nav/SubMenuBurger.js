// Components==============
import { SubMenuContext } from "components-react-lib";
import { motion } from "framer-motion";
import { Link } from "gatsby";
import Img from "gatsby-image";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { useAboutNavItems, useProductNavItems } from "./subNavItems.js";
// =========================

const Grid = styled(Link)`
  display: grid;
  grid-template-columns: ${({ noimage }) => (noimage ? "1fr" : `60px 1fr`)};
  grid-column-gap: ${({ theme: { spacing } }) => spacing[3]};
  align-items: center;
  height: 37.5px;
  margin-bottom: ${({ theme: { spacing } }) => spacing[6]};
  margin-top: ${({ theme: { spacing } }) => spacing[4]};
  padding-left: ${({ theme: { spacing } }) => spacing[2]};
`;

const Image = styled(Img)`
  width: 100%;
`;

const Svg = styled.img`
  transform: translateX(0.5em);
  height: 100%;
`;

export default function SubMenuBurger({ children, menu }) {
  const { selected, setSelected, toggle, setNumberOfItems } = useContext(
    SubMenuContext
  );

  const products = useProductNavItems();
  const about = useAboutNavItems();
  const subCondition =
    menu === "products" ? products : menu === "about" ? about : null;

  const arrayLength = subCondition.length;

  useEffect(() => {
    setNumberOfItems(arrayLength);
  }, [setNumberOfItems, arrayLength]);

  const items = subCondition.map((e, index) => {
    const name = e?.name;
    const slug = name?.toLowerCase().replace(/\s/g, "");
    const image = e.image?.asset.fluid || e?.image;
    const svg = e?.svg;
    const last = index === arrayLength - 1;

    const noImage = !svg && !image ? 1 : 0;

    return (
      <motion.div
        key={index}
        variants={framerItems}
        onClick={() => {
          toggle();
          setSelected(null);
        }}
      >
        <Grid to={`/${slug}`} last={last ? 1 : 0} noimage={noImage}>
          {image && <Image fluid={image} alt={name} />}
          {svg && <Svg src={svg} alt={name} />}
          <p> {name}</p>
        </Grid>
      </motion.div>
    );
  });

  return (
    <>
      <button
        onClick={(e) => {
          selected === e.target.innerHTML
            ? setSelected(null)
            : setSelected(e.target.innerHTML);
        }}
      >
        {children}
      </button>
      {selected === children && (
        <motion.div animate="mounted" initial="unMounted" variants={framerWrap}>
          {items}
        </motion.div>
      )}
    </>
  );
}

const framerWrap = {
  mounted: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
  unMounted: {},
};

const framerItems = {
  mounted: {
    opacity: 1,
  },
  unMounted: {
    opacity: 0,
  },
};

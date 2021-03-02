// Components==============
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React, { useContext } from 'react';
import styled from 'styled-components';
import BarComp from './Bar.js';
import { SubMenuContext } from './sideBurger/index.js';
import {
  useAboutNavItems,
  useNewsNavItems,
  useProductNavItems,
} from './subNavItems.js';
// =========================

const Grid = styled(Link)`
  display: grid;
  grid-template-columns: ${({ noimage }) => (noimage ? '1fr' : `60px 1fr`)};
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
  const { selected, setSelected, toggle } = useContext(SubMenuContext);

  const products = useProductNavItems();
  const about = useAboutNavItems();
  const news = useNewsNavItems();

  const subCondition =
    menu === 'products'
      ? products
      : menu === 'about'
      ? about
      : menu === 'news'
      ? news
      : null;

  const arrayLength = subCondition.length;

  const items = subCondition.map((e, index) => {
    const name = e?.name;
    const title = e?.title;
    const slug = name?.toLowerCase().replace(/\s/g, '');
    const image = e.image?.asset.fluid || e?.image;
    const svg = e?.svg;
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
        <Grid
          to={
            name === 'Advisory board'
              ? `/qbloxteam#advisoryBoard`
              : e?.link
              ? e?.link
              : `/${slug}`
          }
          onClick={
            e?.link
              ? (event) => {
                  event.preventDefault();
                  window.open(this.makeHref('https://qblox.jobs.personio.de/'));
                }
              : undefined
          }
          target="_blank"
          noimage={noImage}
        >
          {image && <Image fluid={image} alt={name} />}
          {svg && <Svg src={svg} alt={name} />}
          <p> {title ? title : name}</p>
        </Grid>
      </motion.div>
    );
  });

  return (
    <>
      <button
        onClick={(e) => {
          selected === menu ? setSelected(null) : setSelected(menu);
        }}
      >
        <BarComp menu={menu} arrayLength={arrayLength} />
        {children}
      </button>
      {selected === menu && (
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

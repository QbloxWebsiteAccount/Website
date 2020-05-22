// Components==============
import { SubMenuContext } from "components-react-lib";
import { motion } from "framer-motion";
import { Link } from "gatsby";
import Img from "gatsby-image";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { useProductNavItems } from "./subNavItems.js";
// =========================

const Flex = styled(Link)`
  display: flex;
  margin: ${({ theme: { spacing } }) =>
    `${spacing[4]} ${spacing[4]} ${spacing[6]}`};
  align-items: center;
  margin-bottom: ${({ last }) => last === 1 && 0};
`;

const Image = styled(Img)`
  width: 70px;
  margin-right: ${({ theme: { spacing } }) => spacing[5]};
`;

const Svg = styled.img`
  padding-right: ${({ theme: { spacing } }) => spacing[4]};
  transform: translateX(0.5em);
`;

export default function SubMenuBurger({ children, menu }) {
  const { selected, setSelected, toggle, setNumberOfItems } = useContext(
    SubMenuContext
  );

  const products = useProductNavItems();
  const subCondition = menu === "products" ? products : null;

  const arrayLength = subCondition.length;

  useEffect(() => {
    setNumberOfItems(arrayLength);
  }, [setNumberOfItems, arrayLength]);

  const items = subCondition.map((e, index) => {
    const name = e?.name;
    const slug = name?.toLowerCase();
    const image = e.image?.asset.fluid || e?.image;
    const svg = e?.svg;
    const last = index === arrayLength - 1;

    return (
      <motion.div
        key={index}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.3 }}
        onClick={() => {
          toggle();
          setSelected(null);
        }}
      >
        <Flex to={`/${slug}`} last={last ? 1 : 0}>
          {image && <Image fluid={image} alt={name} />}
          {svg && <Svg src={svg} alt={name} />}
          <p> {name}</p>
        </Flex>
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
      {selected === children && items}
    </>
  );
}

// Components==============
import { DropdownContext } from "components-react-lib";
import { motion } from "framer-motion";
import { Link } from "gatsby";
import Img from "gatsby-image";
import React, { useContext } from "react";
import styled from "styled-components";
import { Container } from "../../style/Mixins";
import { useProductNavItems } from "./subNavItems.js";
// =========================

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
  padding: ${({ theme: { spacing } }) => spacing[5]} 0;
`;

const Image = styled(Img)`
  width: 100px;
`;

const Svg = styled.img`
  width: 50px;
  margin-bottom: ${({ theme: { spacing } }) => spacing[1]};
`;

const Flex = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function SubMenu({ menu }) {
  const { toggle } = useContext(DropdownContext);

  const products = useProductNavItems();

  const subCondition = menu === "products" ? products : null;

  const items = subCondition.map((e, index) => {
    const name = e?.name;
    const slug = name?.toLowerCase();
    const image = e.image?.asset.fluid || e?.image;
    const svg = e?.svg;

    return (
      <motion.div key={index} whileHover={{ scale: 1.05 }} onClick={toggle}>
        <Flex to={`/${slug}`}>
          {image && <Image fluid={image} alt={name} />}
          {svg && <Svg src={svg} alt={name} />}
          <p> {name}</p>
        </Flex>
      </motion.div>
    );
  });

  return (
    <>
      <Container>
        <Wrapper> {items} </Wrapper>
      </Container>
    </>
  );
}

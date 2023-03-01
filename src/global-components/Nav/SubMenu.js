// Components==============
import { motion } from "framer-motion";
import { Link } from "gatsby";
import Img from "gatsby-image";
import React, { useContext } from "react";
import styled from "styled-components";
import { Container } from "../../style/Mixins";
import { DropdownContext } from "./dropdown";
import {
  useAboutNavItems,
  useApplicationNavItems,
  useNewsNavItems,
  useProductNavItems,
} from "./subNavItems.js";
// =========================

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ arrLength }) =>
    arrLength === 3 ? "700px" : arrLength > 3 ? "900px" : "400px"};
  margin: 0 auto;
  padding: ${({ theme: { spacing } }) => spacing[5]} 0;
`;

const RawImage = styled.img`
  width: 100px;
  margin-bottom: ${({ theme: { spacing } }) => spacing[1]};
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
  const about = useAboutNavItems();
  const news = useNewsNavItems();
  const applications = useApplicationNavItems();

  const subCondition =
    menu === "products"
      ? products
      : menu === "about"
      ? about
      : menu === "news"
      ? news
      : menu === "applications"
      ? applications
      : null;

  const arrLength = subCondition.length;

  const items = subCondition.map((e, index) => {
    const name = e?.name;
    const title = e?.title;
    const slug = name?.toLowerCase().replace(/\s/g, "");
    const image = e.image?.asset?.fluid || e?.image;
    const rawImage = e?.rawImage;
    const svg = e?.svg;

    return (
      <motion.div key={index} whileHover={{ scale: 1.05 }} onClick={toggle}>
        <Flex
          to={
            name === "Advisory board"
              ? `/qbloxteam#advisoryBoard`
              : e?.link
              ? e?.link
              : `/${slug}`
          }
          onClick={
            e?.link
              ? (event) => {
                  event.preventDefault();
                  window.open(this.makeHref("https://qblox.jobs.personio.de/"));
                }
              : undefined
          }
          target="_blank"
        >
          {image && <Image fluid={image} alt={name} />}
          {svg && <Svg src={svg} alt={name} />}
          {rawImage && <RawImage src={rawImage} alt={name} />}
          <p> {title ? title : name}</p>
        </Flex>
      </motion.div>
    );
  });

  return (
    <>
      <Container>
        <Wrapper arrLength={arrLength}> {items} </Wrapper>
      </Container>
    </>
  );
}

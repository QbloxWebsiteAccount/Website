// Components==============
import { DropdownContext } from "components-react-lib";
import { motion } from "framer-motion";
import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React, { useContext } from "react";
import styled from "styled-components";
import { Container } from "../../style/Mixins";
// =========================

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
  padding: ${({ theme: { spacing } }) => spacing[5]} 0;
`;

const Flex = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled(Img)`
  width: 150px;
`;

export default function SubMenu() {
  const data = useStaticQuery(graphql`
    query menuQuery {
      allSanitySeries {
        nodes {
          name
          image {
            asset {
              fluid(maxWidth: 200) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `);

  const { toggle } = useContext(DropdownContext);

  const items = data.allSanitySeries.nodes.map((e, index) => {
    const name = e.name;
    const slug = e.name.toLowerCase();
    const image = e.image.asset.fluid;

    return (
      <motion.div key={index} whileHover={{ scale: 1.05 }} onClick={toggle}>
        <Flex to={`/${slug}`}>
          <Image fluid={image} alt={name} key={index} />
          <p> {name}</p>
        </Flex>
      </motion.div>
    );
  });

  return (
    <>
      <Container>
        <Wrapper>{items}</Wrapper>
      </Container>
    </>
  );
}

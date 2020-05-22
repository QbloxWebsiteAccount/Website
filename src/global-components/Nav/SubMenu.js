// Components==============
import { DropdownContext } from "components-react-lib";
import { motion } from "framer-motion";
import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useContext } from "react";
import styled from "styled-components";
import ImageSvg from "../../micro-components/ImageSvg";
import { Container } from "../../style/Mixins";
// =========================

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
  padding: ${({ theme: { spacing } }) => spacing[5]} 0;

  .img-svg {
    width: 100px;
  }
  .svgMainSub {
    width: 50px;
    margin-bottom: ${({ theme: { spacing } }) => spacing[1]};
  }
`;

const Flex = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function SubMenu() {
  const data = useStaticQuery(graphql`
    query menuQuery {
      allSanityNavItems {
        nodes {
          name
          image {
            asset {
              url
              fluid(maxWidth: 200) {
                ...GatsbySanityImageFluid
              }
            }
          }
          product {
            name
            image {
              asset {
                url
                fluid(maxWidth: 200) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  const { toggle } = useContext(DropdownContext);

  const items = data.allSanityNavItems.nodes.map((e, index) => {
    const name = e?.name || e?.product.name;
    const slug = name?.toLowerCase();
    const image = e.image?.asset.fluid || e?.product.image.asset.fluid;
    const svg = e.image?.asset.url || e?.product.image.asset.url;

    return (
      <motion.div key={index} whileHover={{ scale: 1.05 }} onClick={toggle}>
        <Flex to={`/${slug}`}>
          {image && (
            <ImageSvg
              svg={svg}
              image={image}
              alt={name}
              className="img-svg"
              svgClassName="svgMainSub"
            />
          )}

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

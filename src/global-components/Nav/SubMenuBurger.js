// Components==============
import { SubMenuContext } from "components-react-lib";
import { motion } from "framer-motion";
import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useContext } from "react";
import styled from "styled-components";
import ImageSvg from "../../micro-components/ImageSvg";
// =========================

const Flex = styled(Link)`
  display: flex;
  margin: ${({ theme: { spacing } }) =>
    `${spacing[4]} ${spacing[4]} ${spacing[6]}`};
  align-items: center;
  margin-bottom: ${({ last }) => last === 1 && 0};

  .img-svgBurger {
    width: 70px;
    margin-right: ${({ theme: { spacing } }) => spacing[5]};
  }
  .svgBurgerSub {
    padding-right: ${({ theme: { spacing } }) => spacing[4]};
    transform: translateX(0.5em);
  }
`;

export default function SubMenuBurger({ children }) {
  const { selected, setSelected, toggle } = useContext(SubMenuContext);

  const data = useStaticQuery(graphql`
    query subMenuQuery {
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

  const arrayLength = data.allSanityNavItems.nodes.length;

  const items = data.allSanityNavItems.nodes.map((e, index) => {
    const name = e?.name || e?.product.name;
    const slug = name?.toLowerCase();
    const image = e.image?.asset.fluid || e?.product.image.asset.fluid;
    const svg = e.image?.asset.url || e?.product.image.asset.url;
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
          {image && (
            <ImageSvg
              svg={svg}
              image={image}
              alt={name}
              className="img-svgBurger"
              svgClassName="svgBurgerSub"
            />
          )}
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

// Components==============
import { SubMenuContext } from "components-react-lib";
import { motion } from "framer-motion";
import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React, { useContext } from "react";
import styled from "styled-components";
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

export default function SubMenuBurger({ children }) {
  const { selected, setSelected, toggle } = useContext(SubMenuContext);

  const data = useStaticQuery(graphql`
    query subMenuQuery {
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

  const arrayLength = data.allSanitySeries.nodes.length;

  const items = data.allSanitySeries.nodes.map((e, index) => {
    const name = e.name;
    const image = e.image.asset.fluid;
    const slug = e.name.toLowerCase();
    const last = index === arrayLength - 1;

    return (
      <motion.div
        key={index}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.3 }}
        onClick={toggle}
      >
        <Flex to={`/${slug}`} last={last ? 1 : 0}>
          <Image fluid={image} alt={name} key={index} />
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

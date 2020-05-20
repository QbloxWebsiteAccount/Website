// Components==============
import { graphql } from "gatsby";
import React from "react";
import Default from "./Default";
import FullWidth from "./FullWidth";
import OffScreen from "./OffScreen";
// =========================

export default function HeaderBlock({ content }) {
  const type = content.type && content.type;
  const title = content.title && content.title;
  const image = content.image && content.image.asset.fluid;
  console.log(type);

  return (
    <>
      {type === "fullWidth" ? (
        <FullWidth title={title} image={image} />
      ) : type === "offScreen" ? (
        <OffScreen title={title} image={image} />
      ) : (
        <Default title={title} image={image} />
      )}
    </>
  );
}

export const query = graphql`
  fragment header on SanityHeaderBlock {
    title
    type
    image {
      asset {
        fluid(maxWidth: 1600) {
          ...GatsbySanityImageFluid
        }
      }
    }
  }
`;

// Components==============
import { graphql } from "gatsby";
import React from "react";
import FullWidth from "./FullWidth";
import OffScreen from "./OffScreen";
// =========================

export default function HeaderBlock({ content }) {
  console.log(content);
  return (
    <>
      {content.type === "fullWidth" ? (
        <FullWidth title={content.title} image={content.image.asset.fluid} />
      ) : content.type === "offScreen" ? (
        <OffScreen title={content.title} image={content.image.asset.fluid} />
      ) : (
        <OffScreen title={content.title} image={content.image.asset.fluid} />
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

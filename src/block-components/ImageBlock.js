// Components==============
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div``;

export default function ImageBlock({ content }) {
  return <Wrapper></Wrapper>;
}

export const query = graphql`
  fragment image on SanityImageBlock {
    display
    image {
      asset {
        fluid(maxWidth: 1600) {
          ...GatsbySanityImageFluid
        }
      }
    }
  }
`;

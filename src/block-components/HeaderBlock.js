// Components==============
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div``;

export default function HeaderBlock({ content }) {
  return <Wrapper></Wrapper>;
}

export const query = graphql`
  fragment header on SanityHeaderBlock {
    title
    image {
      asset {
        fluid(maxWidth: 1600) {
          ...GatsbySanityImageFluid
        }
      }
    }
  }
`;

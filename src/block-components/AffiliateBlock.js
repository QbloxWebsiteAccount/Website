// Components==============
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
// =========================
const Wrapper = styled.div``;

export default function AffiliateBlock({ content }) {
  return <Wrapper></Wrapper>;
}

export const query = graphql`
  fragment affiliate on SanityAffiliateBlock {
    companies {
      logo {
        asset {
          fluid(maxWidth: 1600) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

// Components==============
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div``;

export default function ProductBlock({ content }) {
  return <Wrapper></Wrapper>;
}

export const query = graphql`
  fragment product on SanityProductBlock {
    product {
      title
      image1 {
        asset {
          fluid {
            src
          }
        }
      }
      image2 {
        asset {
          fluid {
            src
          }
        }
      }
    }
  }
`;

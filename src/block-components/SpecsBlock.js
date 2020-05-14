// Components==============
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div``;

export default function SpecsBlock({ content }) {
  return <Wrapper></Wrapper>;
}

export const query = graphql`
  fragment specs on SanitySpecsBlock {
    product {
      specs {
        spec {
          name
        }
        value
      }
    }
  }
`;

// Components==============
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div``;

export default function FooterBlock({ content }) {
  return <Wrapper></Wrapper>;
}

export const query = graphql`
  fragment footer on SanityFooterBlock {
    message
    link {
      slug
      text
    }
  }
`;

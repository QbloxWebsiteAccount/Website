// Components==============
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div``;

export default function AdresBlock({ content }) {
  return <Wrapper></Wrapper>;
}

export const query = graphql`
  fragment adres on SanityAdresBlock {
    title
    adresInfo {
      _rawAdresInfo
    }
  }
`;

// Components==============
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div``;

export default function ContactBlock({ content }) {
  return <Wrapper></Wrapper>;
}

export const query = graphql`
  fragment contact on SanityContactBlock {
    name {
      supportType
      mail
      text
    }
  }
`;

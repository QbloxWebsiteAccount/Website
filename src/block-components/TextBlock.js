// Components==============
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div``;

export default function TextBlock({ content }) {
  return <Wrapper></Wrapper>;
}

export const query = graphql`
  fragment text on SanityTextBlock {
    text
  }
`;

// Components==============
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Container } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  max-width: 850px;
  margin: 0 auto;
  ${({ theme: { fontSize } }) => fontSize.h3}
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.wouter};
  text-align: center;
  color: ${({ theme: { primary } }) => primary[3]};
`;

export default function TextBlock({ content }) {
  return (
    <Container>
      <Wrapper>{content.text}</Wrapper>
    </Container>
  );
}

export const query = graphql`
  fragment text on SanityTextBlock {
    marginBottom
    text
  }
`;

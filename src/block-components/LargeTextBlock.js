// Components==============
import React from "react";
import Block from "../micro-components/Block";
import { BlockStyling, Container } from "../style/Mixins";
// =========================

export default function LargeTextBlock({ content }) {
  return (
    <Container>
      <BlockStyling>
        <Block content={content._rawText} />
      </BlockStyling>
    </Container>
  );
}

export const query = graphql`
  fragment largeText on SanityLargeTextBlock {
    marginBottom
    animation
    _rawText
  }
`;

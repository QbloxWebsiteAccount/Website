// Components==============
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import Block from "../micro-components/Block";
import { BlockStyling, Container } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  display: grid;
  grid-column-gap: ${({ theme: { spacing } }) => spacing[9]};

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Text = styled(BlockStyling)`
  p {
    ${({ theme: { fontSize } }) => fontSize.s}
  }

  strong {
    ${({ theme: { fontSize } }) => fontSize.xl}
  }
`;

const Text2 = styled(Text)`
  p {
    text-align: left;
  }
`;

export default function TwoColumnTextBlock({ content }) {
  return (
    <Container>
      <Wrapper>
        <Text>
          <Block content={content._rawColumn1} />
        </Text>
        <Text2>
          <Block content={content._rawColumn2} />
        </Text2>
      </Wrapper>
    </Container>
  );
}

export const query = graphql`
  fragment twoColumnText on SanityTwoColumnTextBlock {
    marginBottom
    animation
    _rawColumn1
    _rawColumn2
  }
`;

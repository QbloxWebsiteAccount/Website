// Components==============
import { UnderlineButton } from "components-react-lib";
import { graphql, Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Container } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .Btn {
    ${({ theme: { fontSize } }) => fontSize.h4}
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.heavy};
    color: ${({ theme: { gray } }) => gray[12]};
  }
`;

const Message = styled.p`
  ${({ theme: { fontSize } }) => fontSize.h3}
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.wouter};
  color: ${({ theme: { primary } }) => primary[3]};
  margin-bottom: ${({ theme: { spacing } }) => spacing[2]};
  
`;

export default function FooterBlock({ content }) {
  return (
    <Container>
      <Wrapper>
        <Message>{content.message}</Message>
        <Link to={`/${content.link.slug}`}>
          <UnderlineButton className="Btn">{content.link.text}</UnderlineButton>
        </Link>
      </Wrapper>
    </Container>
  );
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

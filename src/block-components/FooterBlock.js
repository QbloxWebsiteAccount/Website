// Components==============
import { graphql, Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { UnderlineButton } from "../micro-components/UnderlineButton";
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
  const message = content.message && content.message;
  const slug = content.link && content.link.slug;
  const text = content.link && content.link.text;

  return (
    <Container>
      <Wrapper>
        <Message>{message}</Message>
        <Link to={slug}>
          <UnderlineButton className="Btn">{text}</UnderlineButton>
        </Link>
      </Wrapper>
    </Container>
  );
}

export const query = graphql`
  fragment footer on SanityFooterBlock {
    marginBottom
    animation
    message
    link {
      slug
      text
    }
  }
`;

// Components==============
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import { Container } from "../../style/Mixins";
// =========================

const Wrapper = styled.div`
  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    height: calc(400px + 4vw);
  }
  padding-top: ${({ theme: { spacing } }) => spacing[10]};
`;

const Image = styled(Img)`
  width: 100%;
  height: 100%;
  img {
    object-fit: contain !important;
  }

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    max-width: initial;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    display: Grid;
    grid-template-columns: 1fr 0.7fr;
    grid-column-gap: ${({ theme: { spacing } }) => spacing[10]};
  }
`;

const Title = styled.h2`
  color: ${({ theme: { primary } }) => primary[3]};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.wouter};
  ${({ theme: { fontSize } }) => fontSize.h0}
  max-width: 1000px;

  margin-bottom: ${({ theme: { spacing } }) => spacing[4]};

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    text-align: right;
    margin-bottom: 0;
  }
`;

export default function Default({ title, image }) {
  return (
    <Wrapper>
      <Container style={{ height: "100%" }}>
        <Content>
          <Title>{title}</Title>
          {image && <Image fluid={image} alt="alt" />}
        </Content>
      </Container>
    </Wrapper>
  );
}

// Components==============
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import { Container } from "../../style/Mixins";
// =========================

const Wrapper = styled.div`
  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
    position: relative;
    width: 100vw;
    height: ${({ theme: { spacing } }) => `calc( 100vh - ${spacing[16]})`};
  }
`;

const Image = styled(Img)`
  width: 100%;
  max-width: 800px;
  left: 30vw;

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
    width: 125%;
    max-width: 1000px;
    left: 20vw;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
    display: flex;
    align-items: center;
  }
`;

const Title = styled.h2`
  color: ${({ theme: { primary } }) => primary[3]};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.wouter};
  ${({ theme: { fontSize } }) => fontSize.h0}
  max-width: 1000px;

  margin-bottom: ${({ theme: { spacing } }) => spacing[4]};

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
    text-align: right;
  }

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
    margin-bottom: 0;
  }
`;

export default function offScreen({ title, image }) {
  return (
    <Wrapper>
      <Container style={{ height: "100%" }}>
        <Content>
          <Title>{title}</Title>
          <Image fluid={image} alt="alt" />
        </Content>
      </Container>
    </Wrapper>
  );
}

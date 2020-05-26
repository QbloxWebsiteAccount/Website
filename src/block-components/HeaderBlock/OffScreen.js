// Components==============
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import { Container } from "../../style/Mixins";
// =========================

const Wrapper = styled.div`
  margin-top: ${({ theme: { spacing } }) => spacing[10]};
  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    position: relative;
    width: 100vw;
    height: ${({ theme: { spacing } }) => `calc( 100vh - ${spacing[13]})`};
    margin-top: 0;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 400px;
  margin: 0 auto;

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    max-width: initial;
    margin: 0;
  }
`;

const Image = styled(Img)`
  height: 100%;
  img {
    object-fit: contain !important;
  }

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    width: 150%;
    height: 150%;
    right: -5vw;
    bottom: 10vh;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    display: grid;
    grid-template-columns: 1.3fr 1fr;
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
      breakPoint.desktopS}) {
    text-align: right;
    margin-right: ${({ theme: { spacing } }) => spacing[4]};
    margin-bottom: 0;
  }
`;

export default function OffScreen({ title, image }) {
  return (
    <Wrapper>
      <Container style={{ height: "100%" }}>
        <Content>
          <Title>{title}</Title>
          <ImageWrapper>
            {image && <Image fluid={image} alt="alt" />}
          </ImageWrapper>
        </Content>
      </Container>
    </Wrapper>
  );
}

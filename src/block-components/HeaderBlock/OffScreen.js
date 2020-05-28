// Components==============
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import { Container } from "../../style/Mixins";
// =========================

const Wrapper = styled.div`
  padding-top: ${({ theme: { spacing } }) => spacing[10]};
  padding-bottom: ${({ theme: { spacing } }) => spacing[10]};

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    padding: 0;
    position: relative;
    height: calc(400px + 4vw);
  }
`;

const Overflow = styled.div`
  @media screen and (min-width: 2000px) {
    overflow: hidden;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
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
  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    width: 200%;
    height: calc(400px + 4vw);

    top: ${({ theme: { spacing } }) => spacing[10]};

    img {
      object-fit: contain !important;
    }
  }
`;

export default function OffScreen({ title, image }) {
  return (
    <Wrapper>
      <Container>
        <Overflow>
          <Content>
            <Title>{title}</Title>
            <ImageWrapper>
              {image && <Image fluid={image} alt="alt" />}
            </ImageWrapper>
          </Content>
        </Overflow>
      </Container>
    </Wrapper>
  );
}

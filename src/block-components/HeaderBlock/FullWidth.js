// Components==============
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import { Container } from "../../style/Mixins";
// =========================

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: ${({ theme: { spacing } }) => `calc( 100vh - ${spacing[10]})`};
`;

const Image = styled(Img)`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.h2`
  color: ${({ theme: { gray } }) => gray[0]};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.wouter};
  ${({ theme: { fontSize } }) => fontSize.h0}
  max-width: 750px;
  margin: auto 0;

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    text-align: right;
    transform: translateX(-5vw);
  }
`;

export default function FullWidth({ title, image }) {
  return (
    <Wrapper>
      {image && <Image fluid={image} alt="alt" />}
      <Content>
        <Container>
          <Title>{title}</Title>
        </Container>
      </Content>
    </Wrapper>
  );
}

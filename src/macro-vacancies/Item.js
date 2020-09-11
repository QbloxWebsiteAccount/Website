// Components==============
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import { UnderlineButton } from "../micro-components/UnderlineButton";
import { Container } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  padding-bottom: ${({ theme: { spacing } }) => spacing[10]};
`;

const Item = styled.div`
  display: grid;
  margin-bottom: ${({ theme: { spacing } }) => spacing[10]};
  align-items: center;

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.tablet}) {
    grid-template-columns: 0.5fr 1fr;
    grid-column-gap: ${({ theme: { spacing } }) => spacing[8]};
  }

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    grid-template-columns: 0.4fr 1fr;
    grid-column-gap: ${({ theme: { spacing } }) => spacing[8]};
  }
`;

const InnerGrid = styled.div`
  display: grid;
`;

const Image = styled(Img)`
  margin-bottom: ${({ theme: { spacing } }) => spacing[5]};

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.tablet}) {
    margin-bottom: 0;
    height: 150px;
  }

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    height: 180px;
  }
`;

const Title = styled.p`
  ${({ theme: { fontSize } }) => fontSize.xl}
font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
margin-bottom: ${({ theme: { spacing } }) => spacing[0]};
`;

const Subtitle = styled.p`
  ${({ theme: { fontSize } }) => fontSize.xl}
font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
margin-bottom: ${({ theme: { spacing } }) => spacing[1]};
`;

const Text = styled.p`
  max-width: 80%;
`;

const Flex = styled.div`
  display: flex;
  align-content: center;
  margin-top: ${({ theme: { spacing } }) => spacing[3]};
  height: 30px;
  align-items: center;

  button {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  }

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.tablet}) {
    align-self: end;
  }
`;

const Date = styled.p`
  ${({ theme: { fontSize } }) => fontSize.s}
`;

export default function ItemComp({ content }) {
  const vacancies = content.map((e, index) => {
    const title = e?.title;
    const subtitle = e?.subtitle;
    const text = e?.text;
    const image = e?.image?.asset.fluid;
    const date = e?.date;
    const document = e?.document?.asset.url;

    return (
      <Item key={index}>
        {image && <Image fluid={image} alt={title} />}
        <InnerGrid>
          <div>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <Text>{text}</Text>
          </div>
          <Flex>
            <a href={`${document}?dl=`} target="_blank" rel="noreferrer">
              <UnderlineButton>View vacancy</UnderlineButton>
            </a>
            <div style={{ margin: `0 0.5em` }}>|</div>
            <Date>{date}</Date>
          </Flex>
        </InnerGrid>
      </Item>
    );
  });

  return (
    <Container>
      <Wrapper>{vacancies}</Wrapper>
    </Container>
  );
}

// Components==============
import Img from "gatsby-image";
import { useMediaQ } from "hooks-lib";
import React from "react";
import styled from "styled-components";
import { Container } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  padding-top: ${({ theme: { spacing } }) => spacing[13]};

  h2 {
    margin-bottom: ${({ theme: { spacing } }) => spacing[5]};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.wouter};
    color: ${({ theme: { primary } }) => primary[3]};

    @media screen and (min-width: ${({ theme: { breakPoint } }) =>
        breakPoint.tablet}) {
      margin-bottom: ${({ theme: { spacing } }) => spacing[1]};
    }
  }
`;

const Download = styled.div`
  margin-bottom: ${({ theme: { spacing } }) => spacing[4]};
  background: ${({ theme: { gray }, isEven }) => (!isEven ? gray[1] : gray[3])};
  padding: 2px 4px;
  margin: 2px 0;
`;

const Image = styled(Img)`
  width: ${({ aspectRatio }) => (aspectRatio >= 1 ? "70vw" : "50vw")};
  max-width: ${({ aspectRatio }) => (aspectRatio >= 1 ? "200px" : "150px")};
  margin-bottom: ${({ theme: { spacing } }) => spacing[4]};

  img {
    object-fit: contain !important;
  }
`;

const Grid = styled.div`
  display: grid;
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: ${({ theme: { spacing } }) => spacing[10]};

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.tablet}) {
    grid-template-columns: 1fr 2fr;
    height: 300px;
    margin-bottom: ${({ theme: { spacing }, lastItem }) =>
      !lastItem ? spacing[11] : 0};
  }
`;

export default function Item({ content }) {
  const breakpoint = useMediaQ("min", 768);

  const items = content.map((e, index) => {
    const name = e?.name;
    const image = e?.image?.asset?.fluid;
    const aspectRatio = image?.aspectRatio;
    const lastItem = content.length === index + 1;

    const downloads = e.downloads.map((e, index) => {
      const name = e.fileName;
      const document = e?.document?.asset?.url;
      const isEven = index % 2 === 0;

      return (
        <Download key={index} isEven={isEven}>
          <a href={`${document}?dl=`} target="_blank" rel="noreferrer">
            {name}
          </a>
        </Download>
      );
    });

    return (
      <Grid key={index} lastItem={lastItem}>
        {breakpoint ? (
          <>
            {image && (
              <Image fluid={image} alt={name} aspectRatio={aspectRatio} />
            )}
            <div>
              <h2>{name} downloads</h2>
              {downloads}
            </div>
          </>
        ) : (
          <>
            <h2>{name} downloads</h2>
            <Image fluid={image} alt={name} aspectRatio={aspectRatio} />
            {downloads}
          </>
        )}
      </Grid>
    );
  });

  return (
    <Container>
      <Wrapper>{items}</Wrapper>
    </Container>
  );
}

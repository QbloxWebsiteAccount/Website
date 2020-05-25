// Components==============
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import ContentBlock from "../global-components/contentBlock/ContentBlock";
import Head from "../global-components/Layout/Head";
import Advisory from "../macro-team/Advisory";
import Grid from "../macro-team/Grid";
import { Container } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  padding-bottom: ${({ theme: { spacing } }) => spacing[6]};
`;

export default function QbloxTeam({ data, path }) {
  const keywords = data.sanityPages.SEO ? data.sanityPages.SEO.keywords : "";
  const description = data.sanityPages.SEO
    ? data.sanityPages.SEO.description
    : "";

  const employees = data.allSanityEmployees.nodes;
  const advisoryBoard = data.allSanityAdvisoryBoard.nodes;

  return (
    <>
      <Head
        title={data.sanityPages.page}
        description={description}
        keywords={keywords}
      />
      <Wrapper>
        <ContentBlock
          content={data.sanityPages.content}
          path={path}
          block={0}
        />
        <ContentBlock
          content={data.sanityPages.content}
          path={path}
          block={1}
        />
        <Container>
          <Grid employees={employees} />
        </Container>

        <ContentBlock
          content={data.sanityPages.content}
          path={path}
          block={2}
        />
        <Container>
          <Advisory content={advisoryBoard} />
        </Container>

        <ContentBlock
          content={data.sanityPages.content}
          path={path}
          block={3}
        />
        <ContentBlock
          content={data.sanityPages.content}
          path={path}
          block={4}
        />
      </Wrapper>
    </>
  );
}

export const query = graphql`
  query TeamQuery {
    sanityPages(page: { eq: "Qblox team" }) {
      ...content
      SEO {
        keywords
        description
      }
      page
    }
    allSanityEmployees {
      nodes {
        name
        job
        image {
          asset {
            url
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
        team
      }
    }
    allSanityAdvisoryBoard {
      nodes {
        name
        image {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
        function
        position
        location
        place
      }
    }
  }
`;

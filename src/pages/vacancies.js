// Components==============
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import ContentBlock from "../global-components/contentBlock/ContentBlock";
import Head from "../global-components/Layout/Head";
import Item from "../macro-vacancies/Item";
// =========================

const Wrapper = styled.div`
  padding-bottom: ${({ theme: { spacing } }) => spacing[6]};
`;

export default function Vacancies({ data, path }) {
  const keywords = data.sanityPages.SEO ? data.sanityPages.SEO.keywords : "";
  const description = data.sanityPages.SEO
    ? data.sanityPages.SEO.description
    : "";

  const vacancies = data.allSanityVacancies.nodes;

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
        <Item content={vacancies.filter((e) => !e.internship && e)} />
        {vacancies.map(
          (e) =>
            e.internship && (
              <>
                <ContentBlock
                  content={data.sanityPages.content}
                  path={path}
                  block={2}
                />
                <Item content={vacancies.filter((e) => e.internship && e)} />
              </>
            )
        )}
        <ContentBlock
          content={data.sanityPages.content}
          path={path}
          block={3}
        />
      </Wrapper>
    </>
  );
}

export const query = graphql`
  query VacanciesQuery {
    sanityPages(page: { eq: "Vacancies" }) {
      ...content
      SEO {
        keywords
        description
      }
      page
    }
    allSanityVacancies {
      nodes {
        title
        image {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
        subtitle
        date(formatString: "DD MMMM YYYY")
        document {
          asset {
            url
          }
        }
        internship
      }
    }
  }
`;

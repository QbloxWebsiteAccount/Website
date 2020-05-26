// Components==============
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import ContentBlock from "../global-components/contentBlock/ContentBlock";
import Head from "../global-components/Layout/Head";
import Items from "../macro-affiliations/Items";
// =========================

const Wrapper = styled.div`
  padding-bottom: ${({ theme: { spacing } }) => spacing[6]};
`;

export default function Affiliations({ data, path }) {
  const keywords = data.sanityPages.SEO ? data.sanityPages.SEO.keywords : "";
  const description = data.sanityPages.SEO
    ? data.sanityPages.SEO.description
    : "";

  const content = data.allSanityAffiliates.nodes;

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
        <Items content={content} />
        <ContentBlock
          content={data.sanityPages.content}
          path={path}
          block={2}
        />
      </Wrapper>
    </>
  );
}

export const query = graphql`
  query AffiliationsQuery {
    sanityPages(page: { eq: "Affiliations" }) {
      ...content
      SEO {
        keywords
        description
      }
      page
    }
    allSanityAffiliates {
      nodes {
        name
        logo {
          asset {
            url
          }
        }
        subtitle
        _rawText
        website
        location
      }
    }
  }
`;

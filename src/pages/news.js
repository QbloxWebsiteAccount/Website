// Components==============
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import ContentBlock from "../global-components/contentBlock/ContentBlock";
import Head from "../global-components/Layout/Head";
import ItemComp from "../macro-news/Item";
// =========================

const Wrapper = styled.div`
  padding-bottom: ${({ theme: { spacing } }) => spacing[6]};
`;

export default function News({ data, path }) {
  const keywords = data.sanityPages.SEO ? data.sanityPages.SEO.keywords : "";
  const description = data.sanityPages.SEO
    ? data.sanityPages.SEO.description
    : "";

  const news = data.allSanityNews.nodes;

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
        <ItemComp content={news} />
      </Wrapper>
    </>
  );
}

export const query = graphql`
  query NewsQuery {
    sanityPages(page: { eq: "News" }) {
      ...content
      SEO {
        keywords
        description
      }
      page
    }
    allSanityNews(
      filter: { type: { eq: "news" } }
      sort: { order: DESC, fields: date }
    ) {
      nodes {
        title
        subtitle
        text
        image {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
        date(formatString: "DD MMMM YYYY")
        link
      }
    }
  }
`;

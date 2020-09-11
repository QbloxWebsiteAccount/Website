// Components==============
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import ContentBlock from "../global-components/contentBlock/ContentBlock";
import Head from "../global-components/Layout/Head";
import Items from "../macro-downloads/Items";
// =========================

const Wrapper = styled.div`
  padding-bottom: ${({ theme: { spacing } }) => spacing[6]};
`;

export default function Downloads({ data, path }) {
  const keywords = data.sanityPages.SEO ? data.sanityPages.SEO.keywords : "";
  const description = data.sanityPages.SEO
    ? data.sanityPages.SEO.description
    : "";

  const content = data.allSanityProducts.nodes;

  return (
    <>
      <Head
        title={data.sanityPages.page}
        description={description}
        keywords={keywords}
      />
      <Wrapper>
        <Items content={content} />
        <ContentBlock
          content={data.sanityPages.content}
          path={path}
          block={1}
        />
      </Wrapper>
    </>
  );
}

export const query = graphql`
  query DownloadsQuery {
    sanityPages(page: { eq: "Downloads" }) {
      ...content
      SEO {
        keywords
        description
      }
      page
    }
    allSanityProducts(sort: {order: ASC, fields: name}) {
      nodes {
        downloads {
          fileName
          document {
            asset {
              url
            }
          }
        }
        name
        image {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

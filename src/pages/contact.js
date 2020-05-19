// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import ContentBlock from "../micro-components/ContentBlock";
// =========================

export default function Contact({ data, path }) {
  return (
    <>
      <Head
        title="Home"
        description="Page description goes here"
        keywords="content"
      />
      <ContentBlock content={data.sanityPages.content} path={path} />
    </>
  );
}

export const query = graphql`
  query ContactQuery($path: String!) {
    sanityPages(path: { eq: $path }) {
      ...content
      page
    }
  }
`;

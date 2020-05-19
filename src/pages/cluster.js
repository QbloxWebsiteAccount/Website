// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
// =========================

export default function Cluster({ data, path }) {
  return (
    <>
      <Head
        title="Home"
        description="Page description goes here"
        keywords="content"
      />
      {/* <ContentBlock content={data.sanityPages.content} path={path} /> */}
    </>
  );
}

export const query = graphql`
  query ClusterQuery($path: String!) {
    sanityPages(path: { eq: $path }) {
      ...content
      page
    }
  }
`;

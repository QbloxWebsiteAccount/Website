import { graphql } from "gatsby";

export const query = graphql`
  fragment content on SanityPages {
    content {
      ... on SanityAdresBlock {
        ...adres
      }
      ... on SanityAffiliateBlock {
        ...affiliate
      }
      ... on SanityContactBlock {
        ...contact
      }
      ... on SanityFooterBlock {
        ...footer
      }
      ... on SanityHeaderBlock {
        ...header
      }
      ... on SanityImageBlock {
        ...image
      }
      ... on SanityProductBlock {
        ...product
      }
      ... on SanitySpecsBlock {
        ...specs
      }
      ... on SanityTextBlock {
        ...text
      }
      ... on SanityVideoBlock {
        ...video
      }
    }
  }
`;

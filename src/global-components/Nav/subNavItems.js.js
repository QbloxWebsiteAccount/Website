import download from "assets/downloads-icon.svg";
import { graphql, useStaticQuery } from "gatsby";

export const useProductNavItems = () => {
  const data = useStaticQuery(graphql`
    query menuQuery {
      allSanitySeries {
        nodes {
          name
          image {
            asset {
              url
              fluid(maxWidth: 130) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `);

  const items = data.allSanitySeries.nodes.concat({
    name: "Downloads",
    svg: download,
  });

  return items;
};

export const useAboutNavItems = () => {
  const items = [
    {
      name: "Qblox Team",
    },
    {
      name: "Advisory board",
    },
    {
      name: "Vacancies",
    },
    {
      name: "Affiliations",
    },
  ];

  return items;
};

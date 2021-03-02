import download from "assets/downloads-icon.svg";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { ToggleContext } from "../Layout/Layout";

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
  const { advisoryBoard } = React.useContext(ToggleContext);

  const items = advisoryBoard
    ? [
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
      ]
    : [
        {
          name: "Qblox Team",
        },

        {
          name: "Vacancies",
          link: 'https://qblox.jobs.personio.de/'
        },
        {
          name: "Affiliations",
        },
      ];

  return items;
};

export const useNewsNavItems = () => {
  const items = [
    {
      title: "Press",
      name: "News",
    },
    {
      name: "Scientific articles",
    },
  ];

  return items;
};

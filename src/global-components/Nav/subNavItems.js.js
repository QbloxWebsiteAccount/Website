import download from "assets/downloads-icon.svg";
import center from "assets/QB_NV-CENTERS_ICON.png";
import spin from "assets/QB_SPIN-QUBITS_ICON.png";
import superconducting from "assets/QB_SUPERCONDUCTING_ICON.png";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { ToggleContext } from "../Layout/Layout";

export const useProductNavItems = () => {
  const data = useStaticQuery(graphql`
    query menuQuery {
      allSanitySeries(sort: { fields: order }) {
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
          link: "https://qblox.jobs.personio.de/",
        },
        {
          name: "Affiliations",
        },
      ];

  return items;
};

export const useApplicationNavItems = () => {
  const items = [
    {
      name: "Superconducting",
      rawImage: superconducting,
    },
    {
      name: "Spin Qubits",
      rawImage: spin,
    },
    {
      name: "NV-Centers",
      rawImage: center,
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

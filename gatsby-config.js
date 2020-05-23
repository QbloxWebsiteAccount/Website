require("dotenv").config();
const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Qblox`,
    description: `We build control hardware for quantum computers. Quantum computers will revolutionize the way we compute by embedding the laws of quantum mechanics in their fundamental building blocks (qubits). To get from the current proof-of-principle prototype quantum computers to earth-shattering computation power, many scientific and engineering challenges have to be solved. Our company has the mission to build the control hardware stacks that can manage the upcoming generations of quantum processors. `,
    author: `Roland Branten`,
    siteUrl: `https://qblox.com/`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "ostxzp7d",
        dataset: "production",
        token: process.env.SANITY_TOKEN,
        graphqlTag: "default",
        watchMode: true,
        overlayDrafts: true,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        assets: path.join(__dirname, "src/assets"),
        hooks: path.join(__dirname, "src/hooks"),
        mixins: path.join(__dirname, "src/style/Mixins"),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Qblox`,
        short_name: `Qblox`,
        start_url: `/`,
        background_color: `#00819D`,
        theme_color: `#00819D`,
        display: `standalone`,
        icon: `icon/icon.png`,
      },
    },
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
  ],
};

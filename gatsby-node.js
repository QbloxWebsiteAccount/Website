exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const query = await graphql(`
    {
      allSanityPages {
        nodes {
          page
        }
      }
    }
  `);

  if (query.errors) {
    throw query.errors;
  }

  const pages = query.data.allSanityPages.nodes || [];

  pages.forEach((edge) => {
    const page = edge.page;
    const slug = page.toLowerCase().replace(/\s/g, "");
    const path = page === "Home" ? "/" : `/${slug}`;

    if (slug !== "qbloxteam") {
      createPage({
        path,
        component: require.resolve("./src/templates/pageTemplate.js"),
        context: { page, sanityPath: path },
      });
    }
  });
};

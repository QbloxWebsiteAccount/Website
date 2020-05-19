exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  deletePage(page);

  return createPage({
    ...page,

    context: {
      ...page.context,
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const query = await graphql(`
    {
      allSanityPages {
        nodes {
          page
          path
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
    const path = edge.path;

    createPage({
      path,
      component: require.resolve("./src/templates/pageTemplate.js"),
      context: { page, sanityPath: path },
    });
  });
};

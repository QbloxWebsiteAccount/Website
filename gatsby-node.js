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

  const pages = await graphql(`
    {
      allSanityPages {
        nodes {
          page
          path
        }
      }
    }
  `);

  if (pages.errors) {
    throw pages.errors;
  }

  const pages = pages.data.allSanityPages.nodes || [];

  components.forEach((edge) => {
    const page = edge.page;
    const path = edge.path;

    createPage({
      path,
      component: require.resolve("./src/templates/SingletonComponents.js"),
      context: { page, path },
    });
  });
};

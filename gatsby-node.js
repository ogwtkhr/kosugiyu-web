/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMicrocmsPersons(sort: { fields: [createdAt], order: DESC }) {
        nodes {
          id
          title
          body
          slug
        }
      }
    }
  `);

  result.data.allMicrocmsPersons.nodes.map((edge) => {
    const personPageInfo = edge;
    const { slug } = personPageInfo;
    console.log('Create page.', `/persons/${slug}`);
    createPage({
      path: `/persons/${slug}`,
      component: path.resolve('./src/templates/persons.tsx'),
      context: {
        slug,
      },
    });
  });
};

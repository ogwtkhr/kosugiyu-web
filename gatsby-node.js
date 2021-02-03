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
          isComingSoon
        }
      }
      allMicrocmsArchive(sort: { fields: [createdAt], order: DESC }) {
        nodes {
          id
          title
          body
          slug
        }
      }
    }
  `);

  result.data.allMicrocmsPersons.nodes.forEach((edge) => {
    const personPageInfo = edge;
    const { slug, isComingSoon } = personPageInfo;
    if (isComingSoon) {
      console.log('Create page.', `/persons/${slug}`);
      createPage({
        path: `/persons/${slug}`,
        component: path.resolve('./src/templates/persons.tsx'),
        context: {
          slug,
        },
      });
    } else {
      console.log('Skip page by isComingSoon flag.', `/archive/${slug}`);
    }
  });

  result.data.allMicrocmsArchive.nodes.forEach((edge) => {
    const archivePageInfo = edge;
    const { slug } = archivePageInfo;
    console.log('Create page.', `/archive/${slug}`);
    createPage({
      path: `/archive/${slug}`,
      component: path.resolve('./src/templates/archive.tsx'),
      context: {
        slug,
      },
    });
  });
};

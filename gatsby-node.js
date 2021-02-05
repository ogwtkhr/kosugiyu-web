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
      allMicrocmsMedia(sort: { fields: [createdAt], order: DESC }) {
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

  result.data.allMicrocmsMedia.nodes.forEach((edge) => {
    const mediaPageInfo = edge;
    const { slug, isComingSoon } = mediaPageInfo;
    if (!isComingSoon) {
      console.log('Create page.', `/media/${slug}`);
      createPage({
        path: `/media/${slug}`,
        component: path.resolve('./src/templates/media.tsx'),
        context: {
          slug,
        },
      });
    } else {
      console.log('Skip page by isComingSoon flag.', `/media/${slug}`);
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

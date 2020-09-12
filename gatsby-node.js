/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
/*
// const path = require('path');

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;
//   const result = await graphql(`
//     query {
//       allWorksYaml {
//         edges {
//           node {
//             slug
//           }
//         }
//       }
//     }
//   `);

//   result.data.allWorksYaml.edges.map(edge => {
//     const work = edge.node;
//     const { slug } = work;
//     console.log('Create page.', `/works/${slug}`);
//     createPage({
//       path: `/works/${slug}`,
//       component: path.resolve('./src/templates/work.tsx'),
//       context: {
//         slug,
//       },
//     });
//   });
// };
// */

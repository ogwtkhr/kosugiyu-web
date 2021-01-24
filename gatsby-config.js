/* eslint-disable @typescript-eslint/camelcase */

// https://www.tomawari.com/2019/09/gatsby-env-undefined/#gatsby-configjs
const env = process.env.NODE_ENV || 'development';
require('dotenv').config({ path: `./.env.${env}` });

module.exports = {
  siteMetadata: {
    title: '小杉湯',
    description: '杉並区・高円寺にある銭湯「小杉湯」。',
    author: 'ogwtkhr',
    googleApiKey: process.env.GOOGLE_API_KEY,
    siteUrl: 'https://kosugiyu.co.jp',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/develop'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'setting',
        path: `${__dirname}/src/yaml/setting.yaml`,
      },
    },
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: 'graphql-types.d.ts',
        codegenConfig: { maybeValue: 'T | undefined' },
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@': './src',
        },
        extensions: ['js', 'jsx', 'ts', 'tsx', 'css'],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-100837084-2',
      },
    },
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.MICRO_CMS_KEY,
        serviceId: 'kosugiyu',
        apis: [
          {
            endpoint: 'persons',
          },
          {
            endpoint: 'archive',
          },
        ],
      },
    },
    // {
    //   resolve: 'gatsby-plugin-eslint',
    //   options: {
    //     test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
    //     exclude: /(node_modules|.cache|public)/,
    //     stages: ['develop'],
    //     options: {
    //       // emitWarning: true,
    //       // failOnError: true,
    //     },
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};

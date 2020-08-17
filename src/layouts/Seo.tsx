/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import { ComponentsSeoQuery } from '@/types';

type MetaItem = JSX.IntrinsicElements['meta'];

type Props = {
  title?: string;
  description?: string;
  lang?: string;
  meta?: MetaItem[];
};

export const SEO: React.FC<Props> = ({ title, description, lang = 'en', meta = [] }) => {
  const { site } = useStaticQuery<ComponentsSeoQuery>(
    graphql`
      query ComponentsSeo {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const metaDescription = description || site?.siteMetadata?.description || '';
  const author = site?.siteMetadata?.author || '';
  const defaultTitle = site?.siteMetadata?.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${defaultTitle}`}
      defaultTitle={defaultTitle || ''}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        ...meta,
      ]}
      link={[
        {
          href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP:200,500&display=swap',
          rel: 'stylesheet',
          type: 'text/css',
        },
      ]}
      // script={[
      //   {
      //     type: 'text/javascript',
      //     src: `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}`,
      //   },
      // ]}
    />
  );
};

export default SEO;

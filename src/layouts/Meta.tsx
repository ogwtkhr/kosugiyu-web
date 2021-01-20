import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import { SiteMetaDataQuery } from '@/types';

type MetaItem = JSX.IntrinsicElements['meta'];

type Props = {
  title?: string;
  description?: string;
  lang?: string;
  ogImage?: string;
  meta?: MetaItem[];
};

export const Meta: React.FC<Props> = ({
  title: propsTitle,
  description,
  ogImage,
  lang = 'en',
  meta = [],
}) => {
  const data = useStaticQuery<SiteMetaDataQuery>(graphql`
    query SiteMetaData {
      settingYaml {
        meta {
          title
          twitter
          description
          ogImage
        }
      }
    }
  `);

  const baseMeta = data.settingYaml?.meta;

  const metaDescription = description || baseMeta?.description || '';
  const twitterAccount = `@${baseMeta?.twitter || ''}`;
  const image = ogImage || baseMeta?.ogImage || '';
  const defaultTitle = baseMeta?.title;
  const title = propsTitle || defaultTitle || '';

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${defaultTitle}`}
      defaultTitle={defaultTitle}
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
          property: 'og:image',
          content: image,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:creator',
          content: twitterAccount,
        },
        {
          name: 'twitter:site',
          content: twitterAccount,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        ...meta,
      ]}
      link={[
        {
          href:
            'https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,500|Roboto+Condensed&display=swap',
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

export default Meta;

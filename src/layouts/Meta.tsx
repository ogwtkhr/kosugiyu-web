import React from 'react';
import Helmet from 'react-helmet';
import { useBaseMetaInfo } from '@/hooks';

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
  const {
    title: defaultTitle,
    description: defaultDescription,
    twitter,
    ogImage: baseOgImage,
  } = useBaseMetaInfo();

  const metaDescription = description || defaultDescription;
  const twitterAccount = `@${twitter}`;
  const image = ogImage || baseOgImage;
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
    />
  );
};

export default Meta;

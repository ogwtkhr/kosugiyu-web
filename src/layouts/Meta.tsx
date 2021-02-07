import React from 'react';
import Helmet from 'react-helmet';
import { useLocation } from '@reach/router';
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
  title,
  description: propsDescription,
  ogImage: propsOgImage,
  lang = 'ja',
  meta = [],
}) => {
  const {
    title: baseTitle,
    url: baseUrl,
    description: baseDescription,
    twitter,
    ogImage: baseOgImage,
  } = useBaseMetaInfo();
  const { pathname } = useLocation();

  const metaDescription = propsDescription || baseDescription;
  const twitterAccount = `@${twitter}`;
  const image = propsOgImage || baseOgImage;
  const ogImage = image.match(/^http/) ? `${image}?width=1200` : baseUrl + image;
  const ogTitle = title || baseTitle;
  const url = baseUrl + pathname;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${baseTitle}`}
      defaultTitle={baseTitle}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: ogTitle,
        },
        {
          property: 'og:url',
          content: url,
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
          content: ogImage,
        },
        {
          name: 'twitter:title',
          content: ogTitle,
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
          name: 'twitter:image',
          content: ogImage,
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
          href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,500&display=swap',
          rel: 'stylesheet',
          type: 'text/css',
        },
      ]}
    />
  );
};

export default Meta;

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
  description: propsDescription,
  ogImage,
  lang = 'ja',
  meta = [],
}) => {
  const {
    title: baseTitle,
    url,
    description: baseDescription,
    twitter,
    ogImage: baseOgImage,
  } = useBaseMetaInfo();

  const title = propsTitle || baseTitle;
  const metaDescription = propsDescription || baseDescription;
  const twitterAccount = `@${twitter}`;
  const image = ogImage || baseOgImage;
  // twitterは絶対パスが必要
  const twitterImage = image.match(/^http/) ? image : url + image;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${baseTitle}`}
      defaultTitle={title}
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
          name: 'twitter:title',
          content: title,
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
          content: twitterImage,
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

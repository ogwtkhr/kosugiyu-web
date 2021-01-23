import { graphql, useStaticQuery } from 'gatsby';
import { SiteMetaDataQuery } from '@/types';

type MetaInfo = {
  title: string;
  description: string;
  url: string;
  twitter: string;
  facebook: string;
  ogImage: string;
};

export const useBaseMetaInfo = (): MetaInfo => {
  const data = useStaticQuery<SiteMetaDataQuery>(graphql`
    query SiteMetaData {
      settingYaml {
        meta {
          title
          description
          url
          twitter
          facebook
          ogImage
        }
      }
    }
  `);

  const baseMeta = data.settingYaml?.meta;

  const title = baseMeta?.title || '';
  const description = baseMeta?.description || '';
  const url = baseMeta?.url || '';
  const twitter = baseMeta?.twitter || '';
  const facebook = baseMeta?.facebook || '';
  const ogImage = baseMeta?.ogImage || '';

  return {
    title,
    description,
    url,
    twitter,
    facebook,
    ogImage,
  };
};

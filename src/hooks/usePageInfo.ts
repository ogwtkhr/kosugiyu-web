import { graphql, useStaticQuery } from 'gatsby';
import { PageInfoQuery } from '@/types';
import { PageId } from '@/constants';

type Parameter = {
  id: string;
};

type PageInfo = {
  id: PageId;
  title: string;
  description: string;
  ogImage?: string;
};

export const usePageInfo = ({ id: searchId }: Parameter): PageInfo => {
  const data = useStaticQuery<PageInfoQuery>(graphql`
    query PageInfo {
      settingYaml {
        pages {
          id
          title
          description
          ogImage
        }
      }
    }
  `);
  return (data.settingYaml?.pages?.find(({ id }) => id === searchId) || {
    id: '',
    title: '',
    description: '',
  }) as PageInfo;
};

import { graphql, useStaticQuery } from 'gatsby';
import { PageInfoQuery } from '@/types';

type Parameter = {
  id: string;
};

type PageInfo = {
  id: string;
  title: string;
  description: string;
};

export const usePageInfo = ({ id: searchId }: Parameter): PageInfo => {
  const data = useStaticQuery<PageInfoQuery>(graphql`
    query PageInfo {
      settingYaml {
        pages {
          id
          title
          description
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

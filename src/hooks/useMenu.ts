import { graphql, useStaticQuery } from 'gatsby';
import { MenuQuery } from '@/types';
import { PageId } from '@/constants';

type Parameter = {
  ignoreTopData?: boolean;
};

export const useMenu = ({ ignoreTopData }: Parameter = {}) => {
  const data = useStaticQuery<MenuQuery>(graphql`
    query Menu {
      settingYaml {
        pages {
          id
          title
        }
      }
    }
  `);
  const menu = (data.settingYaml?.pages || [])
    .map((item) => ({
      id: item?.id || '',
      label: item?.title || '',
    }))
    .filter(({ id }) => id !== PageId.NOT_FOUND);
  return ignoreTopData ? menu.filter(({ id }) => id !== PageId.TOP) : menu;
};

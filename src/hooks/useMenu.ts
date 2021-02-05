import { graphql, useStaticQuery } from 'gatsby';
import { MenuQuery } from '@/types';
import { PageId } from '@/constants';

type Parameter = {
  ignoreTopData?: boolean;
};

type MenuData = {
  id: string;
  label: string;
}[];

export const useMenu = ({ ignoreTopData }: Parameter = {}): MenuData => {
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
      label: item?.id === PageId.TOP ? 'トップ' : item?.title || '',
    }))
    .filter(({ id }) => id !== PageId.NOT_FOUND);
  return ignoreTopData ? menu.filter(({ id }) => id !== PageId.TOP) : menu;
};

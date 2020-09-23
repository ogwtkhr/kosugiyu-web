import { graphql, useStaticQuery } from 'gatsby';
import { MenuQuery } from '@/types';

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
  const menu = (data.settingYaml?.pages || []).map(({ id, title }) => ({
    id,
    label: title,
  }));
  return ignoreTopData ? menu.filter(({ id }) => id !== 'top') : menu;
};

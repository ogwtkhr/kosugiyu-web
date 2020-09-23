import { graphql, useStaticQuery } from 'gatsby';
import { MenuQuery, SettingYamlMenu } from '@/types';

type Parameter = {
  ignoreTopData?: boolean;
};

export const useMenu = ({ ignoreTopData }: Parameter = {}): SettingYamlMenu[] => {
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
  const menu = ((data.settingYaml?.pages || []) as SettingYamlMenu[]).map(({ id, title }) => ({
    id,
    label: title,
  }));
  return ignoreTopData ? menu.filter(({ id }) => id !== 'top') : menu;
};

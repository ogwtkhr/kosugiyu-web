import { graphql, useStaticQuery } from 'gatsby';
import { MenuQuery, SettingYamlMenu } from '@/types';

type Parameter = {
  ignoreTopData?: boolean;
};

export const useMenu = ({ ignoreTopData }: Parameter = {}): SettingYamlMenu[] => {
  const data = useStaticQuery<MenuQuery>(graphql`
    query Menu {
      settingYaml {
        menu {
          id
          label
        }
      }
    }
  `);
  const menu = (data.settingYaml?.menu || []) as SettingYamlMenu[];
  return ignoreTopData ? menu.filter(({ id }) => id !== 'top') : menu;
};

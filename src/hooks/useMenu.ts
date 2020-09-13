import { graphql, useStaticQuery } from 'gatsby';
import { Query, SettingYamlMenu } from '@/types';

type Parameter = {
  ignoreTopData?: boolean;
};

export const useMenu = ({ ignoreTopData }: Parameter = {}): SettingYamlMenu[] => {
  const data: Query = useStaticQuery(graphql`
    query MenuQuery {
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

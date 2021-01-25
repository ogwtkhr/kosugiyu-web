import { graphql, useStaticQuery } from 'gatsby';
import { FacilityInfoQuery } from '@/types';

type FacilityInfo = {
  id: string;
  title: string;
  description: string;
  details?: Pick<FacilityInfo, 'id' | 'title' | 'description'>[];
};

export const useFacilityInfo = (): FacilityInfo[] => {
  const data = useStaticQuery<FacilityInfoQuery>(graphql`
    query FacilityInfo {
      settingYaml {
        facilities {
          id
          title
          description
          details {
            id
            title
            description
          }
        }
      }
    }
  `);
  const facilityInfos: FacilityInfo[] =
    data.settingYaml?.facilities?.map((facility) => {
      const id = facility?.id || '';
      const title = facility?.title || '';
      const description = facility?.description || '';
      const details = facility?.details?.map((detail) => {
        const detailId = detail?.id || '';
        const detailTitle = detail?.title || '';
        const detailDescription = detail?.description || '';
        return {
          id: detailId,
          title: detailTitle,
          description: detailDescription,
        };
      });
      return {
        id,
        title,
        description,
        details,
      };
    }) || [];

  return facilityInfos;
};

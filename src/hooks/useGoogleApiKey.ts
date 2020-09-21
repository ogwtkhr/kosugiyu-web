import { useStaticQuery, graphql } from 'gatsby';
import { GoogleApiKeyQuery } from '@/types';

export const useGoogleApiKey = (): string | null | undefined => {
  const data = useStaticQuery<GoogleApiKeyQuery>(graphql`
    query GoogleApiKey {
      site {
        siteMetadata {
          googleApiKey
        }
      }
    }
  `);
  return data.site?.siteMetadata?.googleApiKey;
};

export default useGoogleApiKey;

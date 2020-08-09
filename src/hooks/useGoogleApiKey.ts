import { useStaticQuery, graphql } from 'gatsby';
import { GoogleApiKeyQuery } from '@/types';

export const useGoogleApiKey = () => {
  const data: GoogleApiKeyQuery = useStaticQuery(graphql`
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

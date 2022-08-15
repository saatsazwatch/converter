import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          favIcon
          logo
          siteUrl
        }
      }
    }
  `);
  return data.site.siteMetadata;
};

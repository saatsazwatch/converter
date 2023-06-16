import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    logo: `/logo.png`,
    favIcon: `/favicon.ico`,
    siteUrl: `https://www.saatsazwatch.com`,
    pathPrefix: "/tools",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  pathPrefix: "/tools/",
  plugins: [
    "gatsby-plugin-tsconfig-paths",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        // Conditionally set the typeName so that we both use a lowercased and capitalized type name
        typeName: ({ node }: any) => {
          const name = node.sourceInstanceName;
          if (name === `units`) {
            return `Unit`;
          }
          return name;
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/units`,
        name: `units`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-59HC3M6",
      },
    },
  ],
};

export default config;

module.exports = {
  siteMetadata: {
    title: `test-app`,
    description: `react-test for gobsmack`,
    author: `Daniel Hardiman`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `app-test`,
        short_name: `test`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["ProbaPro-Bold", "ProbaPro-XLight", "ProbaPro-Light", "ProbaPro-LightItalic", "ProbaPro-Medium", "ProbaPro-Regular", "ProbaPro-SemiBold"],
          urls: ["/fonts/fonts.css"],
        }
      }
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}

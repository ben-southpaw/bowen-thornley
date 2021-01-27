module.exports = {
  siteMetadata: {
    title: `Bowen Thornley Legal`,
    name: `Helen Bowen`,
    siteUrl: `https://novela.narative.co`,
    description: `Restorative Justice`,
    hero: {
      heading: `Kia Ora! <br> Welcome to Bowen Thornley Legal`,
      maxWidth: 800,
    },
    social: [
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/bowenthornley-legal-3a0154205/`,
      }
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        // contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: false,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};

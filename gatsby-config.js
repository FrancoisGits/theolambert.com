require("dotenv").config({
  path: `.env.${process.env.GATSBY_ACTIVE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Théo Lambert`,
    description: `Hi, welcome to my online resume !`,
    author: `@2SCSsob`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-firestore',
      options: {
        credential: require(`./firebase.json`),
        types: [
          {
            type: `Person`,
            collection: 'person',
            map: doc => ({
              birthDate: doc.birthDate,
              catchphrase: doc.catchphrase,
              email: doc.email,
              firstName: doc.firstName,
              lastName: doc.lastName,
              intro: doc.intro,
              location: doc.location,
              phone: doc.phone,
            }),
          },
          {
            type: 'Education',
            collection: 'education',
            map: doc => ({
              city: doc.city,
              description: doc.description,
              from: doc.from,
              to: doc.to,
              name: doc.name,
              place: doc.place,
            }),
          },
          {
            type: 'WorkExperience',
            collection: 'workExperience',
            map: doc => ({
              city: doc.city,
              description: doc.description,
              from: doc.from,
              to: doc.to,
              job: doc.job,
              place: doc.place,
              involvedSkills: doc.involvedSkills,
            }),
          },
          {
            type: 'Hobbies',
            collection: 'hobbies',
            map: doc => ({
              description: doc.description,
              faLogo: doc.faLogo,
            }),
          },
          {
            type: 'Education',
            collection: 'education',
            map: doc => ({
              description: doc.description,
              faLogo: doc.faLogo,
            }),
          },
          {
            type: 'Skills',
            collection: 'skills',
            map: doc => ({
              name: doc.name,
              type: doc.type,
              faLogo: doc.faLogo,
              devicon: doc.devicon,
              level: doc.level
            }),
          },
          {
            type: 'Socials',
            collection: 'socials',
            map: doc => ({
              name: doc.name,
              faLogo: doc.faLogo,
              link: doc.link,
            }),
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

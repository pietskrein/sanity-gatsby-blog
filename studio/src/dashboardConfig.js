export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e466cf7966dbb421c26a408',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-kgiv81xp',
                  apiId: 'a1b3d46d-a4de-4566-ae1a-dbcef2ceabfd'
                },
                {
                  buildHookId: '5e466cf7966dbb421c26a409',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-nddh9875',
                  apiId: 'd3d7676d-7b32-4b41-9b11-06355f26cc0d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pietskrein/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-nddh9875.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

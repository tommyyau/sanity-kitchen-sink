export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5eb2abbd3c1961423fa2e2b4',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-kvd6otrs',
                  apiId: '0482ec07-5732-4243-b608-147c9f59f05b'
                },
                {
                  buildHookId: '5eb2abbdca19f4f92fa4ad2a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-nvo761v3',
                  apiId: '6a1b41d5-2ec4-4717-9e99-1fa7f5cf7e32'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tommyyau/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-nvo761v3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

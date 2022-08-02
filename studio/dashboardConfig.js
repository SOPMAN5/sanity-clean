export default {
  widgets: [
    {
      name: 'sanity-tutorials'
    },
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
                  buildHookId: '62e963ca24c2233dcb2eef0e',
                  title: 'Sanity Studio',
                  name: 'sanity-clean-studio-ojbx68ou',
                  apiId: 'bce62862-e125-4b8e-b645-0f41a297d4fe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SOPMAN5/sanity-clean',
            category: 'Code'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: []},
      layout: {width: 'medium'}
    }
  ]
}

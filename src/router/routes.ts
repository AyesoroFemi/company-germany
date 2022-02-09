const routes = {
  home: {
    path: '/'
  },
  examples: {
    path: '/examples',
    label: 'Examples',
    create: {
      path: '/examples/create',
      label: 'Create examples'
    },
    edit: {
      path: '/examples/:id',
      label: 'Edit example'
    }
  },
  company: {
    path: '/company',
    label: 'Company'
  },
  tags: {
    path: '/tags',
    label: 'Tags'
  },
  news: {
    path: '/news',
    label: 'News'
  }
};

export default routes;

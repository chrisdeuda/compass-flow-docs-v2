import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '6ec'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/changelog-2026-02',
    component: ComponentCreator('/blog/changelog-2026-02', 'e9a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '393'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '97a'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '7fc'),
            routes: [
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

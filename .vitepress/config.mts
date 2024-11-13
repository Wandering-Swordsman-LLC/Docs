import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wandering Swordsman Docs",
  description: "Official documentation on how to setup the workspace, stack, workflows. Used internally. ",
  base: "/Docs/",
  markdown: {
    image: {
      lazyLoading: true
    }
  },
  themeConfig: {
    search: { 
      provider: "local"
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Resources', link: '/resources'},
      { text: 'Rules', link: '/rules'}
    ],

    sidebar: {
      '/guide': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Terminal', link: '/guide/terminal' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Workspace', link: '/guide/workspace' },
            { text: 'Locations', link: '/guide/locations' },
            { text: 'User Interface', link: '/guide/ui' }

          ],
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Wandering-Swordsman-LLC/Docs' }
    ]
  }
})

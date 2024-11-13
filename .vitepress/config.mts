import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wandering Swordsman Docs",
  description: "Official documentation on how to setup the workspace, stack, workflows. Used internally. ",
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
      { text: 'Home', link: '/' },
      { text: 'Resources', link: '/resources'}
    ],

    sidebar: {
      '/tutorial': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Terminal', link: '/tutorial/terminal' },
            { text: 'Installation', link: '/tutorial/installation' },
            { text: 'Workspace', link: '/tutorial/workspace' },
            { text: 'Locations', link: '/tutorial/locations' }

          ],
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Wandering-Swordsman-LLC/Docs' }
    ]
  }
})

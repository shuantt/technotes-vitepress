import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Shuan.Dev',
  description: 'Tech note site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Example', link: '/example' },
      { text: '前端框架', link: '/fronted-framework' },
      { text: '互動網頁', link: '/interactive-web' },
      { text: '專案', link: '/side-projects' },
      { text: '部落格', link: 'https://shuan-blog.vercel.app/' },
    ],

    sidebar: {
      '/example/': [
        {
          text: '範例',
          items: [
            { text: 'Markdown 範例', link: '/example/markdown-examples' },
            { text: 'Api 範例', link: '/example/api-examples' },
          ],
        },
      ],
      '/fronted-framework/': [
        {
          text: 'React',
          items: [
            {
              text: 'React Hooks',
              collapsed: true,
              items: [
                { text: 'Intro', link: '/react/' },
                { text: 'useState', link: '/react/react-useState' },
              ],
            },
            {
              text: 'React 套件',
              collapsed: true,
              items: [
                {
                  text: 'React Router DOM 路由設定',
                  link: '/react/react-router-dom',
                },
                { text: 'React Query', link: '/react/react-query' },
              ],
            },
            {
              text: 'Next.js',
              collapsed: true,
              items: [
                {
                  text: 'Next.js 簡介',
                  link: '/react/nextjs-intro',
                },
                {
                  text: 'Next.js 路由',
                  link: '/react/nextjs-routing',
                },
              ],
            },
          ],
        },
        {
          text: 'Vue',
          items: [
            {
              text: 'Vue 基本語法',
              collapsed: true,
              items: [
                { text: 'v-for', link: '/' },
                { text: 'v-if', link: '/' },
                {
                  text: 'Level 2',
                  collapsed: false,
                  items: [
                    {
                      text: 'Level 3',
                      items: [
                        { text: 'Level 4', link: '/side-projects/' },
                        { text: 'Level 4', link: '/side-projects/' },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      '/interactive-web/': [
        {
          text: '簡介',
          collapsed: false,
          items: [{ text: '套件差異', link: '/interactive-web/' }],
        },
      ],
      '/side-projects/': [
        {
          text: 'Side Projects',
          collapsed: false,
          items: [
            { text: '12 Week Year Planner', link: '/side-projects/' },
            { text: 'Rostonse Gallery Collection', link: '/side-projects/' },
          ],
        },
      ],
    },
    
    socialLinks: [{ icon: 'github', link: 'https://github.com/shuantt' }],
  },
});

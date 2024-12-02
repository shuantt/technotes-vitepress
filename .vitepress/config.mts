import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Shuan.Dev',
  description: 'Tech note site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '前端開發',
        items: [
          { text: 'Javascript', link: '/frontend/javascript/' },
          { text: 'React', link: '/frontend/react/' },
        ],
      },
      {
        text: '互動網站開發',
        items: [
          { text: '互動網站', link: '/interactive/' },
          { text: 'GSAP', link: '/interactive/gsap/' },
        ],
      },
      { text: 'Side Project', link: '/side-projects' },
      { text: 'Blog', link: 'https://shuan-blog.vercel.app/' },
    ],

    // sidebar: {
    //   '/javascript/': [
    //     {
    //       text: 'JavaScript',
    //       items: [
    //         { text: 'Intro', link: '/javascript/' },
    //         { text: '型別', link: '/javascript/datatype' },
    //         { text: '陣列操作', link: '/javascript/array' },
    //       ],
    //     },
    //   ],
    //   '/react/': [
    //     {
    //       text: 'React Hooks',
    //       items: [
    //         { text: 'useState', link: '/react/' },
    //         { text: 'useRef', link: '/react/' },
    //         { text: 'useEffect', link: '/react/' },
    //       ],
    //     },
    //   ],
    //   '/vue/': [
    //     {
    //       text: 'Vue',
    //       items: [{ text: 'Intro', link: '/vue/' }],
    //     },
    //   ],
    //   '/interactive/': [
    //     {
    //       text: '互動網站開發',
    //       collapsed: false,
    //       items: [{ text: '常見套件比較', link: '/interactive/' }],
    //     },
    //     {
    //       text: 'GSAP',
    //       collapsed: false,
    //       items: [{ text: 'GSAP', link: '/interactive/gsap/' }],
    //     },
    //   ],
    //   '/side-projects/': [
    //     {
    //       text: 'Side Projects',
    //       collapsed: false,
    //       items: [
    //         { text: '12 Week Year Planner', link: '/side-projects/' },
    //         { text: 'Rostonse Gallery Collection', link: '/side-projects/' },
    //       ],
    //     },
    //   ],
    // },
    sidebar: {
      '/frontend/': [
        {
          text: 'JavaScript',
          collapsed: false,
          items: [
            { text: 'Intro', link: '/frontend/javascript/' },
            { text: '型別', link: '/frontend/javascript/datatype' },
            { text: '陣列操作', link: '/frontend/javascript/array' },
          ],
        },
        {
          text: 'React',
          items: [
            {
              text: 'React Hooks',
              collapsed: true,
              items: [
                { text: 'useState', link: '/frontend/react/usestate' },
                { text: 'useRef', link: '/frontend/react/useref' },
                { text: 'useEffect', link: '/frontend/react/useeffect' },
              ],
            },
          ],
        },
      ],
      '/interactive/': [
        {
          text: '互動網站開發',
          collapsed: true,
          items: [
            { text: '常見工具', link: '/interactive/' },
            {
              text: '參考資源',
              link: '/interactive/reference',
            },
          ],
        },
        {
          text: 'GSAP',
          collapsed: false,
          items: [{ text: 'GSAP介紹', link: '/interactive/gsap/' }],
        },
      ],
      '/side-projects/': [
        {
          text: 'Side Projects',
          collapsed: true,
          items: [
            { text: '12 Week Year Planner', link: '/side-projects/' },
            { text: 'Rostonse Gallery Collection', link: '/side-projects/' },
          ],
        },
      ],
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/shuantt' }],
    search: {
      provider: 'local',
    },
  },
});

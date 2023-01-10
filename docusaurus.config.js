/* eslint-disable no-undef */

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const a11yEmoji = require('@fec/remark-a11y-emoji');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Homarr Docs',
  tagline: 'A simple, yet powerful dashboard for your server.',
  url: 'https://homarr.dev',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  // Used for publishing to GitHub Pages
  organizationName: 'ajnart',
  projectName: 'homarr-docs',
  // Has to be set even if not using translations
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/ajnart/homarr-docs/edit/master',
          remarkPlugins: [a11yEmoji],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/ajnart/homarr-docs/edit/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      navbar: {
        title: 'Homarr',
        hideOnScroll: true,
        logo: {
          alt: 'Homarr Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'about',
            label: 'Documentation',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left',
          },
          {
            to: 'https://homarr.ajnart.fr/',
            label: 'Demo',
            position: 'right',
          },
          {
            to: 'https://discord.com/invite/aCsmEV5RgA',
            label: 'Discord',
            position: 'right',
          },
          {
            to: 'https://github.com/ajnart/homarr',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'About',
                to: '/docs/about',
              },
              {
                label: 'Installation',
                to: '/docs/introduction/installation',
              },
              {
                label: 'Modules',
                to: '/docs/modules/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                to: 'https://discord.com/invite/aCsmEV5RgA',
              },
              {
                label: 'GitHub',
                to: 'https://github.com/ajnart/homarr',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: "Ajnart's Website",
                to: 'https://ajnart.fr/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Homarr`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: 'bash',
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      metadata: [
        {
          name: 'keywords',
          content: 'Homarr, Dashboard, Selfhosted, Hosting, Modules, Open-Source',
        },
      ],
    },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    },
};

module.exports = config;

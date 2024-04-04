// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '2024 Australasian Law Academics Association (ALAA) Conference',
  tagline: '3 - 5 July 2024',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  // Set the /<baseUrl>/ pathname under which your site is served
  // For Azure Static Webapps deployment
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  // For GitHub pages deployment, it is often '/<projectName>/'
  // url: 'https://flinderslaw.github.io/',
  // baseUrl: '/2024ALAAConference',
  // organizationName: 'FlindersLaw', // Usually your GitHub org/user name.
  // projectName: '2024ALAAConference', // Usually your repo name.
  // deploymentBranch: 'gh-pages',
  // trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '2024 ALAA Conference',
        logo: {
          alt: 'ALAA Logo',
          src: '/img/alaa_logo.webp',
        },
        hideOnScroll: true,
        items: [
          {
            label: 'Registration',
            to: '/registration',
            position: 'left'
          },
          {
            label: 'FAQ',
            to: '/faq',
            position: 'left'
          },
          /*{
            label: 'Program',
            to: '/tbc',
            position: 'left'
          },
          {
            label: 'Conference Material',
            to: '/tbc',
            position: 'left'
          },*/
          /* Not using this (yet)
          {to: '/blog', label: 'Blog', position: 'left'}, */
          {
            type: 'html',
            position: 'right',
            value: '<a href="https://flinders.edu.au"><img src="img/Flinders_University_Logo_Horizontal_RGB_Master.png" height="30px"></a>',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          /*{
            title: 'Registration',
            items: [
              {
                label: 'Register here',
                href: 'https://tbc.com'
              },
            ],
          },*/
          /* {
            title: 'Conference Information',
            items: [
              {
                label: 'Program',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Conference',
                href: 'https://discordapp.com/invite/docusaurus',
              },
            ],
          },*/
          /* {
            title: 'Contact',
            items: [
              {
                label: 'Contact ALAA',
                to: '/blog',
              },
              {
                label: 'Contact Flinders Law',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: 'ALAA Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          }, */
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Flinders University. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      /* Disables dark mode */
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

export default config;

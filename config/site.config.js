/**
 * This file contains the configuration used for customising the website, such as the folder to share,
 * the title, used Google fonts, site icons, contact info, etc.
 */
module.exports = {
  // This is what we use to identify who you are when you are initialising the website for the first time.
  // Make sure this is exactly the same as the email address you use to sign into your Microsoft account.
  // You can also put this in your Vercel's environment variable 'NEXT_PUBLIC_USER_PRINCIPLE_NAME' if you worry about
  // your email being exposed in public.
  userPrincipalName: process.env.NEXT_PUBLIC_USER_PRINCIPLE_NAME || 'nova@6hnj85.onmicrosoft.com',

  // [OPTIONAL] This is the website icon to the left of the title inside the navigation bar. It should be placed under the
  // /public directory of your GitHub project (not your OneDrive folder!), and referenced here by its relative path to /public.
  icon: '/icons/icon.png',

  // Prefix for KV Storage
  kvPrefix: process.env.KV_PREFIX || '',

  // The name of your website. Present alongside your icon.
  title: '希亚的西红柿的资源小站',

  // The folder that you are to share publicly with onedrive-vercel-index. Use '/' if you want to share your root folder.
  baseDirectory: '/',

  // [OPTIONAL] This represents the maximum number of items that one directory lists, pagination supported.
  // Do note that this is limited up to 200 items by the upstream OneDrive API.
  maxItems: 100,

  // [OPTIONAL] We use Google Fonts natively for font customisations.
  // You can check and generate the required links and names at https://fonts.google.com.
  // googleFontSans - the sans serif font used in onedrive-vercel-index.
  googleFontSans: 'LXGW WenKai',
  // googleFontMono - the monospace font used in onedrive-vercel-index.
  googleFontMono: 'LXGW WenKai',
  // googleFontLinks -  an array of links for referencing the google font assets.
  googleFontLinks: ['https://npm.elemecdn.com/lxgw-wenkai-webfont@1.1.0/lxgwwenkai-regular.css'],

  // [OPTIONAL] The footer component of your website. You can write HTML here, but you need to escape double
  // quotes - changing " to \". You can write anything here, and if you like badges, generate some with https://shields.io
  footer:
    '<span style="text-align:center;font-size:15px;display:block;margin:10px">© 2022-2024 希亚的西红柿</span><p align="center"><a target="_blank" style="display:inline-block;margin-inline:5px" href="https://github.com/" title="本项目由GitHub托管"><img src="https://img.shields.io/badge/Source-Github-d021d6?style=flat&logo=GitHub"></a><a target="_blank" style="display:inline-block;margin-inline:5px" href="https://vercel.com/" title="本项目部署至Vercel"><img src="https://img.shields.io/badge/Vercel-Hosted-blue?style=social&logo=Vercel"></a><a target="_blank" style="display:inline-block;margin-inline:5px" href="https://www.cloudflare.com/" title="本项目由Cloudflare代理"><img src="https://img.shields.io/badge/Proxy-Cloudflare-orange?style=flat&logo=cloudflare"></a></p><span style="text-align:center;font-size:14px;display:block;margin:5px">Powered by <a href="https://github.com/spencerwooo/onedrive-vercel-index" target="_blank" rel="noopener noreferrer">onedrive-vercel-index</a>.</span>',

  // [OPTIONAL] This is where you specify the folders that are password protected. It is an array of paths pointing to all
  // the directories in which you have .password set. Check the documentation for details.
  protectedRoutes: ['/🌞 Private folder/u-need-a-password', '/🥟 Some test files/Protected route'],

  // [OPTIONAL] Use "" here if you want to remove this email address from the nav bar.
  email: 'mailto:nova2319427728@outlook.com',

  // [OPTIONAL] This is an array of names and links for setting your social information and links.
  // In the latest update, all brand icons inside font awesome is supported and the icon to render is based on the name
  // you provide. See the documentation for details.
  links: [
    {
      name: 'GitHub',
      link: 'https://github.com/nova1751',
    },
    {
      name: 'Telegram',
      link: 'https://t.me/nova1751',
    },
  ],

  // This is a day.js-style datetime format string to format datetimes in the app. Ref to
  // https://day.js.org/docs/en/display/format for detailed specification. The default value is ISO 8601 full datetime
  // without timezone and replacing T with space.
  datetimeFormat: 'YYYY-MM-DD HH:mm:ss',
}

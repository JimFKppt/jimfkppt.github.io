/**
 * 提示：如您想使用JS版本的配置文件可参考：https://github.com/xugaoyi/vuepress-theme-vdoing/tree/a2f03e993dd2f2a3afdc57cf72adfc6f1b6b0c32/docs/.vuepress
 */
import { resolve } from 'path'
import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config'
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
import dayjs from 'dayjs'
import baiduCode from './config/baiduCode' // 百度统计hm码
import htmlModules from './config/htmlModules' // 自定义插入的html块

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  theme: 'vdoing', // 使用npm包主题
  // theme: resolve(__dirname, '../../vdoing'), // 使用本地主题

  locales: {
    '/': {
      lang: 'zh-CN',
      title: "Jim's blog",
      description: 'Java后端小学生',
    }
  },
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

  // 主题配置
  themeConfig: {
    // 导航配置
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'Java',
        link: '/Java/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
          // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
          {
            text: '学习笔记',
            items: [
              { text: 'JetBrains Academy - Java', link: '/pages/6bc01b/'},
            ],
          },
          {
            text: '练习题', link: '/pages/5a0fd5/'
            // items: [
            //   { text: 'Problem', link: '/pages/5a0fd5/'},
            // ]
          },
          {
            text: 'Java与生活',
            items: [
              { text: '参考资料', link: '/pages/8bd1db/' },
              { text: 'Java基础', link: '/pages/ea2997/'},
              { text: 'OOP上半部分', link: '/pages/d161b3/'},
              { text: 'OOP下半部分', link: '/pages/a2c72d/'},
            ],
          },
          {
            text: '后端文章',
            items: [
              
            ],
          },
        ],
      },
      {
        text: 'MySQL',
        link: '/mysql/',
        items: [
          { 
            text: "学习笔记",
            items: [
              { text: "数据库", link: '/pages/9a852e/'},
            ],
          },
          {
            text: 'MySQL删库跑路',
            items: [
              { text:'吹比', link:'/pages/dec33b/'},
              { text:'安装、连接、配置', link:'/pages/e04e78/'},
              { text:'基本操作——数据库', link:'/pages/b673ce/'},
              { text:'基本操作——表', link:'/pages/ac604a/'},
              { text:'基本操作——数据', link:'/pages/bda483/'},
              { text:'数据类型', link:'/pages/88991f/'},
              { text:'列属性完整性', link:'/pages/525c9a/'},
              { text:'数据库设计思维', link:'/pages/7bc52e/'},
              { text:'单表查询', link:'/pages/fca44f/'},
            ],
          },
        ],
      },
      { text: 'Linux',
        link: '/Linux/',
        items: [
          {
            text: "学习笔记",
            items: [
              { text:'其它', link:'/pages/4e011c/' },
            ]
          },
          {
            text: 'Linux现代方法',
            items: [
              { text:'必知', link:'/pages/0c031c/' },
              { text:'命令', link:'/pages/11d275/' },
              { text:'技巧', link:'/pages/adaf3b/' },
            ],
          },
        ],
      },
      {
        text: '技术',
        link: '/technology/',
        items: [
          { text: '技术文档', link: '/pages/9a7ee40fc232253e/' },
          { text: 'Git', link: '/note/git/'},
          { text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/' },
          { text: '前端', link: '/pages/8309a5b876fc95e3/'},
        ],
      },
      {
        text: '记录',
        link: '/record/',
        items: [
          { text: 'Monthly', link: '/pages/455805/'},
          { text: 'Others', link: '/pages/bdd3a5/'},
        ],
      },
      {
        text: '更多',
        link: '/more/',
        items: [
          { text: '学习', link: '/pages/f2a556/' },
          { text: '面试', link: '/pages/aea6571b7a8bae86/' },
          { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
          { text: '实用技巧', link: '/pages/baaa02/' },
          { text: '友情链接', link: '/friends/' },
        ],
      },
      { text: '关于', link: '/about/' },
      { text: '收藏', link: '/pages/5b66ca/'},
      {
        text: '索引',
        link: '/archives/',
        items: [
          // { text: '分类', link: '/categories/' },
          { text: '标签', link: '/tags/' },
          { text: '归档', link: '/archives/' },
        ],
      },
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/JIMFKLIFE_favicon.svg', // 导航栏logo
    repo: 'JimFKppt/jimfkppt.github.io', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    editLinks: true, // 启用编辑
    editLinkText: '编辑',

    //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

    category: false, // 是否打开分类功能，默认true
    // tag: false, // 是否打开标签功能，默认true
    // archive: false, // 是否打开归档功能，默认true
    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

    bodyBgImg: [
      'https://cdn.jsdelivr.net/gh/JimFKppt/Pictures@master/static_files/img/pexels-jakub-novacek-924824.jpg',
      'https://cdn.jsdelivr.net/gh/JimFKppt/Pictures@master/static_files/img/gabriel-l1sqXJXBgd0-unsplash.jpg',
      'https://cdn.jsdelivr.net/gh/JimFKppt/Pictures@master/static_files/img/04175_thecitythatneversleeps_1920x1200.jpg',
      'https://cdn.jsdelivr.net/gh/JimFKppt/Pictures@master/static_files/img/matthew-henry-VviFtDJakYk-unsplash.jpg',
      'https://cdn.jsdelivr.net/gh/JimFKppt/Pictures@master/static_files/img/wallhaven-3zgz2y_1920x1200.png',
      'https://cdn.jsdelivr.net/gh/JimFKppt/Pictures@master/static_files/img/wallhaven-8oev1j.jpg',
      'https://cdn.jsdelivr.net/gh/JimFKppt/Pictures@master/static_files/img/bruce-tang-nKO_1QyFh9o-unsplash.jpg',
    ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时每隔15秒换一张。
    bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0.1~ 1.0, 默认0.5
    titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    contentBgStyle: 4, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

    // updateBar: { // 最近更新栏
    //   showToArticle: false, // 显示到文章页底部，默认true
    //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    // },
    // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
    // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
    // pageButton: false, // 是否显示快捷翻页按钮，默认true

    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: 'structuring',

    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
      name: 'Jim', // 必需
      link: 'https://github.com/JimFKppt', // 可选的
    },

    // 博主信息 (显示在首页侧边栏)
    blogger: {
      avatar: 'https://cdn.jsdelivr.net/gh/JimFKppt/Pictures@master/static_files/img/Avatar-KeNan.jpg',
      name: 'Jim FuckPPT',
      slogan: 'Java小学生',
    },

    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
    social: {
      // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'tj102030123@gmail.com',
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/jimfkppt',
        },
        {
          iconClass: 'icon-erji',
          title: '听音乐',
          link: 'https://music.apple.com/cn/playlist/like/pl.u-JPAZbd9sLx97JJx?ls',
        },
      ],
    },

    // 页脚信息
    footer: {
      createYear: 2022, // 博客创建年份
      copyrightInfo:
        'Jim FuckPPT | <a href="https://github.com/xugaoyi/vuepress-theme-vdoing/blob/master/LICENSE" target="_blank">MIT License</a>', // 博客版权信息，支持a标签或换行标签</br>
    },

    // 自定义hmtl(广告)模块
    // htmlModules
  },

  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    ['link', { rel: 'icon', href: '/img/JIMFKLIFE_favicon.svg' }], //favicons，资源放在public文件夹
    [
      'meta',
      {
        name: 'keywords',
        content: '后端博客,个人技术博客,后端,后端开发,技术文档,学习,面试,Java,MySQL,Linux,数据库,服务器,编程,学习,git,github,markdown',
      },
    ],
    ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证（你可以去掉）
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    // [
    //   'script',
    //   {
    //     'data-ad-client': 'ca-pub-7828333725993554',
    //     async: 'async',
    //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    //   },
    // ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
  ],


  // 插件配置
  plugins: <UserPlugins>[

    'vuepress-plugin-baidu-autopush', // 百度自动推送

    [
      'vuepress-plugin-baidu-tongji', // 百度统计
      {
        hm: baiduCode,
      },
    ],

    // 全文搜索。 ⚠️注意：此插件会在打开网站时多加载部分js文件用于搜索，导致初次访问网站变慢。如在意初次访问速度的话可以不使用此插件！（推荐：vuepress-plugin-thirdparty-search）
    'fulltext-search',

    // // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
    // 'thirdparty-search': {
    //   thirdparty: [
    //     {
    //       title: '在MDN中搜索',
    //       frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
    //       behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
    //     },
    //     {
    //       title: '在Runoob中搜索',
    //       frontUrl: 'https://www.runoob.com/?s=',
    //     },
    //     {
    //       title: '在Vue API中搜索',
    //       frontUrl: 'https://cn.vuejs.org/v2/api/#',
    //     },
    //     {
    //       title: '在Bing中搜索',
    //       frontUrl: 'https://cn.bing.com/search?q=',
    //     },
    //     {
    //       title: '通过百度搜索本站的',
    //       frontUrl: 'https://www.baidu.com/s?wd=site%3Axugaoyi.com%20',
    //     },
    //   ],
    // },

    [
      'one-click-copy', // 代码块复制按钮
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],

    [
      'demo-block', // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      {
        settings: {
          // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
          // cssLib: ['http://xxx'], // 在线示例中的css依赖
          // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
          jsfiddle: false, // 是否显示 jsfiddle 链接
          codepen: true, // 是否显示 codepen 链接
          horizontal: false, // 是否展示为横向样式
        },
      },
    ],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
    [
      'vuepress-plugin-comment', // 评论
      {
        choosen: 'gitalk',
        options: {
          clientID: '17024051ee83b40fb4b3',
          clientSecret: '8e206147ee7024cff0324d92d43a95d36db44e32',
          repo: 'blog_gitalk_comment', // GitHub 仓库
          owner: 'JimFKppt', // GitHub仓库所有者
          admin: ['JimFKppt'], // 对仓库有写权限的人
          // distractionFreeMode: true,
          pagerDirection: 'last', // 'first'正序 | 'last'倒序
          id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
          title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
          labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
          body:
            '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
        },
      },
    ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      },
    ],
  ],

  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.ts',
    '.vuepress/config/htmlModules.ts',
  ]
})

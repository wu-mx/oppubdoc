module.exports = {
    title: 'Openit 官方文档',
    description: '致力于打造免费无感的翻墙环境',
    locates: {
        '/guide/': {
            lang: 'zh-CN',
            title: 'Openit 官方文档',
            description: '致力于打造免费无感的翻墙环境',
        },
    },
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/logo.png' }],
    ],
    base: '/',
    markdown: {
        lineNumbers: false
    },
    plugins: [
        ['@vuepress/google-analytics', {
            ga: 'G-NT8LHDDF87'
        }],
        ['@vssue/vuepress-plugin-vssue', {
            platform: 'github',
            owner: 'openit-fq',
            repo: 'openit-comment',
            clientId: '872596ac2fa127d8ba21',
            clientSecret: '7a3c28a203644261401196ffe6fd2e1dd2e524ea',
},]
    ],
    themeConfig: {
        nav:[ // 导航栏配置
            {text: '文档', link: '/guide/' },
            {text: '教程', link: '/tutorial/' },
            {text: '复制订阅链接',items:[
                    {text:'Clash（右键复制）',link:"https://openit.ml/Clash.yaml"},
                    {text:'Base64（右键复制）',link:"https://openit.ml/long"},
                    {text:'Shadowrocket（长按复制）',link:"https://openit.ml/https"},
                    {text:'Quantumult X（长按复制）',link:"https://openit.ml/Quanx.conf"}
                ]},
            {text: '一键导入',items:[
                    {text: 'Shadowrocket',link:'shadowrocket://config/add/https://openit.ml/https'},
                    {text: 'Clash for Windows',link: 'clash://install-config?url=https://openit.ml/Clash.yaml&name=Openit%20%E8%AE%A2%E9%98%85'}

                ]}
        ],
        displayAllHeaders: true,
        lastUpdated: 'Last Updated',
        repo: 'yu-steven/openit',
        docsDir: 'docs',
        smoothScroll: true,
        sidebar: {
            '/guide/':[
                {
                    title:'Openit',
                    children:[['','简介'],['about.md','关于'],['ads.md','推广']]
                },
                {
                    title: '客户端的选择及下载链接',
                    children: ['windows.md','macos.md','android.md','ios.md','linux.md','androidtv.md']
                },
            ],

            '/tutorial/':[
                {
                    title: '教程',
                    children: [
                        {
                        title: 'iOS',
                        children: [['ios-shadowrocket.md','如何使用Shadowrocket']]
                    },
                        {
                            title: 'Windows',
                            children: [['win-cfw-zh.md','汉化Clash for Windows']]
                        }]
                }
            ]
        },
        sidebarDepth: 0,
    }
};

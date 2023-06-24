
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
    title: 'Mutu Admin 文档',
    description: 'Mutu Admin 文档',
    base: "/doc/",
    theme: defaultTheme({
        // 默认主题配置
        logo: "logo.png",
        navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: '文档',
                link: '/doc',
            },
        ],
        sidebar: [
            {
                text: "文档",
                link: "/doc/",
                children: [
                    "/doc/Readme.md",
                    "/doc/router.md"],
            }
        ],
        sidebarDepth: 2,
    }),
}
)


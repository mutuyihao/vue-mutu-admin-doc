<template><div><h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1>
<p>Mutu Admin后台管理系统是一个全栈项目，主要用来处理企业中后台业务——员工管理、业务管理……。使用以下技术：Vue3、TS、Naive UI、Pinia、Echarts、Strapi(Headless CMS / Nodejs)……。</p>
<p>已完成功能：登录、注册、角色管理、员工管理、菜单权限、单个API级别的权限校验(后端)。</p>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2>
<h4 id="前端部分" tabindex="-1"><a class="header-anchor" href="#前端部分" aria-hidden="true">#</a> 前端部分</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>┌── public				<span class="token comment"># 静态资源(不会被Webpack打包)</span>
├── src					<span class="token comment"># 源代码</span>
│	├── api				<span class="token comment"># 接口</span>
│	├── assets			<span class="token comment"># 静态资源(会被打包)</span>
│	├── components		<span class="token comment"># 公共组件</span>
<span class="token operator">|</span>	├── key				<span class="token comment"># provide/inject</span>
│	├── layout			<span class="token comment"># 框架布局视图</span>
<span class="token operator">|</span>	├── plugin			<span class="token comment"># 全局通知/弹窗等方法配置</span>
│	├── router			<span class="token comment"># 路由表</span>
│	├── stores			<span class="token comment"># Pinia状态管理</span>
│	├── utils			<span class="token comment"># 全局公用方法</span>
│	├── views			<span class="token comment"># 所有视图</span>
│	├── App.vue			<span class="token comment"># 入口视图</span>
│	├── theme.ts		<span class="token comment"># 全局NaiveUI配置</span>
│	├── index.d.ts		<span class="token comment"># 全局类型声明文件</span>
│	└── main.ts			<span class="token comment"># 入口文件</span>
├── .env.development    <span class="token comment"># 开发模式下环境变量配置</span>
├── .env.production     <span class="token comment"># 生产模式下环境变量配置</span>
├── .editorconfig		<span class="token comment"># 统一编辑器样式</span>
├── package.json		<span class="token comment"># 包管理</span>
├── auto-imports.d.ts   <span class="token comment"># NaiveUI 自动引入自动生成的类型文件</span>
├── components.d.ts     <span class="token comment"># NaiveUI 自动引入自动生成的类型文件</span>
├── prettier.config.js	<span class="token comment"># prettier 配置</span>
├── tsconfig.json		<span class="token comment"># ts 配置</span>
└── vite.config.js		<span class="token comment"># vite 配置</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="后端部分" tabindex="-1"><a class="header-anchor" href="#后端部分" aria-hidden="true">#</a> 后端部分</h4>
<p>待整理……</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 进入项目目录</span>

<span class="token comment"># 安装依赖</span>
<span class="token function">pnpm</span> i

<span class="token comment"># 启动项目(开发模式)</span>
<span class="token function">pnpm</span> dev

<span class="token comment"># 打包</span>
<span class="token function">pnpm</span> build

启动完成后浏览器访问 http://localhost:5137，想使用其它端口，可以在package.json里修改。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="开发" tabindex="-1"><a class="header-anchor" href="#开发" aria-hidden="true">#</a> 开发</h1>
<h2 id="后续开发步骤" tabindex="-1"><a class="header-anchor" href="#后续开发步骤" aria-hidden="true">#</a> 后续开发步骤</h2>
<ol>
<li>分模块建立文件夹，建立同名路由表文件，编写路由信息</li>
<li>在API文件夹也是分模块建立API文件，编写API</li>
<li>在views文件夹编写页面</li>
</ol>
</div></template>



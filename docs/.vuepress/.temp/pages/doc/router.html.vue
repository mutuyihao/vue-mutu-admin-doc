<template><div><h1 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h1>
<p>Mutu后台管理系统的路由是和菜单栏直接联动的。不需要另外的开发负担。</p>
<h2 id="_1-系统路由" tabindex="-1"><a class="header-anchor" href="#_1-系统路由" aria-hidden="true">#</a> 1.系统路由</h2>
<p>当某些页面都可以访问、不需要任何权限时，比如登录,404,403等的页面，可以把路由写在系统路由表。</p>
<h2 id="_2-动态-权限-路由" tabindex="-1"><a class="header-anchor" href="#_2-动态-权限-路由" aria-hidden="true">#</a> 2.动态(权限)路由</h2>
<p>动态路由是用户登录后才可以访问的，比如主页、工作台等</p>
<p>动态权限路由是用户登录后，还需要经管理员分配相关权限才可以访问的。</p>
<p>动态权限路由在创建时需要在路由的meta里注明{auth:true},表示该路由需要鉴权。只可以在子路由里写。用户是否有权限访问该路由，需要通过系统管理员或其他经管理员授权的员工，对其他员工在员工管理页面进行菜单编辑授予相应权限。</p>
</div></template>



import Main from '@/views/main';
// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: () => import('@/views/login.vue')
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: () => import('@/views/error-page/404.vue')
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: () => import('@/views/handicap/handicapManage.vue') },
        { path: 'handicapManage', title: {i18n: 'home'}, name: 'handicap_manage', component: () => import('@/views/handicap/handicapManage.vue') },
        { path: 'handicapMoney', title: {i18n: 'home'}, name: 'handicap_money', component: () => import('@/views/handicap/handicapMoney.vue') },
        { path: 'waterMoney', title: {i18n: 'home'}, name: 'water_money', component: () => import('@/views/handicap/waterMoney.vue') },
        { path: 'setting', title: {i18n: 'setting'}, name: 'setting_index', component: () => import('@/views/setting/setting.vue') },
    ]
};

export const routers = [
    loginRouter,
    otherRouter,
    page404
];
import Vue from 'vue'
import VueRouter from 'vue-router'
import iView from 'iview';
import utils from '@/libs/utils';
import store from 'store';
import {routers, otherRouter} from './router';

Vue.use(VueRouter);

// 路由配置
const RouterConfig = {
    // mode: 'history',
    routes: routers
};

export const router = new VueRouter(RouterConfig);


router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    let tokenObj =  store.get('tokenObj', {});
    let tokenCanUse = tokenObj.token && tokenObj.tokenexpiretime >= new Date().getTime();
    console.log(tokenCanUse);
    if (!tokenCanUse && to.name !== 'login') { // 判断是否已经登录且前往的页面不是登录页
        next({
            name: 'login'
        });
    } else if (tokenCanUse && to.name === 'login') { // 判断是否已经登录且前往的是登录页
        next({
            name: 'home_index'
        });
    } else {
        utils.toDefaultPage([...routers], to.name, router, next);
    }
});

router.afterEach((to) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

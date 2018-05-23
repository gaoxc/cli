import Vue from 'vue'
import VueRouter from 'vue-router'
import iView from 'iview';
import utils from '@/libs/utils';
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
    const curRouterObj = utils.getRouterObjByName([otherRouter], to.name);
    if (curRouterObj) {
        utils.toDefaultPage([...routers], to.name, router, next);
    } else {
        utils.toDefaultPage([...routers], to.name, router, next);
    }
});

router.afterEach((to) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

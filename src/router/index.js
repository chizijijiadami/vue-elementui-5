import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const _import = file => () => import('@/pages/' + file + '.vue')
export const constantRouterList = [
    {
        path: '/login',
        component: _import('Login/index')
    },
    {
        path: '/404',
        component: _import('ErrorPages/404')
    },
    {
        path: '*',
        redirect: '/404'
    },
    {
        path: '',
        redirect: '/index/index'
    }
]
export const pagesRouterList = [
    {
        path: '/index',
        component: _import('Layout/index'),
        redirect: '/index/index',
        name: "Index",
        meta: {
            title: "首页",
            icon: "user",
            isShow: true
        },
        children: [
            {
                path: 'index',
                component: _import('Index/index'),
                name: "IndexIndex",
                meta: {
                    title: "首页",
                    icon: "user",
                    isShow: false
                }
            }
        ]
    },
    {
        path: '/list',
        component: _import('Layout/index'),
        name: "List",
        meta: {
            title: "列表",
            icon: "document",
            isShow: true
        },
        children: [
            {
                path: 'detail',
                component: _import('List/Detail/index'),
                name: "ListDetai",
                meta: {
                    title: "详情",
                    icon: "document",
                    isShow: true
                }
            },
            {
                path: 'feature',
                component: _import('List/Feature/index'),
                name: "ListFeature",
                meta: {
                    title: "特性",
                    icon: "document",
                    isShow: true
                }
            }
        ]
    },
    {
        path: '/charts',
        component: _import('Layout/index'),
        redirect: '/charts/index',
        name: "Charts",
        meta: {
            title: "图表统计",
            icon: "document",
            isShow: true
        },
        children: [
            {
                path: 'index',
                component: _import('Charts/index'),
                name: "ChartsIndex",
                meta: {
                    title: "图表统计",
                    icon: "user",
                    isShow: false
                }
            },
            {
                path: 'online',
                component: _import('Charts/Online/index'),
                name: "ChartsOnlineIndex",
                meta: {
                    title: "实时统计",
                    icon: "user",
                    isShow: true
                }
            }
        ]
    }
]
export default new Router({
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    routes: constantRouterList
})
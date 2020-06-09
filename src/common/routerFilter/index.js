import router from 'router'
import store from 'store'
import { pagesRouterList } from 'router'
import { filterRouter } from './filter'
import getPageTitle from '../utils/getPageTitle'
import { getStorage, setStorage } from '../utils'


router.beforeEach(async (to, from, next) => {
    document.title = getPageTitle(to.meta.title)
    if (getStorage()) {
        if (store.getters.app.menu.list.length === 0) {
            filterRouter(pagesRouterList).then(data => {
                if (data) {
                    store.dispatch("setAuth", data.auth)
                    store.dispatch("setMenuList", data.menuList).then(() => {
                        router.addRoutes(data.menuList)
                        if (to.path === '/404') {
                            next('/')
                        } else {
                            next({ ...to, replace: true })
                        }

                    })
                } else {
                    setStorage()
                    next('/login')
                }
            })
        } else {
            if (to.path === '/login') {
                next('/')
            } else {
                next()
            }
        }
    } else {
        if (to.path === '/login') {
            next()
        } else {
            next('/login')
        }
    }
})
router.afterEach(to => {
    if (store.getters.app.crumbs.isShow) {
        //很多场景下，Crumbs的值这么设置是不符合实际需要的，这里后面抽时间来补上。
        store.dispatch('setCrumbs', to.matched)
    }
    if (store.getters.app.tabs.isShow) {
        store.dispatch('setTabsList', to)
        store.dispatch('setTabsActivetab', to.name)
    }
})
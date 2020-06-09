import { MessageBox } from 'element-ui'
import store from 'store'
import * as api from 'data/api/Permission'
export function filterRouter(pagesRouterList) {
    return api.getPermission().then(data => {
        let auth = {
            page: [],
            btn: []
        }
        let permissionPage = data.data.permission.page;
        try {
            if (permissionPage.children && permissionPage.children.length <= 0) throw "您暂无权限请联系管理员";
            authArrFilter(permissionPage, auth)
            let authRouter = authRouterFilter(pagesRouterList, auth)
            let menuList = authRouter;
            filterPage(menuList)
            return { auth: auth, menuList: menuList };
        } catch (err) {
            MessageBox({
                message: err,
                showCancelButton: false,
                confirmButtonText: '确定',
                type: 'error'
            })
        }
    })

}

function authArrFilter(page, auth) {
    if (page.children) {
        page.children.forEach(function (item) {
            if (item.code.match(/_/)) {
                auth.btn.push(item.code)
            } else {
                auth.page.push(item.code)
            }
            authArrFilter(item, auth)
        })
    }
}

function authRouterFilter(pagesRouterList, auth) {
    function _filter(list) {
        return list.filter(item => {
            if (item.children && item.children.length) {
                item.children = _filter(item.children)
            }
            return auth.page.includes(item.name)
        })
    }
    return _filter(pagesRouterList)
}

function filterPage(menuList, pathFull, joinSign) {
    let pathFullCurrent = pathFull || ""
    let joinSignCurrent = joinSign || ""
    for (let i = 0; i < menuList.length; i++) {
        const ele = menuList[i];
        ele.pathFull = pathFullCurrent + joinSignCurrent + ele.path
        ele.showChildren = []
        store.getters.app.menu.obj[ele.name] = ele
        if (ele.children && ele.meta.isShow) {
            ele.showChildren = ele.children.filter(ele2 => ele2.meta.isShow)
            filterPage(ele.children, ele.pathFull, "/")
        }
    }
}
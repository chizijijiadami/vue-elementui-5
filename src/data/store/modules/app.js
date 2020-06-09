const app = {
    state: {
        system: {
            title: "大米工厂",
        },
        auth: {
            page: [],
            btn: []
        },
        menu: {
            isCollapse: false,
            location: "V",   //V、VH、H三个值，V表示在左侧，VH表示横跨头部，H表示在头部
            list: [],
            obj: {}
        },
        tabs: {
            isShow: false
        },
        crumbs: {
            isShow: false
        },
        footer: {
            isShow: false
        }
    },
    mutations: {
        SET_MENU_ISCOLLAPSE: state => {
            state.menu.isCollapse = !state.menu.isCollapse
        },
        SETMENU_LIST: (state, menuList) => {
            state.menu.list = menuList
        },
        SET_AUTH: (state, auth) => {
            state.auth.page = auth.page
            state.auth.btn = auth.btn
        }
    },
    actions: {
        setMenuIsCollapse({ commit }) {
            commit('SET_MENU_ISCOLLAPSE')
        },
        setMenuList({ commit }, menuList) {
            commit('SETMENU_LIST', menuList)
        },
        setAuth({ commit }, auth) {
            commit('SET_AUTH', auth)
        }
    }
}
export default app
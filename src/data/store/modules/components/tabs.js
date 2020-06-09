const tabs = {
    state: {
        activeTab: '',
        tabsList: []
    },
    mutations: {
        SET_TABS_ACTIVETAB: (state, name) => {
            state.activeTab = name
        },
        SET_TABS_LIST: (state, item) => {
            !state.tabsList.some(ele => ele.name === item.name) && state.tabsList.push(item)
        },
        DEL_TABS_LIST: (state, name) => {
            state.tabsList.forEach((item, index) => {
                if (item.name === name) {
                    state.tabsList.splice(index, 1)
                }
            })
        }
    },
    actions: {
        setTabsActivetab({ commit }, name) {
            commit('SET_TABS_ACTIVETAB', name)
        },
        setTabsList({ commit }, item) {
            commit('SET_TABS_LIST', item)
        },
        delTabsList({ commit }, name) {
            commit('DEL_TABS_LIST', name)
        }
    }
}
export default tabs;
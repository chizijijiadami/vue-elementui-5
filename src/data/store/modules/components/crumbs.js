const crumbs = {
    state: {
        crumbsList: []
    },
    mutations: {
        SET_CRUMBS(state, list) {
            state.crumbsList = list
        }
    },
    actions: {
        setCrumbs({ commit }, list) {
            commit("SET_CRUMBS", list)
        }
    }
}
export default crumbs
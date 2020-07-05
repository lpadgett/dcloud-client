const state = {
    username: "[insert username here]",
    sidebarButtons: [
        { title: 'My DCloud', icon: 'mdi-cloud' },
        { title: 'Favorites', icon: 'mdi-heart' },
        { title: 'Trash', icon: 'mdi-delete' }
    ]
};

const getters = {
    getUsername(state) {
        return state.username;
    },
    getSidebarButtons(state) {
        return state.sidebarButtons;
    }
};

const actions = {

};

const mutations = {

};

export default {
    state,
    getters,
    actions,
    mutations
}

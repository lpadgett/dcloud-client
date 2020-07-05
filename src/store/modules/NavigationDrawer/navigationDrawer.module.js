const state = {
    username: "[insert username here]",
    sidebarButtons: [ //TODO: Come up with better colors
        { title: 'My DCloud', icon: '$vuetify.icons.dcloud', color: "grey" }, //Custom icon
        { title: 'Favorites', icon: 'mdi-heart', color: "red" },
        { title: 'Trash', icon: 'mdi-delete', color: "grey" }
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

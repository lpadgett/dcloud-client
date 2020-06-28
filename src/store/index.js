import Vue from 'vue';
import Vuex from 'vuex';
import userFiles from './modules/UserFiles/userFiles.module.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        userFiles,
    }
});

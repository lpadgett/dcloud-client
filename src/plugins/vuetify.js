import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#673ab7',
                secondary: '#2196f3',
                accent: '#9c27b0',
                error: '#f44336',
                warning: '#ff9800',
                info: '#009688',
                success: '#4caf50'
            }
        }
    }
});

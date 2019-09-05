import Vue from 'vue';
import Vuex from 'vuex';
import commentsList from './modules/commentsList';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        commentsList
    }
});
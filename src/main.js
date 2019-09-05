// Import Vue
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/index.css';

// Import Vue App, routes, store
import App from './App';
import routes from './routes';
import store from './store';
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueToast, { position: 'top-right' });

// Configure router
const router = new VueRouter({
    routes,
    linkActiveClass: 'active',
    mode: 'history'
});

new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router
});

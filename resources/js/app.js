import Vue from "vue";
import router from "./router";
import store from "./store/index";
import "./filters";
import axios from "axios";
import $ from "jquery";
import "bootstrap";
import "./rangeslider";

Vue.prototype.$axios = axios;
axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.common["X-CSRF-TOKEN"] = document.head.querySelector('meta[name="csrf-token"]').content;
axios.defaults.headers.get["Accepts"] = "application/json";
axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";

window.$ = $;

// request interceptor
axios.interceptors.request.use(
    function (config) {
        store.dispatch("show", true);
        return config;
    },
    function (error) {
        store.dispatch("hide", false);
        return Promise.reject(error);
    }
);

// response interceptor
axios.interceptors.response.use(
    function (response) {
        store.dispatch("hide", false);
        return response;
    },
    function (error) {
        store.dispatch("hide", false);
        return Promise.reject(error);
    }
);

import App from "./App.vue";

new Vue({
    router,
    store,
    components: { App },
}).$mount("#app");
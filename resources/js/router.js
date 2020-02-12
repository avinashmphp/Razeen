import Vue from "vue";
import Router from "vue-router";
import Calculator from "./components/CalculatorComponent";
import Result from "./components/ResultComponent";

Vue.use(Router);

const prefixWith = (prefix, routes) =>
    routes.map(route => {
        route.path = prefix + route.path;
        return route;
    });

export default new Router({
    mode: "history",
    base: process.env.MIX_NODE_ENV !== "production" ? "/" : "/razeen/",
    linkActiveClass: "active",
    routes: [
        {
            path: "/",
            name: "calculator",
            component: Calculator,
        },
        {
            path: "/result",
            name: "result",
            component: Result,
            // beforeEnter: (to, from, next) => {
            //     if (from.name !== "calculator") next({ name: "calculator" });
            //     else next();
            // }
        },
        ...prefixWith("/dashboard/", [
            {
                path: "banks",
                name: "bank",
                component: () => import("./components/BankComponent.vue"),
                meta: { layout: "Dashboard" },
            },
            {
                path: "bank/products",
                name: "product",
                component: () => import("./components/ProductComponent.vue"),
                meta: { layout: "Dashboard" },
            },
            {
                path: "categories",
                name: "category",
                component: () => import("./components/CategoryComponent.vue"),
                meta: { layout: "Dashboard" },
            },
        ]),
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
});

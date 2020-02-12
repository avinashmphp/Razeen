import Vue from "vue";
import Vuex from "vuex";
import loader from "./modules/loader";
import calculator from "./modules/calculator";
import bank from "./modules/bank";
import product from "./modules/product";
import category from "./modules/category";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    loader,
    calculator,
    bank,
    product,
    category
  },
  strict: process.env.MIX_NODE_ENV !== "production"
});

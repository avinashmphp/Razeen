import axios from "axios";

export default {
  state: {
    amount: "",
    age: "",
    sector: "",
    downpayment: "",
    duration: "",
    success: "",
    info: "",
    errors: {},
    results: {},
  },
  mutations: {
    CALCULATOR_FORM(state, data) {
      state.amount = data.amount;
      state.age = data.age;
      state.sector = data.sector;
      state.downpayment = data.downpayment;
      state.duration = data.duration;
    },
    SUCCESS(state, data) {
      state.success = data;
    },
    INFO(state, data) {
      state.info = data;
    },
    ERROR_RECORD(state, error) {
      state.errors = error;
    },
    RESULTS(state, data) {
      state.results = data
    },
  },
  actions: {
    calculate({ commit, dispatch }, payload) {
      return new Promise((resolve, reject) => {
        axios.post('result', payload)
          .then(response => {
            commit("CALCULATOR_FORM", payload);
            commit("RESULTS", response.data.data);
            // dispatch("fetchBank");
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      })
    },
  },
  getters: {
    amount: state => state.amount,
    age: state => state.age,
    sector: state => state.sector,
    downpayment: state => state.downpayment,
    duration: state => state.duration,
    success: state => state.success,
    info: state => state.info,
    errors: state => state.errors,
    getResults: state => state.results,
  }
};

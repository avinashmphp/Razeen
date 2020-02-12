import axios from "axios";


export default {
    state: {
        banks: {},
    },
    mutations: {
        ALLBANKS(state, data) {
            state.banks = data
        },
    },
    actions: {
        fetchBank({ commit }) {
            return new Promise((resolve, reject) => {
                axios.get('api/banks/list')
                    .then(response => {
                        commit("ALLBANKS", response.data.data);
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            })
        },
        createBank({ commit, dispatch }, bank) {
            return new Promise((resolve, reject) => {
                axios.post('dashboard/banks', bank)
                    .then(response => {
                        dispatch("fetchBank");
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            })
        },
        updateBank({ commit, dispatch }, bank) {
            return new Promise((resolve, reject) => {
                axios.put('dashboard/banks/' + bank.id, bank)
                    .then(response => {
                        dispatch("fetchBank");
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            })
        },
        deleteBank({ commit, dispatch }, bank) {
            return new Promise((resolve, reject) => {
                axios.delete('dashboard/banks/' + bank.id)
                    .then(response => {
                        dispatch("fetchBank");
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            })
        }
    },
    getters: {
        getBanks: state => state.banks,
    }
};

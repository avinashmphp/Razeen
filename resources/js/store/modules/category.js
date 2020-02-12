import axios from "axios";

export default {
    state: {
        categories: {},
    },
    mutations: {
        ALLCATEGORIES(state, data) {
            state.categories = data
        }
    },
    actions: {
        fetchCategory({ commit }) {
            return new Promise((resolve, reject) => {
                axios.get('api/categories/list')
                    .then(response => {
                        commit("ALLCATEGORIES", response.data.data);
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            })
        },
        createCategory({ dispatch }, category) {
            return new Promise((resolve, reject) => {
                axios.post('dashboard/categories', category)
                    .then(response => {
                        dispatch("fetchCategory");
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            })
        },
        updateCategory({ dispatch }, category) {
            return new Promise((resolve, reject) => {
                axios.put('dashboard/categories/' + category.id, category)
                    .then(response => {
                        dispatch("fetchCategory");
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            })
        },
        deleteCategory({ dispatch }, category) {
            debugger
            return new Promise((resolve, reject) => {
                axios.delete('dashboard/categories/' + category.id)
                    .then(response => {
                        dispatch("fetchCategory");
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            })
        }
    },
    getters: {
        getCategories: state => state.categories,
    }
};

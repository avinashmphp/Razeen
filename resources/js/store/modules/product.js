import axios from "axios";


export default {
    state: {
        products: {},
    },
    mutations: {
        ALLPRODUCTS(state, data) {
            state.products = data
        }
    },
    actions: {
        bankProducts({ commit }, bank) {
            return new Promise((resolve, reject) => {
                axios.get('api/bank/products/' + bank)
                    .then(response => {
                        if (response.status === 200)
                            resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            })
        },
        fetchProduct({ commit }) {
            return new Promise((resolve, reject) => {
                axios.get('api/products/list')
                    .then(response => {
                        commit("ALLPRODUCTS", response.data.data);
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            })
        },
        createProduct({ dispatch }, product) {
            return new Promise((resolve, reject) => {
                axios.post('dashboard/bank/products', product)
                    .then(response => {
                        dispatch("fetchProduct");
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            })
        },
        updateProduct({ dispatch }, product) {
            return new Promise((resolve, reject) => {
                axios.put('dashboard/bank/products/' + product.id, product)
                    .then(response => {
                        dispatch("fetchProduct");
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            })
        },
        deleteProduct({ dispatch }, product) {
            return new Promise((resolve, reject) => {
                axios.delete('dashboard/bank/products/' + product.id)
                    .then(response => {
                        dispatch("fetchProduct");
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            })
        }
    },
    getters: {
        getProducts: state => state.products,
    }
};

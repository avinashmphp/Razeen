export default {
    state: {
        loading: false
    },
    mutations: {
        show(state) {
            state.loading = true;
        },
        hide(state) {
            state.loading = false;
        }
    },
    actions: {
        show({ commit }) {
            commit("show");
        },
        hide({ commit }) {
            commit("hide");
        }
    },
    getters: {
        isLoading: state => state.loading,
    }
};
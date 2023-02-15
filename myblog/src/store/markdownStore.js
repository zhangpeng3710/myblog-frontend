//markdown store for test
export default{
    namespaced: true,
    state: {
        mdText: "",
    },
    //store.commit & devtools & synchronous
    mutations: {
        setMdText(state, mdText) {
            state.mdText = mdText;
        },
    },
    //store.dispatch & asynchronous backend api
    actions: {

    },
};

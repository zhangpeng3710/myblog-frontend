//common store
export default{
    namespaced: true,
    state: {
        dialogConfirm: null
    },
    //store.commit & devtools & synchronous
    mutations: {
        setDialogConfirm(state, confirm) {
            state.dialogConfirm = confirm;
        },
    },
    //store.dispatch & asynchronous backend api
    actions: {

    },
};

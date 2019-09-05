import addComments from '../../api/addComments';

// initial state
const state = {
    comments: []
};

// getters
const getters = {};

// actions
const actions = {
    getAllComments ({ commit }) {
        addComments.getComments(comments => {
            commit('setComments', comments);
        });
    },

    addNewComment ({ state, commit }, comment){
        comment.id = state.comments.length+1;
        const newState = state.comments.slice();
        newState.push(comment);
        commit('setComments', newState);
    }

};

// mutations
const mutations = {
    setComments (state, comments) {
        console.log(comments)
        state.comments = comments;
    },

};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
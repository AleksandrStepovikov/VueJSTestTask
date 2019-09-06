import addComments from '../../api/addComments';

// initial state
const state = {
    comments: [],
    commentById: null
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
        newState.unshift(comment);
        commit('setComments', newState);
    },

    getCommentById ({ state, commit }, id) {
        console.log(id)
        const comment = state.comments.filter((comment) => comment.id == id)[0];
        console.log(comment)
        commit('setCommentById', comment);
    }

};

// mutations
const mutations = {
    setComments (state, comments) {
        state.comments = comments;
    },

    setCommentById (state, comment) {
        state.commentById = comment;
    }

};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
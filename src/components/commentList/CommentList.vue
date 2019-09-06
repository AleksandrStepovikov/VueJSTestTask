<template>
  <div class="commentsListContainer">
    <h1>Выводим комментарии</h1>
    <CommentCard :comments-list="comments" class="commentsList"/>
  </div>
</template>

<script>
import CommentCard from './CommentCard';
import { mapActions, mapState  } from 'vuex';

export default {
    name: 'CommentList',
    components: {
        CommentCard: CommentCard
    },
    computed: mapState({
        comments: state => state.commentsList.comments
    }),
    created () {
        if (!this.comments.length){
            this.getComments();
        }
    },
    methods: {
        ...mapActions({
            getComments: 'commentsList/getAllComments'
        })
    },
};
</script>

<style scoped>
.commentsListContainer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 40vh - 50px);
  overflow: auto;
}
.commentsList {
  width: 50%;
  margin: 0% 10%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

@media all and (max-device-width: 1024px){
  .commentsList{
    width: auto;
  }
}
@media all and (max-device-width: 425px){
  .commentsList{
    margin: 0% 5%;
  }
}
</style>
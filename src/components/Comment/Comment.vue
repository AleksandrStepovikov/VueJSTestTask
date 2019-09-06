<template>
  <div class="commentContainer">
    <h1 class="commentContent name">
      Выводим комментарий, {{ comment.name }}
    </h1>
    <div class="commentContent content" :class="{odd: comment.id%2}">
      {{ comment.comment }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapState  } from 'vuex';

export default {
    name: 'Comment',
    computed: mapState({
        comment: state => state.commentsList.commentById
    }),
    created () {
        console.log(this.$route.params.id);
        console.log(this.comment);
        this.getCommentById(this.$route.params.id);
    },
    methods: {
        ...mapActions({
            getCommentById: 'commentsList/getCommentById'
        })
    },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
.commentContainer {
  display: flex;
  align-items: center;
  flex-direction: column;
}
  .commentContent{
    width: 50%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #768275;
  }
 .name {
   color: #37414e
 }
  .content {
    background-color: #deebde;
  }
  .odd {
    background-color: #e8edf2;
  }
@media all and (max-device-width: 1024px){
  .commentContent{
    width: 80%;
  }
}
@media all and (max-device-width: 425px){
  .commentContent{
    width: 90%;
    font-size: 35px;
  }
}
</style>
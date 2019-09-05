<template>
  <div>
    <div
      v-for="comment in commentsList"
      :key="comment.id"
      class="card"
      :class="{'odd' : comment.id%2}"
    >
      <div class="cardName" :class="{'oddName' : comment.id%2}">
        {{ comment.name }}
      </div>
      <div class="cardMail" :class="{'oddMail' : comment.id%2}">
        {{ comment.mail }}
      </div>
      <div class="cardContent">
        {{ comment.comment }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CommentCard',
    props: {
        commentsList: {
            type: Array,
            required: true
        }
    }
};
</script>

<style scoped>
.card {
  word-break: break-all;
  width: 30%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #deebde;
  color: #6c737b;
  margin: 10px 0;
}
  .odd{
    background-color: #e8edf2;
  }
  .cardName{
    width: 100%;
    background-color: #57ac51;
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  .oddName{
    background-color: #4b596c;
  }
  .cardMail{
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    color: #4fae46;
  }
  .oddMail{
    color: #6c737b;
  }
  .cardContent{
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    overflow: auto;
  }
</style>
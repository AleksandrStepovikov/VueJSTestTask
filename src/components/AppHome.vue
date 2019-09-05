<template>
  <div>
    <div class="mainContainer">
      <CommentForm/>
      <CommentList/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer  from './footer/Footer';
import CommentForm from './commentForm/CommentForm';
import CommentList from './commentList/CommentList';
export default {
    name: 'AppHome',
    components: {
        Footer: Footer,
        CommentForm: CommentForm,
        CommentList: CommentList
    }
};
</script>

<style scoped>
    h1  {
        color: green;
    }
  .mainContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
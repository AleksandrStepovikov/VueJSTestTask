<template>
  <div>
    <div class="mainContainer">
      <CommentForm/>
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer  from './footer/Footer';
import CommentForm from './commentForm/CommentForm';
export default {
    name: 'AppHome',
    components: {
        Footer: Footer,
        CommentForm: CommentForm,
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
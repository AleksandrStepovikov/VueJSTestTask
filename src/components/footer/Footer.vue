<template>
  <div class="footer">
    <FooterIcon :links="linksArray" />
  </div>
</template>

<script>
import FooterIcon from './FooterIcon';
export default {
    name: 'Footer',
    components: {
        FooterIcon: FooterIcon
    },
    data (){
        return {
            linksArray:  [ '', '' ]
        };
    }
};
</script>

<style scoped>
.footer {
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    background-color: #292c32;
}
</style>
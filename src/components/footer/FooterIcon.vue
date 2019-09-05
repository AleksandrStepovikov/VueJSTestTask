<template>
  <div class="footerIconContainer">
    <div v-for="link in links" :key="link" class="footerIcon">
      {{ link }}
    </div>
  </div>
</template>

<script>
export default {
    name: 'FooterIcon',
    props: {
        links: {
            type: Array,
            default: () => []
        },
    }
};
</script>

<style scoped>
    .footerIconContainer {
        font-size: 10px;
        font-family: "FontAwesome";
        color: rgb(101, 101, 102);
        text-align: justifyLeft;
        z-index: 95;
        margin: 0 5%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .footerIcon {
        width: 20px;
        height: 20px;
        margin: 0.5%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #656566;
        border-radius: 50%;
    }

</style>
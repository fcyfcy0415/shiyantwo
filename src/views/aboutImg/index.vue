<template>
    <div>
        <img src="@assets/img/home/11.webp" alt="">
        <img src="@/assets/img/home/11.webp" alt="">
        <img :src="imgsrc" alt="">
        <img :src="imgsrc1" alt="">
    </div>
</template>
<script>
/**
 *  vue.config.js 配置自定义路径
 *  const path = require('path');
    module.exports = { 
      publicPath: './', 
      configureWebpack: {
        resolve: {
          alias: {
            '@assets': path.join(__dirname, 'src/assets'),
            "@img": path.join(__dirname, 'src/assets/img'),
            '@core': path.join(__dirname, 'core'),
          }
        }
      }
    }
 */
// import xx from ''
export default {
    name: '',
    components: {},
    props: {},
    data() {
        return {
            imgsrc: require("@assets/img/home/11.webp"),
            imgsrc1: require("@img/home/11.webp"),
        }
    },
    watch: {},
    computed:{},
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {},
    beforeUpdate() {},
    update() {},
    destoryed(){},
    methods:{
    }
}
</script>
<style lang='less' scoped>
    @import './style.less';
</style>
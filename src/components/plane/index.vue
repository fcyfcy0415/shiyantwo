<template>
    <div class="imgbox">
        <img :src="imgsrc" :style="imgstyle" alt="">
    </div>
</template>
<script>
// import xx from ''
export default {
    name: '',
    components: {},
    props: {
        imgsrc: {
            type: String,
            default: '@/assets/enemy-plane-s.png',        
        },
        imgstyle: {
            type: String,
            default: 'left: 0px, right: 0px, width: 0px, height: 0px',
        },
    },
    data() {
        return {
            
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
    destoryed() {},
    methods:{
    }
}
</script>
<style lang="less" scoped>
    @import "./style.less";
</style>
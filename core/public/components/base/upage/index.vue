/**
* 页面盒子组件
* <u-page></u-page>
*/
<template>
    <div id="pageId" class="page">
        <slot></slot>
    </div>
</template>
<script>
    /**
     * description for page or component
     * @param {Type} key description for the key
     * @example
     */
    export default {
        name:'uPage',
        components:{},
        props:{},
        data(){
            return {};
        },
        watch:{},
        computed:{},
        created(){
        },
        mounted(){},
        destoryed(){},
        methods:{}
    }
</script>
<style lang="less" scoped>
    @import './style.less';
</style>
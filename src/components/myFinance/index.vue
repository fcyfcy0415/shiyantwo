<template>
    <div class="listitem">
        <div class="title">{{item.title}}</div>
        <div class="type">{{item.typex}}</div>
        <div class="finance">
            <div class="finBox">
                <div class="dataNum">{{item.numberone}}</div>
                <div class="dataTle">{{item.dataTleOne}}</div>
            </div>
            <div class="finBox">
                <div class="dataNum">{{item.numbertwo}}</div>
                <div class="dataTle">{{item.dataTleTwo}}</div>
            </div>
            <div class="finBox">
                <div class="dataNum">{{item.date}}</div>
                <div class="dataTle">{{item.dataTleThree}}</div>
            </div>
        </div>
    </div>
</template>
<script>
    /**
     * description for page or component
     * @param {Type} key description for the key
     * @example
     */
    export default {
        name:'',
        components:{},
        props:{
            item: {
                type: Object,
                default: () => [],
            },
        },
        data(){
            return {};
        },
        watch:{},
        computed:{},
        created(){},
        mounted(){},
        destoryed(){},
        methods:{}
    }
</script>
<style lang="less" scoped>
    @import './style.less';
</style>
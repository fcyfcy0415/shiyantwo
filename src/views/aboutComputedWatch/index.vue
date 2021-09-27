<template>
    <div class="aa">
        <div class="title">
            computed 和 watch 区别 <br>
            1. computed 多个数据 影响 一个数据 <br>
            &nbsp;&nbsp;&nbsp; watch 一个数据 影响 多个数据 <br>
            2. computed 可以缓存 <br>
            &nbsp;&nbsp;&nbsp; watch 不可以缓存 <br>
        </div>
        <div class="aainp">
            <input type="text" v-model="one">
        </div>
        <div class="aainp">
            <input type="text" v-model="two">
        </div>
        <div class="aainp">
            <input type="text" v-model="fullthree">
        </div>
        <div class="btn" @click="fullthreeclic">查询</div>
    </div>
</template>
<script>
    export default {
        name:'',
        components:{},
        data(){
            return {
                one: 'one',
                two: 'two',
                three: '',
                four: 'four',
                five: 'five',
                six: 'six',
                seven: 'seven',
            };
        },
        watch:{},
        computed:{
            fullthree() {
                // eslint-disable-next-line no-console
                console.log('我出发了');
                return this.one + '' + this.two;
            }
        },
        created(){},
        mounted(){},
        destoryed(){},
        methods:{
            fullthreeclic() {
                // eslint-disable-next-line no-console
                console.log(this.fullthree);
            }
        }
    }
</script>
<style  scoped lang="less">
    @import './style.less';
</style>
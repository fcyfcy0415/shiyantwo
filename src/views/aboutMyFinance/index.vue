<template>
    <div>
        <div class="list" v-for="item in list" :key="item.id">
            <MyFinance :item="item"></MyFinance>
        </div>
    </div>
</template>
<script>
    import MyFinance from '../../components/myFinance/index'
    /**
     * description for page or component
     * @param {Type} key description for the key
     * @example
     */
    export default {
        name:'',
        components:{
            MyFinance,
        },
        props:{
        },
        data(){
            return {
                list: '',
                res: '',
            };
        },
        watch:{},
        computed:{},
        created(){},
        mounted(){
            this.getData()
        },
        destoryed(){},
        methods:{
            getData(){
                window.console.log('卧槽泥马，我执行了');
                const that = this;
                this.axios.get('/financeposts')
                .then(res=>{
                    window.console.log('卧槽泥马，我执行了',res);
                    that.list=res.data.posts;
                    that.res=res;
                })
            }
        }
    }
</script>
<style lang="less" scoped>
    @import './style.less';
</style>
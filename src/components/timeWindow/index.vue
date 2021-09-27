<template>
    <div class="masklayer">
        <div class="window" v-if="windowshow">
            <div class="title">
                <!-- 具名插槽 -->
                <slot name="demo1">{{title}}</slot>
            </div>
            <div class="next">
                <!-- 匿名插槽 -->
                <slot>{{content}}</slot>
            </div>
            <div class="btn">
                <div class="confirm" @click="close()">确认 ( {{time}}s )</div>
                <div class="cancel" @click="back()">取消</div>
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
            content:{
                type: String,
                default: '',
            },
            times:{
                type: Number,
                default: 5,
            },
            title:{
                type: String,
                default: '温馨提示',
            }
        },
        data(){
            return {
                list: '',
                res: '',
                windowshow: true,
                time: 5,
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
                this.time = this.times
                this.timeReduce();  
            },
            timeReduce(){
                if(this.time>0){
                    setTimeout(() => {
                        this.time = this.time -1;
                        this.timeReduce();
                    }, 1000);
                }                
            },
            close(){
                if (this.time == 0) {
                    this.windowshow = false;
                }
            },
            back(){
                this.$router.go(-1)
            }
        }
    }
</script>
<style lang="less" scoped>
    @import './style.less';
</style>
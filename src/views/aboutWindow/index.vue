<template>
    <div>
        <timewindow :content='content' :time='time'>
            <div slot="demo1">
                <span>我草泥马</span>
            </div>
            <div>
                <span>&emsp;&emsp;即将进入投保流程页面，为保障您的权益，请您仔细阅读保险条款，确保以下选择为您的真实意愿，所填信息真实有效，您在销售页面的操作将被记录。<br>&emsp;&emsp;投保流程应由投保人独立完成，不得由销售人员代为操作。如有销售人员介入进行营销推介，请转至营业网点销售专区内投保。”点击“确认”按钮后进入产品条款展示页面，该按钮需设置倒计时5秒后方能点击。</span>
            </div>
        </timewindow>
        <div class="longinhint">
            <div class="title">您还未登陆，请先进行登陆</div>
        </div>
    </div>
</template>

<script>
    import timewindow from '../../components/timeWindow/index'
    /**
     * description for page or component
     * @param {Type} key description for the key
     * @example
     */
    export default {
        name:'',
        components:{ timewindow, },
        props:{
        },
        data(){
            return {
                content: '',
                time: 5,
            };
        },
        watch:{},
        computed:{},
        created(){},
        mounted(){
        },
        destoryed(){},
        methods:{
        }
    }
</script>
<style lang="less" scoped>
    @import './style.less';
</style>
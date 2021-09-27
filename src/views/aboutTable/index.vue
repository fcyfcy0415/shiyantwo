<template>
    <u-page>
        <u-table :columns='tableRule' :data='tableData'></u-table>
        <u-button> 我有么 </u-button>
        <div>冯超宇自定义的页面内容</div>
    </u-page>
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
        props:{},
        data(){
            return {
                tableData: [], // 表单数据
                tableRule: [
                    {
                        key: 'author',
                        title: '姓名',
                        width: '2rem',
                    },
                    {
                        key: 'date',
                        title: '日期',
                        width: '2rem',
                    },
                    {
                        key: 'sex',
                        title: '操作',
                        width: '2rem',
                        render: function (h, params, val) {
                            let busiStatus = val;
                            let buttonArr = [];
                            const styles = {
                                type: 'hellow',
                                btnStyle: {
                                    fontSize: '.26rem',
                                }
                            }
                            let abtn = [h('u-button', 
                                {
                                    domProps: {innerHTML: '打印',},
                                    props: {
                                        ...styles
                                    },
                                    on: {
                                        'clickHandler': () => {
                                            this.tablebtn(params, val);
                                        },
                                    },
                                }
                            )];
                            // eslint-disable-next-line no-console
                            console.log('busiStatus--->', busiStatus);
                            // if (busiStatus !== '') {
                            //     buttonArr.push(abtn);
                            // }
                            buttonArr.push(abtn);
                            return h('div', buttonArr);   
                        }
                    }
                ]
            };
        },
        watch:{},
        computed:{},
        created(){
            this.getData();
        },
        mounted(){},
        destoryed(){},
        methods:{
            async getData() {
                try {
                   const res = await this.axios.get('/posts');
                   this.tableData = res.data.posts;
                   // eslint-disable-next-line no-console
                   console.log('res-->', this.tableData);
                } catch (error) {
                   // eslint-disable-next-line no-console
                   console.log(error);
                }
            },
        }
    }
</script>
<style lang="less" scoped>
    @import './style.less';
</style>
<template>
    <div class="pubilctable">
        <table>
            <thead>
                <tr>
                    <th v-for="(column, index) in columns" :key="index">
                        {{ column.title }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, indexI) in data" :key="indexI">
                    <td v-for="(column, indexJ) in columns" :key="indexJ">
                        <!-- {{row[column.key]}} -->
                        <template v-if="column.render">
                            {{row[column.key]}}
                            <table-expand :row='row' :column='column' :index='indexI' :render='column.render'>
                            </table-expand>
                        </template>
                        <template v-else>
                            {{row[column.key]}}
                        </template>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    /**
     * description for page or component
     * @param {Type} key description for the key
     * @example
     */
    import TableExpand from './expand';
    export default {
        name:'',
        components:{
            TableExpand,
        },
        props:{
            // 表单头
            columns:{
                type: Array,
                default: () => [],
            },
            // 表单内容
            data:{
                type: Array,
                default: () => [],
            }
        },
        data(){
            return {};
        },
        watch:{},
        computed:{},
        created(){
            this.showdata()
        },
        mounted(){},
        destoryed(){},
        methods:{
            showdata(){
                // eslint-disable-next-line no-console
                console.log('columns', this.columns)
            }
        }
    }
</script>
<style lang="less" scoped>
    @import './style.less';
</style>
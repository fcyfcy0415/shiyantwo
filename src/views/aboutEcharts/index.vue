<template>
    <div>
        <div class="title">数据可视化 echarts 插件应用</div>
        <!-- 柱状图 -->
        <div id="myChartHistogram" :style="{width: '400px', height: '300px'}"></div>
        <!-- 折线图 -->
        <div id="myChartLine" :style="{width: '400px',height: '300px'}"></div>
    </div>
</template>
<script>
    /**
     * 1.安装echarts依赖 npm install echarts -S
     * 
     * series: [{ // 图标类型
     * type: 'bar'：柱状/条形图
     * type: 'line'：折线/面积图
     * type: 'pie'：饼图
     * type: 'scatter'：散点（气泡）图
     * type: 'effectScatter'：带有涟漪特效动画的散点（气泡）
     * type: 'radar'：雷达图
     * type: 'tree'：树型图
     * type: 'treemap'：树型图
     * type: 'sunburst'：旭日图
     * type: 'boxplot'：箱形图
     * type: 'candlestick'：K线图
     * type: 'heatmap'：热力图
     * type: 'map'：地图
     * type: 'parallel'：平行坐标系的系列
     * type: 'lines'：线图
     * type: 'graph'：关系图
     * type: 'sankey'：桑基图
     * type: 'funnel'：漏斗图
     * type: 'gauge'：仪表盘
     * type: 'pictorialBar'：象形柱图
     * type: 'themeRiver'：主题河流
     * type: 'custom'：自定义系列
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
                charts: '',
                opinionData: ["3", "2", "4", "4", "5"]

            };
        },
        watch:{},
        computed:{},
        created(){},
        mounted(){
            this.drawLineOne();
            this.drawLineTwo();
        },
        destoryed(){},
        methods:{
            drawLineOne(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChartHistogram'))
                // 绘制图表
                myChart.setOption({
                    title: { // 标题
                        text: '我是标题',
                        textColor: 'red', 
                    }, 
                    tooltip: { // 提示信息
                        text: '我是提示信息',
                        next: '我是提示信息',
                    },

                    xAxis: { // x 轴
                        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                    },
                    yAxis: {},// y 轴
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }],
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(100,100,100,.5)' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(100,100,100,1)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                });
            },
            drawLineTwo() {
                let myChart = this.$echarts.init(document.getElementById('myChartLine'))
                myChart.setOption({
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['近七日收益']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
 
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                    data: ["1","2","3","4","5"]
                    
                    },
                    yAxis: {
                        type: 'value'
                    },
 
                    series: [{
                        name: '近七日收益',
                        type: 'line',
                        stack: '总量',
                        data: this.opinionData
                    }]
                })
            }
        }
    }
</script>
<style lang="less" scoped>
    @import './style.less';
</style>
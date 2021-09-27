<template>
    <u-page>
        <div>请在下方空白处书写申请人姓名</div>
        <div>请在下方空白处书写申请人姓名</div>
        <div>请在下方空白处书写申请人姓名</div>
        <div>请在下方空白处书写申请人姓名</div>
        <canvas class="canvasbox" :width="canwidth" :height="canheight" id="myCanvas" bindtouchstart="start" bindtouchmove="move" bindtouchend="end">
        </canvas>
        <div class="btn">
            <div class="btnone">清除</div>
            <div class="btntwo">完成</div>
        </div>
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
                canwidth: 100,
                canheight: 100,
                linewidth: 1, //线条粗细，选填
                color: "black", //线条颜色，选填
                background: "pink", //线条背景，选填
                imgsrc: ""
            };
        },
        watch:{},
        computed:{},
        created(){},
        mounted(){
            this.getCanvas();
        },
        destoryed(){},
        methods:{
            getCanvas() {
                var c=document.getElementById("myCanvas");
                var ctx=c.getContext("2d");
                window.console.log('c.top',);
                let atop = c.getBoundingClientRect().top;
                this.canwidth = c.clientWidth;
                this.canheight = c.clientHeight;
                ctx.fillStyle="#FF0000";
                ctx.fillRect(0,0,200,200);
                ctx.lineWidth = 1; //当前线条的宽度，以像素计
                ctx.moveTo(1,1);
                ctx.lineTo(300, 300);
                ctx.stroke();
                // let linewidth = this.linewidth;
                //开始绘制
                c.addEventListener(
                    "touchstart",
                    function(e) {
                        ctx.beginPath();
                        window.console.log(e);
                        e.preventDefault();
                        ctx.moveTo(e.changedTouches[0].pageX, e.changedTouches[0].pageY-atop);
                    }.bind(this),
                    false
                );
                //绘制中
                c.addEventListener(
                    "touchmove",
                    function(e) {
                        // window.console.log(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
                        ctx.lineTo(e.changedTouches[0].pageX, e.changedTouches[0].pageY-atop);
                        ctx.stroke();
                    }.bind(this),
                    false
                );
                //结束绘制
                c.addEventListener(
                    "touchend",
                    function() {
                        ctx.closePath();
                    }.bind(this),
                    false
                );
            },
        }
    }
</script>
<style lang="less" scoped>
    @import './style.less';
</style>
<template>
    <img :src="imgsrc" :style="`transform: rotate(${rotate}deg); left: ${myLeft}px; top: ${myTop}px; width: ${width}px; height: ${height}px;`" alt="">
</template>
<script>
// import xx from '' rotate(45deg)
export default {
    name: '',
    components: {},
    props: {
        item: {
            type: Object,
            default: () => {},
        },
        imgsrc: {
            type: String,
            default: require("@assets/img/home/11.webp"),        
        },
        left: {
            type: Number,
            default: 0,
        },
        top: {
            type: Number,
            default: 0,
        },
        width: {
            type: Number,
            default: 0,
        },
        height: {
            type: Number,
            default: 0,
        },
        speed: {
            type: Number,
            default: 1,
        },
        pagex: {
            type: Number,
            default: 0,
        },
        pagey: {
            type: Number,
            default: 0,
        }
    },
    data() {
        return {
            myTop: 0,
            myLeft: 0,
            timeId: {},
            pagewidth: '',
            pageheight: '',
            direction: 1,
            rotate: 0,
        }
    },
    watch: {},
    computed:{},
    beforeCreate() {},
    created() {
        this.init();
    },
    beforeMount() {},
    mounted() {
    },
    beforeUpdate() {},
    update() {},
    destoryed() {},
    methods:{
        init() {
            this.myLeft = this.left;
            this.myTop = this.top;
            this.pagewidth = this.item.pagewidth;
            this.pageheight = this.item.pageheight;
            this.start();
        },
        start(){
            const that = this;
            that.myTop = that.top;
            this.timeId = setInterval(() => {
                if (that.pagex !== 0 && that.pagey !== 0) {
                    let x = that.pagex - (that.myLeft + that.width/2);
                    let y = (that.myTop + that.height/2) - that.pagey;
                    that.rotate = that.getAngle(x, y);
                    if (x>0) {
                        that.myLeft += that.speed;
                    } else if(x<0) {
                        that.myLeft -= that.speed;
                    }
                    if (y>0) {
                        that.myTop = that.myTop - that.speed;    
                    } else if(y<0) {
                        that.myTop = that.myTop + that.speed;
                    }
                    return;
                }
                if (that.myTop<=-that.height) {
                    that.direction = 1;
                    that.myTop = that.myTop + that.speed;
                    // that.rotate = 0;
                } else if (that.myTop<=that.pageheight && that.direction === -1) {
                    that.myTop = that.myTop - that.speed;
                } else if (that.myTop<=that.pageheight && that.direction === 1) {
                    that.myTop = that.myTop + that.speed; 
                } else if(that.myTop>=that.pageheight) {
                    that.direction = -1;
                    that.myTop = that.myTop - that.speed;
                    // that.rotate = 180;
                }
            }, 1000)
        },
        // 获取角度
        getAngle(x, y) {
            if (x === 0) {
                return y > 0 ? 90 : 270;
            }
            if (y === 0) {
                return x > 0 ? 0 : 180;
            }
            let a = Math.atan(x/y)*180/Math.PI;
            if ( y > 0) {
                a = a + 180;
            }
            // let ret = a*180 / Math.PI;
            // console.log('a------->', a, ret);
            return a;
        }
    }
}
</script>
<style lang="less">
    @import "./style.less";
</style>
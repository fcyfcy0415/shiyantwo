<template>
    <!-- <u-page @touchmove.native="hometouchmove"> -->
    <u-page @mousemove.native="updatexy">
      <div class="btnbox">  
        <button class="btn" @click="goPage('about')">mock (模拟数据) 案例</button>
        <button class="btn" @click="goPage('aboutEcharts')">echarts (可视化数据) 案例</button>
        <button class="btn" @click="goPage('aboutMyFinance')">Finance (理财) 案例</button>
        <button class="btn" @click="goPage('aboutWindow')">弹窗</button>
        <button class="btn" @click="goPage('aboutSignature')">签名</button>
        <button class="btn" @click="goPage('aboutNewSignature')">新签名</button>
        <button class="btn" @click="goPage('aboutpdf')">PDF</button>
        <button class="btn" @click="goPage('aboutdistpdf')">distPDF</button>
        <button class="btn" @click="goPage('aboutComputedWatch')">computed watch 区别</button>
        <button class="btn" @click="goPage('aboutTable')">自定义表单</button>
        <button class="btn" @click="active()">运动</button>
      </div>
      <Plane v-for="(item, index) in segments"
        :item="item"
        :key="index" 
        :imgsrc="item.imgsrc"
        :width="item.width"
        :height="item.height"
        :left="item.left"
        :top="item.top"
        :pagey="pagey"
        :pagex="pagex"
        :speed="item.speed"
        :imgstyle="item.imgstyle">
      </Plane>
    </u-page>
</template>

<script>
import Plane from "./components/plane/index";
export default {
  name: 'home',
  components: {
    Plane
  },
  data:function(){
    return{
      imgsrc: require("@assets/img/home/11.webp"), // 图片路径
      page: {},
      pagewidth: '',
      pageheight: '',
      pagex: 0, // 鼠标横坐标
      pagey: 0, // 鼠标纵坐标
      segments: [
      ], // 敌机集合
      enemys: {}, 
      generatedCound: 0, // 敌机数量
      enseep: 1, // 速度
      ennumb: 20, // 生成飞机间隔
      timeID: {}, // 定时器
      enemyPlaneS: {
        width: 34,
        height: 24,
        speed: 40,
        imgSrc: require("@assets/img/home/enemy-plane-s.png"),
        boomSrc: require("@assets/img/home/enemy-plane-s-boom.gif"),
      },
      // 中敌机
      enemyPlaneM: {
        width: 46,
        height: 60,
        speed: 25,
        imgSrc: require('@assets/img/home/enemy-plane-m.png'),
        boomSrc: require('@assets/img/home/enemy-plane-m-boom.gif'),
      },
      // 大敌机
      enemyPlaneL: {
        width: 110,
        height: 164,
        speed: 20,
        imgSrc: require('@assets/img/home/enemy-plane-l.png'),
        boomSrc: require('@assets/img/home/enemy-plane-l-boom.gif'),
      },
    }
  },
  mounted () {
    this.init();
  },
  resume(){                   
  },
  methods: {
    init(){
      this.page = document.getElementById('pageId');
      this.pagewidth = this.page.offsetWidth;
      this.pageheight = this.page.offsetHeight;
      this.start();
    },
    start(){
      const that = this;
      // 定时器设置时间间隔
      this.timeID = setInterval( () => {
        that.generatedCound++;
        let newPlane = {}
        // 每10架飞机出一个大型飞机
        if(that.generatedCound % 10 == 0) {
          newPlane = that.plane(that.enemyPlaneL);
        // 每5架飞机出一个中型飞机
        } else if(that.generatedCound % 5 == 0) {
          newPlane = that.plane(that.enemyPlaneM);
        // 生成一架小型飞机
        } else { 
          newPlane = that.plane(that.enemyPlaneS);
        }
        that.segments.push(newPlane);
        if (that.generatedCound === 20) {
          clearTimeout(that.timeID);
        }
        // console.log(that.segments);
      }, 1000) // 每.1s执行一次
    },
    plane(planeModel) {
      let left = this.number(0, this.pagewidth-planeModel.width);
      return {
        imgsrc: planeModel.imgSrc, // 飞机击毁前背景图片
        speed: planeModel.speed,
        left: left,
        top: -planeModel.height,
        width: planeModel.width,
        height: planeModel.height,
        pagewidth: this.pagewidth,
        pageheight: this.pageheight,
      }
    },
    number(min,max) { 
      return Math.round(Math.random()*(max-min))+min;
    },
    /**
    * 敌机的构造函数
    * segments 敌机集合
    * generatedCound 敌机数量
    */
    enemy() { 
      this.segments = []; 
      this.generatedCound = 0;
    },
    /**
     * 页面跳转
     */
    goPage(pagename) {
      if (pagename === 'aboutpdf') {
        let url = "http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf";
        this.$router.push({
          name:'aboutpdf',
          params: {
            url: url,
          }
        });
        return;
      }
      if (pagename === 'aboutdistpdf') {
        let url = "http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf";
        this.$router.push({
          name:'aboutdistpdf',
          params: {
            url: url,
          }
        });
        return;
      }
      this.$router.push({name: pagename});
    },
    hometouchmove(event) {
      console.log('event------->', event.targetTouches[0].clientX );
    },
    updatexy(e) {
      this.pagex = e.offsetX;
      this.pagey = e.offsetY;
    },
    // 画浣熊
    active() {
      // console.log('冯超宇', document.getElementsByClassName('pagebox'));
      const page = document.getElementById('pagebox');
      const imgNode = new Image();
      imgNode.src = 'img/11.8649ba63.webp';
      imgNode.style.left = '10px';
      imgNode.style.width = '45px';
      imgNode.style.height = '30px';
      imgNode.style.position = 'absolute';
      imgNode.style.top = '0px';
      imgNode.style.left = '0px';
      page.appendChild(imgNode)
    }
  }
}
</script>
<style lang="less">
  @import './style.less';
</style>
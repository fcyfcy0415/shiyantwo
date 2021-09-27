<template>
  <u-page>
    <div class="slidebigbox" @touchstart="touchStart"
         @touchmove="touchMove"
         @touchend="touchEnd">
      <div v-bind:style="{ left: width*(0-mark)+movelin + '%' }"
        class="box1"
        v-bind:class="transition==1?'box11':''"
        :key="'info-0'">
        <pdf
        :src="src"
        :page="pageNum+1"
        @num-pages='pageTotalNum=$event'
        @page-loaded="currentPage=$event"
        @loaded="loadPdfHandler"></pdf>
      </div>
      <div v-bind:style="{ left: width*(1-mark)+movelin + '%' }"
        class="box1 ground"
        v-bind:class="transition==1?'box11':''"
        :key="'info-1'">
        <pdf
        :src="src"
        :page="pageNum"
        @num-pages='pageTotalNum=$event'
        @page-loaded="currentPage=$event"
        @loaded="loadPdfHandler"></pdf>
      </div>
      <div v-bind:style="{ left: width*(2-mark)+movelin + '%' }"
        class="box1"
        v-bind:class="transition==1?'box11':''"
        :key="'info-2'">
        <pdf
        :src="src"
        :page="pageNum+1"
        @num-pages='pageTotalNum=$event'
        @page-loaded="currentPage=$event"
        @loaded="loadPdfHandler"></pdf>
      </div>
      <div v-bind:style="{ left: width*(3-mark)+movelin + '%' }"
        class="box1 ground"
        v-bind:class="transition==1?'box11':''"
        :key="'info-3'">
        <pdf
        :src="src"
        :page="pageNum"
        @num-pages='pageTotalNum=$event'
        @page-loaded="currentPage=$event"
        @loaded="loadPdfHandler"></pdf>
      </div>
    </div>
    <div class="btn" :class="btntype?'btntwo':'btnone'"> 已阅读并同意 </div>
  </u-page>
</template>
 
<script>
import pdf from 'vue-pdf'

export default {
  components: {
    pdf
  },
  data () {
    return {
      pageNum:1,
      pageTotalNum:0, // 总页数
      src: '',
      showa: true,
      arr:[],
      numPages: undefined,
      btntype: false,
      money: [],
      timer: null,
      movelin: 0,
      mark: 1, // 轮播图位置
      width: 100,
      transition: 1,
      shopId: '', // 店铺id
      id: '', // 活动id
      statistics: {}, // 统计
    }
  },
  created () {
    this.touch = {};
    this.init();
  },
  mounted(){
    this.src.promise.then(pdf => {
      this.numPages = pdf.numPages;
    });
  },
  methods:{
    init(){
      this.src = pdf.createLoadingTask('http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf');
    },
    loadPdfHandler(){
      this.showa = false
    },
    changePdfPage (val) {
      this.pageNum= this.pageNum + val;
      window.console.log('this.pageNum',this.pageNum)
      let arr = [];
      for (let i = 0; i < this.pageTotalNum; i++) {
        arr[i]=i;
      } 
    },
    scrollEvent(e){
      if(e.srcElement.scrollTop+e.srcElement.offsetHeight>e.srcElement.scrollHeight-100){ 
        window.console.log("啦啦啦啦啦触发了") 
        this.active=this.active+1;
        this.btntype = true
        //加载更多
      }
    },
    //获取触摸位置
    touchStart(e) {
      window.console.log('e------>',e.touches[0].pageX)
      const touch = e.touches[0];
      this.touch.startX = touch.pageX;
      this.touch.startY = touch.pageY;
    },
    //判定触摸方向 轮播位移程度
    touchMove(e) {
      const touch = e.touches[0];
      const deltaX = touch.pageX - this.touch.startX;
      const deltaY = touch.pageY - this.touch.startY;
      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        return;
      }
      this.movelin = Math.round(deltaX * 200 / window.innerWidth);
    },
    //结束触摸
    touchEnd() {
      if (this.movelin > (this.width / 4)) {
        this.transition = 1;
        this.mark = this.mark - 1;
        if (this.mark <= 0 && this.pageNum>=2) {
          this.pageNum = this.pageNum-2;
          setTimeout(this.markMothertwo, 300);
        }else if(this.mark <= 0 && this.pageNum<2){
          this.pageNum = this.pageTotalNum -1
          setTimeout(this.markMothertwo, 300);
        }
      } else if (this.movelin < (-this.width / 4)) {
        this.transition = 1;
        this.mark = this.mark + 1;
        if (this.mark >= 3 && this.pageNum+2<=this.pageTotalNum) {
          this.pageNum = this.pageNum+2;
          window.console.log('this.pageNum',this.pageNum)
          setTimeout(this.markMother, 300);
        }else if(this.mark >= 3 && this.pageNum+2>this.pageTotalNum){
          this.pageNum = 1;
          setTimeout(this.markMother, 300);
        }
      }
      this.movelin = 0;          
    },
    //定时器开始
    play() {
      this.autoPlay()
    },
    //定时器停止
    stop() {
        clearInterval(this.timer);
    },
    //定时器执行函数
    autoPlay() {
        var that = this;
        that.transition = 1;
        that.mark++;
        if (that.mark >= 3) {
            setTimeout(that.markMother, 300);
        }
    },
    //延迟执行函数 用于实现无缝轮播
    markMother() {
        this.transition = 0;
        this.mark = 1;
    },
    //延迟执行函数 用于实现无缝轮播
    markMothertwo() {
        this.transition = 0;
        this.mark = 2;
    },
  }
}
</script>
<style lang="less" scoped>
    @import './style.less';
</style>
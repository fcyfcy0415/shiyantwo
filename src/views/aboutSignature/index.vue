<template>
  <div class="hello">
    <div id="canvas">
    </div>
    <p @click="handelClearEl()">清除</p>
    <p @click="handelSaveEl()">保存</p>
    <p @click="handelThickness()">粗细</p>
    <p @click="handelColour()">颜色</p>
    <img :src="imgsrc" alt="">
  </div>
</template>
 
<script>
let canvas = document.createElement("canvas");
let cxt = canvas.getContext("2d");
export default {
  name: "HelloWorld",
  components: {},
  data() {
    return {
      linewidth: 1, //线条粗细，选填
      color: "black", //线条颜色，选填
      background: "pink", //线条背景，选填
      imgsrc: ""
    };
  },
  mounted() {
    this.getCanvas();
  },
  methods: {
    getCanvas() {
      let el = document.getElementById("canvas");
      el.appendChild(canvas);
      canvas.width = el.clientWidth;
      canvas.height = el.clientHeight;
      cxt.fillStyle = this.background; //填充绘图的背景颜色
      cxt.fillRect(0, 0, canvas.width, canvas.height); //绘制“已填色”的矩形
      cxt.strokeStyle = this.color; //笔触的颜色
      cxt.lineCap = "round"; //线条末端线帽的样式
      let linewidth = this.linewidth;
      //开始绘制
      canvas.addEventListener(
        "touchstart",
        function(e) {
          cxt.beginPath();
          cxt.lineWidth = linewidth; //当前线条的宽度，以像素计
          cxt.moveTo(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
        }.bind(this),
        false
      );
      //绘制中
      canvas.addEventListener(
        "touchmove",
        function(e) {
          cxt.lineTo(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
          cxt.stroke();
        }.bind(this),
        false
      );
      //结束绘制
      canvas.addEventListener(
        "touchend",
        function() {
          cxt.closePath();
        }.bind(this),
        false
      );
    },
    handelColour() {
      this.color = "red";
      this.getCanvas();
    },
    handelThickness() {
      this.linewidth = 5;
      this.getCanvas();
    },
    handelClearEl() {
      cxt.clearRect(0, 0, canvas.width, canvas.height);
    },
    handelSaveEl() {
      let imgBase64 = canvas.toDataURL();
      this.imgsrc = imgBase64;
    }
  }
};
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
html,
body {
  width: 100%;
  height: 100%;
}
#canvas {
  width: 100%;
  height: 100%;
  position: relative;
}
#canvas canvas {
  display: block;
}
</style>
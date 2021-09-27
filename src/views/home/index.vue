<template>
    <u-page>
      <div>
        <button @click="goMock()">mock (模拟数据) 案例</button>
        <button @click="goEcharts()">echarts (可视化数据) 案例</button>
        <button @click="goMyFinance()">Finance (理财) 案例</button>
        <button @click="goTimeWindow()">弹窗</button>
        <button @click="goSignature()">签名</button>
        <button @click="goNewSignature()">新签名</button>
        <button @click="goShowPdf()">PDF</button>
        <button @click="goShowdistPdf()">distPDF</button>
        <button @click="goComputedWatch()">computed watch 区别</button>
        <button @click="goTable()">自定义表单</button>
      </div>
    </u-page>
</template>

<script>
export default {
  name: 'home',
  data:function(){
    return{
    }
  },
  mounted () {
  },
  resume(){          
    this.init();           
  },
  methods: {
    init(){
      alert('我执行了吗')
    },
    goMock(){
      this.$router.push({name:'about'})
    },
    goEcharts(){
      this.$router.push({name:'aboutEcharts'})
    },
    goMyFinance(){
      this.$router.push({name:'aboutMyFinance'})
    },
    goTimeWindow(){
      this.$router.push({name:'aboutWindow'})
    },
    goSignature(){
      this.$router.push({name:'aboutSignature'})
    },
    goNewSignature(){
      this.$router.push({name:'aboutNewSignature'})
    },
    goShowPdf(){
      let url = "http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf";
      this.$router.push({
        name:'aboutpdf',
        params: {
          url: url,
        }
      })
    },
    goShowdistPdf(){
      let url = "http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf";
      this.$router.push({
        name:'aboutdistpdf',
        params: {
          url: url,
        }
      })
    },
    goComputedWatch(){
      this.$router.push({name: 'aboutComputedWatch'})
    },
    goTable(){
      this.$router.push({name: 'aboutTable'});
    }
  }
}
</script>
<style scoped>
  @import './style.less';
</style>
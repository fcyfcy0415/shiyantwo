<template>
  <u-page>
    <embed scrolling="yes" frameborder="0" wicket:id="mainPage" :src="pdfUrl" width="100%" height="100%"/>
  </u-page>
</template>
<script>
let PDFJS = require('pdfjs-dist');
PDFJS.GlobalWorkerOptions.workerSrc = require('pdfjs-dist/build/pdf.worker.min');
export default {
  data () {
    return {
      pdfUrl: "http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf",
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style scoped lang="less">
  .show_iframe{
    -webkit-overflow-scrolling: touch;
    overflow-y: scroll;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    iframe{
      position: absolute;
      bottom: 0;
      height: 100%;
      width: 100%
    }
  }
</style>
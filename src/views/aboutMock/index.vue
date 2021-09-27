<template>
  <div class="about">
    <h1>mock 模拟数据</h1>
    <div class="box" v-for="post in posts" :key="post.id">
      <img :src="post.icon" alt="">
    </div>
  </div>
</template>
<script> 
export default {
  data () {
    return {
      posts:[], // 模拟数据
    }
  },
  mounted () {
    this.grtData();
  },
  methods: {
    grtData(){
      this.axios.get('/posts')
      .then(res=>{
        this.posts=res.data.posts
      })
    },
  },
}
</script>
<style lang="less">
  @import './style.less';
  .about {
    position: relative;
    margin: 0 auto;
    width: 1300px;
    overflow: hidden;
    background-color: rgba(100,100,100,.5);
    .box{
      position: relative;
      float: left;
    }
  }
</style>
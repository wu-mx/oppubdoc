<template>
  <div id="app">
    <div v-for="ads in adsList" class="card" v-if="seen">
      <div class="mdui-card">
      <div class="mdui-card-primary">
        <div class="mdui-card-primary-title">{{ ads.name }}</div>
        <div class="mdui-card-primary-subtitle">{{ ads.info }}</div>
      </div>
      <div class="mdui-card-content" v-html="ads.description"></div>
      <div class="mdui-card-actions">
        <button class="mdui-btn mdui-btn-icon mdui-float-right" ><a :href="ads.link"> <i class="mdui-icon material-icons">arrow_forward</i></a></button>
      </div>
    </div>
      <br>
    </div>
    <p v-if="load">加载中</p>
    <p v-if="err">加载错误！请重新加载！<br>错误信息:{{errLog}}</p>
  </div>

</template>

<script>
const axios =require('axios')

module.exports = {
  name: "ads",
  data(){
    return{
      adsList:[],
      seen:false,
      load:true,
      err:false,
      errLog:{}
    }
  },
  mounted () {
    axios
        .get('https://project.openit.ml/ads/main/ads.json')
        .then((res)=>{
          this.adsList = res.data;
          this.load = false;
          this.seen = true;
        })
        .catch((error) => { // 请求失败处理
          this.load = false;
          this.err = true;
          console.log(error);
          this.errLog = error
        });
  }
}

</script>

<style src="./css/mdui.min.css"></style>
<style scoped>
.card{
  top: 5px
}
</style>
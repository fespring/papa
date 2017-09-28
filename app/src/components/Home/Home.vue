<template>
  <div id="home">
    <hometop></hometop>
    <homelist></homelist>
  </div>
</template>

<script>
  import hometop from './Hometop'
  import homelist from './Homelist'
  export default {
    name: 'home',
    components:{
      hometop,
      homelist
    }
  }
</script>
<style lang="" scoped>
  #home{
    height:6.4rem;
    margin-top:0.5rem;
    margin-bottom:0.7rem;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border: 1px solid #d9d9d9;
  }
</style>
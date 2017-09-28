<template>
  <div id="me">
    <metop></metop>
    <friendslist></friendslist>
  </div>
</template>

<script>
import Metop from './Metop'
import Friendslist from './Friendslist'
export default {
  name: 'me',
  components:{
    Metop,
    Friendslist
  }
}
</script>
<style lang="" scoped>
  #me{
    height:6rem;
    margin-top:0.7rem;
    margin-bottom:0.7rem;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border: 1px solid #d9d9d9;
  }
</style>
<template>
  <div>
      <router-view></router-view>
      <mu-paper id="tabnav">
        <mu-bottom-nav :value="bottomNav" @change="handleChange">
          <mu-bottom-nav-item value="/home" title="附近" icon="near_me"/>
          <mu-bottom-nav-item value="/news" title="消息" icon="insert_comment"/>
          <mu-bottom-nav-item value="/me" title="我的" icon="person"/>
        </mu-bottom-nav>
      </mu-paper>
  </div>

</template>

<script>
export default {
  data () {
    return {
        bottomNav: "/home"
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val,
      this.$router.push(val);
    }
  },
  mounted(){
    var path = this.$route.path;
    if(path=="/"){
        path="/home"
    }
    this.bottomNav=path;

  }
}
</script>

<style>
    #tabnav{
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
    }
</style>
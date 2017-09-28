
<template>
  <div class="demo-infinite-container">
    <div
      v-waterfall-lower="loadMore"
      waterfall-disabled="isWaterfallDisabled"
      waterfall-offset="400"
      @click="tz"
    >
        <van-card v-for="(item,index) in list" :key="index">
          <div class="shang" slot="title"><strong>{{item.title}}</strong> <mu-badge content="22" primary  slot="after"/>
            <div class="you">{{item.distance}}</div>
          </div>
          <div class="xia" slot="desc">{{item.desc}}</div>
          <div slot="thumb">
            <img :src="'/static/touxiang/'+item.imgurl"/>
          </div>
        </van-card>
        <mu-divider/>
        <van-loading v-if="loading" :type="'gradient-circle'" :color="'black'" class="quan"></van-loading>
        <div v-if="nodata == 0">没有数据了！！！</div>
    </div>
  </div>
  </template>
  
  <script>
  import Vue from 'vue';
  
  import { Card , Loading} from 'vant';
  Vue.component(Card.name, Card);
  Vue.component(Loading.name, Loading);

  import { Waterfall } from 'vant';
  import {getHomelist} from '@/api/homelist'

  
  export default {
    data () {
      return {
        list:[],
        page:0,
        isWaterfallDisabled:false,
        loading:false,
        nodata:1
      }
    },
    directives: {
      WaterfallLower: Waterfall('lower'),
      WaterfallUpper: Waterfall('upper')
    },
    mounted () {
    },
    methods: {
      tz(){
          this.$router.push("/liaotian")
      },
      loadMore:function () {
        if(this.nodata == 0)return false;
        if(this.loading) return false;
        this.loading = true;
        this.page++;
        let that=this;
        getHomelist(that.page).then(res=>{
          if(res.data.length == 0){
            that.nodata = 0;
          }
          that.list=that.list.concat(res.data);
          that.loading = false;
        });      
      }
      
    }
  }
  </script>
  
  <style lang="css" scoped>
    img{
      width:0.6rem;
      height:0.6rem;
      border-radius: 0.3rem;
    }
    .you{
      float: right;
      text-align: right;
      width: 1.2rem;
    }
    .shang{
      margin-top: 0.2rem;
    }
    .xia{
      margin-top: 0.05rem;
    }
    .quan{
      margin-left:1.5rem;
    }
  </style>
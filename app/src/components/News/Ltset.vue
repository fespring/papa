<template>
    <div>
        <mu-appbar title="返回" class="nav" :zDepth="0">
            <mu-icon-button icon="arrow_back" slot="left" @click="back" class="navicon"/>
        </mu-appbar>

        <div>
            <mu-list>
                <mu-list-item>
                    <img src="static/touxiang/1.jpg" width="50px"/>
                </mu-list-item>
                <mu-list-item title="(+86) 88977296" describeText="电话">
                    <mu-icon value="chat_bubble" slot="right" class="listicon"/>
                </mu-list-item>


                
            </mu-list>
        </div>   
            
            
            
    </div>
</template>

<script>
    

    export default {
        name:"Ltset",
        methods:{
            back:function(){
                this.$router.back()
            }
        }
    }
</script>
<style scoped>
    .nav{
        font-size: 0.26rem;
        background: #fff;
        color: #000;
    }
    .listicon{
        padding-left: 0.1rem;
        border-left:1px solid #ccc;
    }
    .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
    
</style>

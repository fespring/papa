<template>
    <mu-menu desktop>
        <mu-menu-item title="这个是个人资料里面需要额页面 " @click="my"/>
        <mu-menu-item title="设置"/>
    </mu-menu>
</template>


<script>
    export default{
        name : "melist",
         methods: {
            my(){
                this.$router.push("/friends")
            }
        },
    }
</script>

<style lang="" scoped>
    .mu-menu-destop{
        padding:0;
    }
    .mu-menu-destop .mu-menu-item-wrapper{
        height:0.5rem;
        line-height:  0.5rem;
        border-bottom:0.01rem solid #ddd;
    }
</style>
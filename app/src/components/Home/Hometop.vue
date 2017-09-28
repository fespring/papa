<template>
    <div>
        <mu-appbar id="fujin">
            <mu-flat-button icon="more_horiz" slot="right"/>
            <mu-flat-button label="附近的人" slot="default"/>
        </mu-appbar>
    </div>
</template>

<script>
    export default{
     
    }
</script>

<style scoped>

    .mu-appbar{
        background: #FFF;
        position:fixed;
        left:0;
        top:0;
        right:0;
        z-index:1;
    }
    #fujin .mu-flat-button{
        font-size: 0.26rem;
        color:#272727;
    }
    .mu-icon{
        color:#272727;
    }
</style>

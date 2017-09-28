<template>
    <div class="hezi">
        <mu-list>
            <mu-list-item title="约吗" describeText="查看或编辑个人资料">
                <img src="../../assets/touxiang.jpg" slot="right" class="touxiang"/>
            </mu-list-item>
            <mu-divider/>
        </mu-list>
    </div>
</template>

<script>
    export default{
        name : "metop"
    }
</script>

<style lang="" scoped>
    .hezi{
        position:fixed;
        left:0;
        top:0;
        right:0;
        z-index:1;
        background:#fff;
    }
    .touxiang{
        width:0.6rem;
        height:0.6rem;
        border-radius: 0.3rem;
    }
    .mu-list{
        padding:0;
        border-bottom:0.1rem solid #eee;
    }
    .mu-item-right{
        width:0.72rem;
    }
    .mu-item-content{
        margin-left: 0.2rem;
    }
    .mu-item-title{
        font-size: 0.2rem;
        font-weight:bold;
    }
</style>
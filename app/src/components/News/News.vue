<template>
    <div>
        <mu-appbar>
            <mu-flat-button label="消息" slot="left"/>
            <mu-icon-button icon="announcement" slot="right"/>
            <mu-icon-button icon="account_box" slot="right"/>
        </mu-appbar>
        <mu-divider/>

        <mu-text-field hintText="搜索" class="demo-divider-form" :underlineShow="false"/>
        <mu-divider/>

        <mu-list>
            <mu-list-item title="Mike Li" class="chatp" @click="tz">
                <img src="../../assets/1.jpg" slot="leftAvatar" class="img1"/>
                <mu-icon value="chat_bubble" slot="right"/>
            </mu-list-item>
            <mu-list-item title="Mike Li" class="chatp">
                <img src="../../assets/1.jpg" slot="leftAvatar" class="img1"/>
                <mu-icon value="chat_bubble" slot="right"/>
            </mu-list-item>
            <mu-list-item title="Mike Li" class="chatp">
                <img src="../../assets/1.jpg" slot="leftAvatar" class="img1"/>
                <mu-icon value="chat_bubble" slot="right"/>
            </mu-list-item>
        </mu-list>
        
    </div>
</template>

<script>

    

    export default{
        name:"news",
        data () {
            return {
            dataSource: []
            }
        },
        methods: {
            handlechange (val) {
            console.log(`you choose ${val}`)
            },
            handleInput (val) {
            this.dataSource = [
                val,
                val + val,
                val + val + val
            ]
            },
            tz(){
                this.$router.push("/liaotian")
            }
        },
        
    }
</script>

<style scoped>
    .demo-divider-form{
        height: 0.5rem;
        width: 100%;
        border: 5px solid #ccc;
        border-radius: 0.05rem;
        padding-left: 0.2rem;
        line-height: 0.5rem;
    }
    .img1{
        width: 0.4rem;
        height: 0.4rem;
    }
    .chatp{
        border: 1px solid #ccc;
    }
</style>

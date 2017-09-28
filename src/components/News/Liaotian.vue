<template>
    <div>
        <mu-appbar class="nav" title="与xx对话">
            <mu-icon-button icon="arrow_back" slot="left" @click="back" class="navicon"/>
            <mu-icon-button icon="home" slot="right" @click="back" class="navicon" to="/ltset"/>    
        </mu-appbar>
        <div class="shuru">
            <mu-auto-complete hintText="请随便输入点啥" @input="handleInput" :dataSource="dataSource" @change="handlechange" fullWidth class="shuruk"/>
            <mu-flexbox >
                <mu-flexbox-item class="flex-demo">
                    <mu-icon-button icon="keyboard_voice"/>
                </mu-flexbox-item>
                <mu-flexbox-item class="flex-demo">
                    <mu-icon-button icon="insert_photo"/>
                </mu-flexbox-item>
                <mu-flexbox-item class="flex-demo">
                    <mu-icon-button icon="photo_camera"/>
                </mu-flexbox-item>
                <mu-flexbox-item class="flex-demo">
                    <mu-icon-button icon="insert_invitation"/>
                </mu-flexbox-item>
                <mu-flexbox-item class="flex-demo">
                    <mu-icon-button icon="share"/>
                </mu-flexbox-item>
                <mu-flexbox-item class="flex-demo">
                    <mu-icon-button icon="mood"/>
                </mu-flexbox-item>
                <mu-flexbox-item class="flex-demo">
                    <mu-icon-button icon="add_circle_outline"/>
                </mu-flexbox-item>
            </mu-flexbox>
        </div>

    </div>
</template>

<script>
    export default{
        methods:{
            back(){
                this.$router.back()
            },

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
            // toggle () {
            //     this.open = !this.open
            // }
        },
        data () {
            return {
            dataSource: [],
            open: false
            }
        },
 
    }
</script>

<style scoped>
    .nav{
        background: #fff;
        color: #000;
    }
    .shuruk{
        padding-left: 0.2rem;
    }
    .shuru{
        width: 100%;
        height: 1rem;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .flex-demo {
        height: 0.5rem;
        text-align: center;
        line-height: 32px;
    }
</style>

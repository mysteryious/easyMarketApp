<template>
    <div class="foots">
        <span>
            <router-link to="/home">首页</router-link>
        </span>
        <span>
            <router-link to="/topic">专题</router-link>
        </span>
        <span>
            <router-link to="/catelog">分类</router-link>
        </span>
        <span>
            <router-link to="/cart">购物车</router-link>
        </span>
        <span>
            <router-link to="/mine">我的</router-link>
        </span>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style lang="scss">
.foots{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 0.5rem;
    display: flex;
    font-size: .14rem;
    background-color: #fff;
    span{
        flex:1;
        display: flex;
        align-items: center;
        justify-content: center;
        a{
            color: #000
        }
    }
}
</style>
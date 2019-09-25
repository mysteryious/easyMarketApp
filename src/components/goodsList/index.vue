<template>
    <div>
        <div class="goodsItemImg">
            <img :src="GoodsItem.list_pic_url" alt="">
        </div>  
        <div class="goodsItemName">{{GoodsItem.name}}</div>
        <div class="goodsItemPrice">￥{{GoodsItem.retail_price}}</div>
    </div>
</template>
<script>
export default {
    props:["GoodsItem"],
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
    
    .goodsItemImg{
        width: 100%;
        min-height: 1rem;
        height: auto;
        img{
            width: 100%;
            height: auto;
        }
    }
    .goodsItemName{
        text-align: center;
    font-size: .14rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-bottom: .15rem;
    padding-top: .05rem;
    }
    .goodsItemPrice{
        text-align: center;
    font-size: .14rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: red;
    }
</style>
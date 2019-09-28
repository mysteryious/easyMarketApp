<template>
    <div class="noTabPageContent">
        <div class="header">
            <Header :title="brand.name"></Header>
        </div>
        <div class="brandDetail">
            <img class="imgLazyload loadEnd" :src="brand.list_pic_url" alt="">
            <div class="breadDesc">{{brand.simple_desc}}</div>
        </div>
        <div class="goodsList">
            <a :href="'/goods/'+ item.id" class="goodsItem" v-for="(item) in goodsList" :key="item.id" >
                <GoodsList :GoodsItem="item"></GoodsList>
            </a>
        </div>
    </div>
</template>
<script>
import { mapMutations, mapActions } from 'vuex'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            brand:{},
            goodsList:[]
        }
    },
    computed:{

    },
    methods:{
        ...mapActions("brandDetail", ["getBrandDetail"]),
        ...mapActions("categorys", ["getGoodsList"]),
    },
    created(){

    },
    mounted(){
        let id = this.$route.params.id;
        this.getBrandDetail({params:{id:id}}).then(res=>{
            this.brand =res.brand
            console.log(res)
        })
        this.getGoodsList({params:{brandId:id,page:1,size:1000}}).then(res=>{
            this.goodsList = res.data
            console.log(res)
        })
    }
}
</script>
<style lang="scss">
.noTabPageContent{
    font-size: 14px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .header{
        width: 100%;
        height: .5rem;
        background: white;
        box-shadow: 0 0.04rem 0.08rem 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
    }
    .brandDetail{
        font-size: 0.14rem;
        width: 100%;
        height: auto;
        img{
            width: 100%;
            height: auto;
            opacity: 1;
            transition: all 1s;
        }
        .breadDesc {
            width: 100%;
            line-height: .2rem;
            padding: .2rem;
            background: white;
            text-indent: 2em;
            color: gray;
        }
        
    }
    .goodsList {
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            flex: 1;
            .goodsItem{
                width: 50%;
                height: auto;
                background: white;
                padding: .1rem;
                position: relative;
            }
        }
}
</style>
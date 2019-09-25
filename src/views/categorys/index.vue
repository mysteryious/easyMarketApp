<template>
  <div class="noTabPageContent">
    <div class="header">
      <div class="left">&it;</div>
      <div class="title">奇趣分类</div>
      <div class="right"></div>
    </div>
    <div class="tabWrap">
        <div class="am-tabs am-tabs-horizontal am-tabs-top">
            <div class="am-tabs-tab-bar-wrap" v-for="(item) in CatalogInitData" :key="item.id">
              {{item.name}}
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import {mapMutations,mapActions} from 'vuex'
export default {
  props: {},
  components: {},
  data() {
    return {
      CatalogInitData:[]
    };
  },
  computed: {},
  methods: {
    ...mapActions('categorys',['getCatalogInitData'])
  },
  created() {},
  mounted() {
    let id = this.$route.params.id;
    this.getCatalogInitData({params:id}).then(res=>{
      this.CatalogInitData = res.categoryList
    })
  }
};
</script>  
<style lang="scss">
.noTabPageContent {
  font-size: 14px;
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.5rem;
    background: white;
    box-shadow: 0 0.02rem 0.08rem 0 rgba(0, 0, 0, 0.12),
      0 0 6px 0 rgba(0, 0, 0, 0.02);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    .left {
      width: 0.3rem;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .title {
      flex: 1;
      font-size: 0.16rem;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .right {
      width: 0.3rem;
    }
  }
  .tabWrap{
    position: fixed;
    top: 1rem;
    left: 0;
    width: 100%;
    height: auto;
    z-index: 10;
    .am-tabs{
            box-sizing: border-box;
    display: flex;
    flex: 1 1;
    position: relative;
    overflow: hidden;
    height: 100%;
    width: 100%;
    flex-direction: column;
    }
  }
}
</style>
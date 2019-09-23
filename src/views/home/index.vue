<template>
  <div class="box">
    <div class="main">
      <Swiper></Swiper>
      <div class="channelWrap">
        <span v-for="(item,index) in channelWrapList" :key="index">{{item}}</span>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Swiper from '../../components/swiper/index.vue';
export default {
  props: {},
  data() {
    return {
      channelWrapList:['居家','餐厨','配件','服装','志趣']
    };
  },
  components:{
    Swiper,
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss">
.box {
  display: flex;
  flex-direction: column;
  font-size:14px;
}
.main {
  flex: 1;
  .channelWrap{
    width: 100%;
    height: 0.7rem;
    display: flex;
    padding: 0.05rem 0;
    span{
      flex: 1;
      text-align: center;
      line-height: 0.7rem;
    }
  }
}
.footer {
  width: 100%;
  height:0.45rem;
  display: flex;

  a {
    flex: 1;
    line-height: 0.45rem;
    text-align: center;
  }
  .router-link-active {
    color: skyblue;
  }
}
</style>
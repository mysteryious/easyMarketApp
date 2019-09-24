<template>
  <div class="brandBox">
    <div class="brandTitle">品牌制造商直供</div>
    <div class="brandWrap">
      <a class="brandItem" v-for="(item,index) in getbrandList" :key="index">
        <img :src="item.new_pic_url" alt />
        <div class="brandItemBox">
          <span class="brandItemName">{{item.name}}</span>
          <p class="brandItemMinPrice">{{item.floor_price}}元起</p>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: ["brandBox"],
  components: {},
  data() {
    return {};
  },
  computed: {
    getbrandList() {
      console.log(this.brandBox)
      return this.brandBox.brandList;
    }
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.brandBox {
  width: 100%;
  margin-top: 0.1rem;
  .brandTitle {
    height: 0.5rem;
    background: white;
    text-align: center;
    font-size: 0.15rem;
    line-height: 0.5rem;
    letter-spacing: 0.01rem;
    font-weight: bold;
  }
  .brandWrap {
    background: white;
    display: flex;
    flex-wrap: wrap;
    .brandItem {
      display: inline-block;
      width: 50%;
      height: 1.1rem;
      position: relative;
      .brandItemBox {
        position: absolute;
        top: 0.1rem;
        left: 0.1rem;
        font-size: 0.15rem;
        .brandItemMinPrice {
          position: absolute;
          top: 0.3rem;
          left: 0.1rem;
          font-size: 0.12rem;
          color: darkgrey;
        }
      }
    }
  }
}
</style>
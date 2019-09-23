<template>
  <div class="swiper-container">
     <swiper :options="swiperOption" >
    <swiper-slide v-for="(slide,index) in swiperSlides" :key="index">I'm Slide {{ slide }}</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css"; ////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  props: {},
  components: {
    swiperSlide,
    swiper
  },
  data() {
    return {
      swiperOption: {
          pagination: {
            el: '.swiper-pagination',
          },
          autoplay:true,
          speed:300,
          loop:true
        },
        swiperSlides: [1, 2, 3, 4, 5]
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.swiper-container {
  width: 100%;
  height: 2rem;
  border-bottom: 1px solid #eee;
}
</style>
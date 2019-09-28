<template>
  <div class="box">
    <div class="main">
      <ul class="serviceList">
        <li>
          <span>★</span>30天无忧退货
        </li>
        <li>
          <span>★</span>48小时快速退款
        </li>
        <li>
          <span>★</span>满88元免邮费
        </li>
      </ul>
      <div class="cartGoodsListWrap">
        <div class="cartGoodsItem">
          <div class="isCheckItem">
            <img :src="checkout" alt />
          </div>
          <div class="goodsImg">
            <img src="http://yanxuan.nosdn.127.net/0984c9388a2c3fd2335779da904be393.png" alt />
          </div>
          <div v-if="flag" class="cartGoodsMsg">
            <div>色织精梳AB纱格纹空调被</div>
            <div></div>
            <div class="pic">¥199</div>
          </div>
          <div v-if="flag" class="cartGoodsNum">x5</div>

          <div v-if="!flag" class="cartGoodEditWrap">
            <div class="cartEditSizeName">一选择</div>
            <div class="cartEditNum">
              <div :style="{color:'red'}">￥26</div>
              <div class="countOps">
                <div class="countOp">
                  <div>-</div>
                  <div>5</div>
                  <div>+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cartGoodsDo">
        <div class="isCheckItem">
          <img :src="checkout" alt />
        </div>
        <div v-if="flag"  class="cartMsgAll">已选（1）¥199</div>
        <div v-if="flag"  class="cartAllDoButton" @click="tab(false)">编辑</div>
        <div v-if="flag"  class="cartAllDoButton pay">下单</div>
        <div v-if="!flag" class="cartMsgAll">已选（1)</div>
        <div v-if="!flag" class="cartAllDoButton"  @click="tab(true)">完成</div>
        <div v-if="!flag" class="cartAllDoButton pay">删除所选</div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      checkout:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC",
      checkBox:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg==",
      flag:false
    };
  },
  computed: {

  },
  methods: {
    tab(flag){
      this.flag =flag
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss">
@import "./index.scss";
.cartGoodEditWrap {
  flex: 1 1;
  min-width: 0;

  .cartEditSizeName {
    font-size: 0.15rem;
    height: 50%;
    display: flex;
    align-items: center;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 0.1rem;
  }
  .cartEditNum {
    height: 50%;
    display: flex;
    align-items: center;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 0.1rem;
    .countOps {
      display: flex;
      flex: 1;
      flex-direction: row-reverse;
      .countOp {
        width: auto;
        display: flex;
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.25rem;
        }
        div:nth-child(3),
        div:nth-child(1) {
          width: 0.3rem;
          height: 0.3rem;
          border: 1px solid gainsboro;
        }
        div:nth-child(2) {
          min-width: 0.5rem;
          height: 0.3rem;
          padding: 0 0.1rem;
          font-size: 0.16rem;
          border: 1px solid gainsboro;
          border-right: none;
          border-left: none;
        }
      }
    }
    div:nth-child(1) {
      width: auto;
      padding: 0;
    }
  }
}
</style>
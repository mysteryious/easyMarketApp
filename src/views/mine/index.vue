<template>
  <div class="App">
    <main class="main">
      <!-- 头部 -->
      <div class="userMsgWrap">
        <div class="userLogo"></div>
        <div class="userMsgs">
          <div>{{userPhone}}</div>
          <div>普通用户</div>
        </div>
      </div>
      <!-- icon -->
      <div class="userPower">
        <div v-for="(list,index) in userPower" :key="index" @click="showPower(list)">
          <i :class="list.icon"></i>
          {{list.name}}
        </div>
      </div>
      <!-- 退出 -->
      <div class="loginOut" @click="tui">退出登录</div>
      <!-- dialong -->

      <div class="mine-dialong" :style="{'display':isshow?'block':'none'}">
        <div class="dia-content">
          <i class="iconfont icon-sad"></i>
          <span>{{str}}</span>
        </div>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
import { getocaltion } from "../../utils/login";
import "../../static/font/iconfont";

export default {
  props: {},
  data() {
    return {
      str: "",
      isshow: false,
      userPhone: getocaltion("nideShopUser"),
      userPower: [
        {
          icon: "iconfont icon-tianjiawenjian",
          name: "我的收藏",
          link: "/collect"
        },
        {
          icon: "iconfont icon-dizhi",
          name: "地址管理",
          link: "/address"
        },
        {
          icon: "iconfont icon-wodedingdan",
          name: "我的订单"
        },
        {
          icon: "iconfont icon-richeng",
          name: "周末拼单"
        },
        {
          icon: "iconfont icon-youhuijuan",
          name: "优惠券"
        },
        {
          icon: "iconfont icon-youxuan",
          name: "优选购"
        },
        {
          icon: "iconfont icon-red-packet_icon",
          name: "我的红包"
        },
        {
          icon: "iconfont icon-huiyuan",
          name: "会员plus"
        },
        {
          icon: "iconfont icon-yaoqing",
          name: "邀请返利"
        },
        {
          icon: "iconfont icon-fankui",
          name: "意见反馈"
        },
        {
          icon: "iconfont icon-kefu",
          name: "客服咨询"
        },
        {
          icon: "iconfont icon-unie637",
          name: "账户安全"
        }
      ]
    };
  },
  computed: {},
  methods: {
    showPower(item) {
      let _this, timer;
      this.isshow = !this.sshow;
      if ("link" in item) {
        this.$router.history.push(item.link);
      } else {
        _this = this;
        this.str = `${item.name}功能还未解锁，请耐心等候~`;
        timer = setTimeout(() => {
          _this.isshow = false;
        }, 2000);
      }
    },
    tui(){
      this.$router.history.push('/login')
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss">
@import "./index.scss";
</style>
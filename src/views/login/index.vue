<template>
  <div class="loginBox">
    <div class="logo">
      <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt />
    </div>
    <div class="loginMain">
      <div class="inputWrap onePx_bottom">
        <input type="text" v-model="mobile" placeholder="请输入手机号码" />
      </div>
      <div class="inputWrap onePx_bottom">
        <input type="password" v-model="password" placeholder="请输入登录密码" />
      </div>
      <div class="loginBtn">
        <button type="primary" @click="hadleSubmit">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import { setocaltion } from "../../utils/login";

export default {
  props: {},
  components: {},
  data() {
    return {
      mobile: "15323807318",
      password: "123456"
    };
  },
  computed: {},
  methods: {
    ...mapActions("login", ["UserLogin"]),

    hadleSubmit: function() {
      this.UserLogin({
        mobile: this.mobile,
        password: this.password
      }).then(res => {
        if (res.data) {
          setocaltion("token", res.sessionKey);
          setocaltion("nideShopUser", res.mobile);
          this.$router.history.push("/home");
        } else {
          alert(res.errmsg);
        }
      });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss">
@import "./index.scss";
</style>
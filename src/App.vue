<template>
  <div class="wrap">
    <router-view></router-view>
    <div>
      <!-- <router-link ></router-link> -->
      <router-link v-for="(item,index) in footer" :to="item.path" :key="index" >{{item.title}}</router-link>
    </div>
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
      footer:[
        {
          title:"首页",
          path:'/'
        },
        {
          title:'专题',
          path:'/catelog'
        },
        {
          title:'分类',
          path:'/topic'
        },
        {
          title:'购物车',
          path:'/cart'
        },
        {
          title:'我的',
          path:'/mine'
        }
      ]
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
<style scoped lang="css">
*{
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
html,body,#app,.wrap{
  width: 100%;
  height: 100%;
}
</style>
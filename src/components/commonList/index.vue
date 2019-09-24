 <template>
  <div class="commentList">
    <div class="commentItem" v-for="list in commentList" :key="list.id">
      <div class="userInfo">
        <div v-if="list.user_info.username">{{list.user_info.username}}</div>
        <div v-else>匿名用户</div>

        <div>{{list.add_time}}</div>
      </div>
      <div class="userComment">{{list.content}}</div>
      <div class="commentPicList">
        <!-- {
          item.pic_list.map((item) => {
           return <img src={item.pic_url} key={item.id} alt={item.id}/>
            })
        }-->
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  name: "CommonList",
  props: {
    commentList: Array
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {
    console.log(this.commentList)
  }
};
</script>
<style lang="scss">
@import "./index.scss";
</style>
 

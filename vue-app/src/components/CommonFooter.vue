<template>
  <footer :style="{backgroundColor: curMenu.bgColor}">
    <!-- :key优化性能 类似虚拟dom -->
    <div v-for="menu in menuList" :key="menu.path" @click="change(menu)">
      <router-link :to="menu.path" >{{menu.name}}</router-link>
    </div>
  </footer>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
 
  data(){
    return {
      menuList: [
      {
        name: '剧集',
        bgColor: '#f54d80',
        path: '/'
      },
      {
        name: '音乐',
        bgColor: 'brown',
        path: '/music'
      },
      {
        name: '书籍',
        bgColor: 'green',
        path: '/book'
      },
      {
        name: '聊天',
        bgColor: '#555577',
        path: '/chat'
      },
    ]
    }
  },
  computed: {
    // 把curMenu 映射为 this.$store.state.curMenu
    ...mapState(["curMenu"]),
   
  },
  methods: {
    ...mapMutations(["setCurMenu"]),
    change(menu){
      this.setCurMenu(menu)
    },
  },
  // 解决刷新时总是显示默认值的样式问题
   created() {
    this.menuList.forEach((value) => {
      if (value.path == this.$route.path) {
        this.setCurMenu(value);
      }
    });

   }

}
</script>

<style lang="scss" scoped>
  footer{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    background: pink;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    a{
      color: #000;
    }
    // 当 <router-link> 对应的路由匹配成功，
    // 将自动设置 class 属性值 .router-link-active
    .router-link-exact-active{
      color:#f2f2f2;
    }
  }
</style>
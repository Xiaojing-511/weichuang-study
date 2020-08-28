<template>
  <header :style="{backgroundColor: curMenu.bgColor}">
    <span class="home" @click="goHome">首页</span>
    <span>{{curMenu.name}}</span>
  </header>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    // 使用对象展开运算符将此对象混入到外部对象中
    ...mapState(["curMenu"])
  },
  methods: {
    ...mapMutations(["setCurMenu"]),
    goHome() {
      // 通过 this.$router 访问路由器
      this.$router.push("/");
      this.setCurMenu({
        name: "剧集",
        bgColor: "#f54d80",
        path: "/"
      });
    }
  },
  
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  color: #f2f2f2;
  background: pink;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  .home {
    position: absolute;
    left: 0.1rem;
  }
}
</style>
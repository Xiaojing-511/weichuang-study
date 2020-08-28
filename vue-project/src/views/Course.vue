<template>
  <div>
    <h1>课程</h1>
    <router-link to="/course/fe">前端</router-link>|
    <router-link to="/course/rd">后端</router-link>

    <!-- 插槽 决定html显示的位置 -->
    <transition name="bounce" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  // 组件内的守卫
  // 不！能！获取组件实例 `this`
  // 因为当守卫执行前，组件实例还没被创建
  beforeRouteEnter(to, from, next) {
    console.log(to);
    console.log(from);
    console.log(next);
    next();
  },

  beforeRouteLeave(to, from, next) {
    console.log(to);
    console.log(from);
    console.log(next);
    console.log(this);
    next();
  }
};
</script>

<style lang="scss" scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
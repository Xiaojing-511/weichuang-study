<template>
  <div>
    <h1>用户详情</h1>
    <!-- <p>用户名：{{params.name}}</p>
    <p>用户ID：{{params.id}}</p> -->
    <p>用户名：{{this.$route.params.name}}</p>
    <p>用户ID：{{this.$route.params.id}}</p>
    <button @click="goForward">前进</button>
    <button @click="goHome">Home</button>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
    // params: this.$route.query,

    }
  },
  methods: {
    // 编程式导航

    // 除了使用 <router-link> 创建 a 标签来定义导航链接，
    // 我们还可以借助 router 的实例方法，通过编写代码来实现。

    // 点击 <router-link :to="..."> 等同于调用 router.push(...)
    // 声明式	<router-link :to="...">
    // 编程式	router.push(...)
    
    
    goForward(){
      // this.$router.go(1)
      this.$router.forward()
    },
    goHome(){
      this.$router.push('/')
    }
    
  },
}
</script>
<template>
  <div id="app">
    <div id="nav">
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. 把路由导航到 / 路径-->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->

      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/course">Course</router-link>|
      <!-- 注意： "" 中不能写""  只能写'' -->
      
      <!-- 路由传参方式  1.path,query(在地址栏会有参数)  2.name,params（在地址栏没有参数） 3.（利用URL传参）在定义路由的path中写-->
      <!-- <router-link :to="{path:'/user',query:{id:20185855,name:'xiaojing'}}" >用户详情</router-link> -->
      <router-link :to="{name:'User',params:{id:20185855,name:'xiaojing'}}">用户详情</router-link>|
    
      <router-link to="/details/lisi/20181000">课程详情</router-link>|
      
      <!-- redirect 重定向-->
      <!-- 直接改变了url的值，把url变成了真实的path路径 -->

      <!-- 重定向到不用传参数的页面 -->
      <!-- <router-link to="/redirect" >重定向测试</router-link> | -->
      <!-- 重定向到需要传参数的页面 -->
      <router-link to="/redirect/zhangsan/20185855">重定向测试</router-link>|
      
      <!-- alias   起别名 -->
      <!-- URL路径没有别改变，这种情况更友好，让用户知道自己访问的路径，只是改变了<router-view>中的内容 -->
      <!-- 当用户访问 /aaa 时，URL 会保持为 /aaa，但是路由匹配则为 /，就像用户访问 /aaa 一样 -->
      <!-- <router-link to="/aaa">aaa</router-link> -->

      <router-link to="/count">vuex</router-link>|


      <!-- 其他
          1.当 <router-link> 对应的路由匹配成功，将自动设置 class 属性值 .router-link-active
             常用于设置当前触发的dom元素的样式设置
      -->

    </div>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

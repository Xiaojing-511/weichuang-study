<template>
  <div>
    <h1>课程</h1>
    <router-link to="/course/fe">前端</router-link> |
    <router-link to="/course/rd">后端</router-link>
    
    <!-- 插槽 决定html显示的位置 -->
    <router-view/>
  </div>
</template>
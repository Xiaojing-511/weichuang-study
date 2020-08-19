<template>
  <div>
    <h1>用户详情</h1>
    <p>用户名：{{params.name}}</p>
    <p>用户ID：{{params.id}}</p>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
    params: this.$route.query,
    }
  }
}
</script>
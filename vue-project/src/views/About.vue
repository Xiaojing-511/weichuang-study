<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="goBack">后退</button>
  </div>
</template>
<script>
export default {
  methods: {
    goBack(){
      // this.$router.go(-1)
      this.$router.back()
    }
  },
}
</script>

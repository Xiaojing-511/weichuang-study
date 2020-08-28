<template>
  <div id="tvDetails">
      <h1>{{tvObj.title}}</h1>
      <p>{{tvObj.intro}}</p>
  </div>
</template>

<script>
export default {
    data () {
        return {
            tvObj: {},
        }
    },
    created() {
        this.getData();
    },
    methods: {
        getData(){
            let baseUrl = "https://bird.ioliu.cn/v2?url=";
           
            let tvDetailUrl = "https://m.douban.com/rexxar/api/v2/tv/"+this.$route.params.id;
            this.axios
            .get(baseUrl + tvDetailUrl)
            .then(res=>{
                this.tvObj = res.data;
                // console.log(res);
            })
            .catch(err=>{
                console.log(err);
            })
        }
    },
}
</script>

<style lang="scss" scoped>
    #tvDetails{
        padding: 10px;
    }
</style>
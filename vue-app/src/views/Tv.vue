<template>
  <div>
    <ul class="tv-list">
      <li class="tv-item" v-for="(item,index) in tvList" :key="index" @click="jumpDetails(item.id)">
        <div class="img">
          <!-- 注意此处src需要加: -->
          <img :src="'https://images.weserv.nl/?url=' + item.cover.url" alt />
        </div>
        <div class="content">
          <h3>{{item.title}}</h3>
          <p>{{item.info}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tvList: [],
      start: 0,
      // 判断上一次是否请求完毕
      isFinish: true
    };
  },
  // 页面创建完后自动调用
  created() {
    this.getData();
  },
  mounted() {
    this.listenScroll();
  },
  methods: {
    /*
      跨域问题：当你网页所在的地址与你接口的地址（协议，域名，端口号），任何一个不同都会引发跨域问题（因为浏览器的同源策略）。 
        解决：jsonp,让后端帮你配置一下（cors）,服务器代理

        一下用的是第三方服务器代理
    */
    //  获取剧集列表数据
    getData() {
      if (this.isFinish) {
        this.isFinite = false;
        // 要用v2
        let baseUrl = "https://bird.ioliu.cn/v2?url=";
        let tvUrl =
          // 删掉部分参数
          `https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items?os=ios&for_mobile=1&start=${this.start}&count=10`;
        this.axios
          .get(baseUrl + tvUrl)
          .then(res => {
            // 数组的拼接
            this.tvList = this.tvList.concat(res.data.subject_collection_items);
            this.isFinish = true;
          })
          .catch(err => console.log(err));
      }
    },
    // 处理数据懒加载
    listenScroll() {
      // 获取根节点 （html）
      let htmlDom = document.documentElement;
      let htmlHeight = htmlDom.clientHeight;

      let fulHeight = 0;
      let scrollHeight = 0;

      // 箭头函数 解决this指向问题
      window.onscroll = () => {
        // 当文档被滚动时发生的事件
        // 返回元素的高度
        fulHeight = htmlDom.offsetHeight;
        // 返回元素上边缘与视图之间的距离(滚出去的高度)
        scrollHeight = htmlDom.scrollTop;

        // console.log(scrollHeight);
        // console.log(fulHeight);
        if (scrollHeight + htmlHeight > fulHeight - 10) {
          // 滚动事件防抖（阻止未加载完时就+10）
            if (this.isFinish) {
              this.start += 10;
              console.log(this.start);
            }

          if (this.start < 50) {
              this.getData();
            }
            console.log("到底啦");
          }

          // console.log("滚动到底部");
        }
      }
    },
    // 编程式导航
    jumpDetails(id) {
      // URL传参 会在this.$route.params.id接收到
      this.$router.push("/TvDetails/" + id);
    }
  
}
</script>

<style lang="scss" scoped>
.tv-list {
  .tv-item {
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #cccccc;
    .img {
      flex: 3;
      img {
        width: 100%;
      }
    }
    .content {
      flex: 5;
      padding: 10px;
      h3 {
        font-weight: bolder;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
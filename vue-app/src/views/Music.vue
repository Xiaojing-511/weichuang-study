<template>
  <div id="app">
    <aplayer :audio="audio" :lrcType="3" />
    <ul>
      <li class="music-item">
        <span class="order">编号</span>
        <span class="name">歌曲名</span>
        <span class="artist">歌手名</span>
      </li>
      <li class="music-item" v-for="(item,index) in playList" 
      :key="item.id" @click="getMusic(item.id)">
        <span class="order">{{index +1}}</span>
        <span class="name">{{item.name}}</span>
        <span class="artist">{{item.artist}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';
import APlayer from '@moefe/vue-aplayer';

Vue.use(APlayer, {
  defaultCover: 'https://github.com/u3u.png',
  productionTip: true,
});

export default {
  data() {
    return {
      playList: [],
      audio: {
        name: '东西（Cover：林俊呈）',
        artist: '纳豆',
        url: 'https://cdn.moefe.org/music/mp3/thing.mp3',
        cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
        lrc: 'https://cdn.moefe.org/music/lrc/thing.lrc',
      },
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData(){
      let musicUrl = 'https://bird.ioliu.cn/netease/playlist?id=5188087934';
      this.axios
      .get(musicUrl)
      .then(res=>{
        this.playList = res.data.playlist.tracks.map((item)=>{
          return {
            name: item.name,
            id: item.id,
            artist: item.ar[0].name
          }
        })
        // console.log(this.playList);
      })
      .catch(err=>{
        console.log(err);
      })
    },
    getMusic(id){
      let musicUrl = 'https://bird.ioliu.cn/netease/song?id='+id;
      let musicObj = {};
      this.axios.get(musicUrl)
      .then((res)=>{
        // console.log(res);
        musicObj = {
          name: res.data.data.name,
          artist: res.data.data.ar[0].name,
          url: res.data.data.mp3.url,
          cover: res.data.data.al.picUrl,
        };
        this.audio = musicObj;
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.music-item {
  padding: 10px;
  display: flex;
  .order {
    flex: 1;
  }
  .name {
    flex: 4;
  }
  .artist {
    flex: 2;
  }
}
</style>
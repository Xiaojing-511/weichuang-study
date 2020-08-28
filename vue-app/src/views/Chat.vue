<template>
  <div id="chat">
    <div class="chat-list-div">
      <div class="chat-list" v-for="(item,index) in chatList" :key="index">
        <div class="question">
          <span>{{item.question}}</span>
        </div>
        <div class="answer">
          <span>{{item.answer}}</span>
        </div>
      </div>
    </div>

    <div class="chat-form">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="chatText" placeholder="请输入信息..."></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="sendMessage">发送</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import md5 from "blueimp-md5";
export default {
  data() {
    return {
      chatText: "",
      chatList: []
    };
  },
  methods: {
    // 获取时间戳
    getTimeStamp() {
      let timer = new Date();
      timer = Date.parse(timer);
      timer = timer.toString().substr(0, 10);
      timer = Number.parseInt(timer);
      return timer;
    },
    // 生成随机字符串
    getRanStr() {
      let str = Math.random();
      str = str.toString(16).substr(2);
      return str;
    },
    // 接口鉴权
    getSign(obj) {
      // 1、将<key, value>请求参数对按key进行字典升序排序，得到有序的参数对列表N
      let arr = Object.keys(obj);
      arr = arr.sort();
      // 2、将列表N中的参数对按URL键值对的格式拼接成字符串，得到字符串T（如：key1=value1&key2=value2），
      // URL键值拼接过程value部分需要URL编码，URL编码算法用大写字母，例如%E8，而不是小写%e8
      let str = "";
      arr.forEach(key => {
        // encodeURI() 函数可把字符串作为 URI 进行编码。 全局函数
        str += key + "=" + encodeURI(obj[key]) + "&";
      });
      // 3、将应用密钥以app_key为键名，组成URL键值拼接到字符串T末尾，得到字符串S
      str += "app_key=nkxWSVENC0lOOnEd";
      // 4、对字符串S进行MD5运算，将得到的MD5值所有字符转换成大写，得到接口请求签名
      str = md5(str).toUpperCase();
      return str;
    },
    sendMessage() {
      let baseUrl = "https://bird.ioliu.cn/v2?url=";
      let chatUrl = "https://api.ai.qq.com/fcgi-bin/nlp/nlp_textchat";
      let params = {
        app_id: 2155994462,
        time_stamp: this.getTimeStamp(),
        nonce_str: this.getRanStr(),
        session: "10000",
        question: this.chatText
      };
      params.sign = this.getSign(params);
      console.log(params);
      this.axios
        .get(baseUrl + chatUrl, { params }) //这里注意对象要加{ }
        .then(res => {
          // console.log(res);
          this.chatList.push({
            question: this.chatText,
            answer: res.data.data.answer
          });
          this.chatText = "";
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.sendMessage();
  }
};
</script>

<style lang="scss" scoped>
.chat-list-div {
  padding-bottom: 1rem;
  .chat-list {
    font-size: 0.5rem;
    .question {
      text-align: right;
      span {
        background: green;
      }
    }
    .answer {
      text-align: left;
      span {
        background: #ccc;
      }
    }
  }
}

.chat-form {
  position: fixed;
  bottom: 0.7rem;
  width: 100%;
  text-align: center;
  background: #ccc;
  padding-top: 0.2rem;
}
</style>
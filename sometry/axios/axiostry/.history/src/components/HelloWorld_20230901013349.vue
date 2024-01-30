<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank"
          rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank"
          rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a>
      </li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul> -->
  </div>
</template>

<script>
import axios from 'axios';
import pako from 'pako'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {

    }
  },
  mounted() {
    // axios.get('https://devapi.qweather.com/v7/weather/3d', { location: 101210101, key: "f2e4b227caa340bfacc70039e69829ad" })
    //   .then(function (response) {
    //     // 处理成功情况
    //     console.log(response);
    //     let data = response.data;
    //     // console.log(data);
    //   })
    //   .catch(function (error) {
    //     // 处理错误情况
    //     console.log(error);
    //   })
    //   .then(function () {
    //     console.log('finished')
    //     // 总是会执行
    //   });

    axios({
      method: 'get',
      url: 'https://devapi.qweather.com/v7/weather/3d',
      // location: 101210101,
      // key: "f2e4b227caa340bfacc70039e69829ad",
      responseType: 'arraybuffer', // 注意这个参数必须加，不然会出现下载好的文件打开是乱码情况,这个参数是为了告诉axios请求，请求的是二进制数据流
    }).then((res) => {
      const byteArray = new Uint8Array(res.data); // 切换数据编码为Uint8Array
      const pakoArr = pako.ungzip(byteArray); // 调用 pako 的方法解压数据
      const data = this.Utf8ArrayToStr(pakoArr);
    });
  },
  methods: {
    Utf8ArrayToStr(array) {
      let str = '';
      let i = 0;
      const len = array.length;
      let char1 = 0;
      let char2 = 0;
      let char3 = 0;
      let char4 = 0;
      while (i < len) {
        char1 = array[i += 1];
        // 当单个字节时, 最大值 '01111111', 最小值 '00000000' 右移四位 07, 00
        // 当两个字节时, 最大值 '11011111', 最小值 '11000000' 右移四位 13, 12
        // 当三个字节时, 最大值 '11101111', 最小值 '11100000' 右移四位 14, 14
        if (char1 >> 4 <= 7) {
          str += String.fromCharCode(char1);
        } else if (char1 >> 4 === 12 || char1 >> 4 === 13) {
          char2 = array[i += 1];
          str += String.fromCharCode(((char1 & 0x1F) << 6) | (char2 & 0x3F));
        } else if (char1 >> 4 === 14) {
          char2 = array[i += 1];
          char3 = array[i += 1];
          char4 = ((char1 & 0x0F) << 12) | ((char2 & 0x3F) << 6);
          str += String.fromCharCode(char4 | ((char3 & 0x3F) << 0));
        }
      }
      return str;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

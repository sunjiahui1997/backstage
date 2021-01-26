<template>
  <div>
    <div class="header">
      <div class="logo2"><img style="width:30px;height:30px" src="../assets/news-b.png" alt="" /></div>
      <div class="header-name">发布新闻</div>
      <div class="backHome" @click="backHome">返回</div>
    </div>
    <div class="line"></div>
    <div class="new">
      <div>
        <input
          id="title"
          type="text"
          v-model="newsItem.title"
          placeholder="请输入标题，5~60字"
        />
      </div>
      <div class="upload"></div>
      <div>
        <div class="nihaoa">
          <div class="layui-upload">
            <button type="button" class="layui-btn layui-btn-normal" id="test16">
              选择图片
            </button>
            <!-- <button type="button" class="layui-btn" id="test17"> -->
              <!-- 开始上传图片 -->
            <!-- </button> -->
            <fieldset
              class="layui-elem-field layui-field-title"
              style="margin-top: 30px;"
            >
              <!-- <legend>选完文件后不自动上传</legend> -->
            </fieldset>
            <!-- <div class="layui-upload"> -->
              <!-- <button -->
                <!-- type="button" -->
                <!-- class="layui-btn layui-btn-normal" -->
                <!-- id="test19" -->
              <!-- > -->
                <!-- 选择视频 -->
              <!-- </button> -->
              <!-- <button type="button" class="layui-btn" id="test18"> -->
                <!-- 开始上传视频 -->
              <!-- </button> -->
            <!-- </div> -->
          </div>
        </div>
        <mavon-editor
          id="nihao"
          v-model="html"
          @change="change"
        ></mavon-editor>
      </div>
      <div class="time">
        <div class="block">
          <span class="demonstration">请选择日期</span>
          <el-date-picker
            v-model="newsItem.time"
            type="date"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd hh:mm:ss"
            placeholder="选择日期"
          >
          </el-date-picker>
        </div>
      </div>
      <div class="h">
        <div class="btn2" id="test17" @click="subbmit">发布修改</div>
        <div class="btn2" @click="backHome">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      html: "",
      newsItem: "",
      elId: "",
      haha:''
    };
  },
  inject: ["reload"],
  props: {},
  filters: {
    ToText(HTML) {
      var input = HTML;
      return input
        .replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi, "")
        .replace(/<[^>]+?>/g, "")
        .replace(/\s+/g, " ")
        .replace(/ /g, " ")
        .replace(/>/g, " ");
    }
  },
  created() {
    console.log(this.$route.query);
    this.newsItem = this.$route.query;

    var mb = this.myBrowser();
    if ("IE" == mb) {
      // alert("我是 IE");
      this.liulan = "IE";
    }
    if ("FF" == mb) {
      // alert("我是 Firefox");
      this.liulan = "Firefox";
    }
    if ("Chrome" == mb) {
      // alert("我是 Chrome");
      this.liulan = "Chrome";
    }
    if ("Opera" == mb) {
      // alert("我是 Opera");
      this.liulan = "Opera";
    }
    if ("Safari" == mb) {
      // alert("我是 Safari");
      this.liulan = "Safari";
    }
    console.log(this.liulan);
    // this.elId = uuidv4();
    var n = this.newsItem.id;
    console.log(n);
    layui.use("upload", () => {
      var upload = layui.upload;
      var ins = upload.render({
        elem: "#test16",
        url: "http://122.114.162.87:8080/system/api/uploadph1",
        accept: "file", //改成您自己的上传接口
        data: {
          id: n,
          exType: this.liulan
        },
        auto: true,
        //,multiple: true
        bindAction: "#test17",
        done: res => {
          layer.msg("上传成功");
          this.$router.push("/b/news");
          window.location.reload();
          console.log(res);
        }
      });
      // var inss = upload.render({
        // elem: "#test19",
        // url: "http://122.114.162.87:8080/system/api/uploadvideo",
        // accept: "video", //改成您自己的上传接口
        // data: {
          // id: n,
          // exType: this.liulan
        // },
        // auto: false,
        // bindAction: "#test18",
        // done: res => {
          // layer.msg("上传成功");
          // this.$router.push("/b/news");
          // console.log(res);
        // }
      // });
    });
    // console.log();
    this.haha = this.ToText(this.newsItem.content)
    console.log(this.haha);
  },
  methods: {
    ToText(HTML) {
      var input = HTML;
      return input
        .replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi, "")
        .replace(/<[^>]+?>/g, "")
        .replace(/\s+/g, " ")
        .replace(/ /g, " ")
        .replace(/>/g, " ");
    },
    change(value, render) {
      this.html = render;
      // console.log(this.html);
    },
    backHome() {
      this.$router.push("/b/news");
      window.location.reload();
    },
    subbmit() {
      var x = this.newsItem.content;
      console.log(x);

      var y = this.newsItem.title;
      console.log(y);

      // console.log(this.value1);
      axios
        .post("http://122.114.162.87:8080/system/api/xwzxupdate", {
          id: this.newsItem.id,
          title: this.newsItem.title,
          content: this.newsItem.content,
          time: this.newsItem.time
          // type:this.newsItem.type
        })
        .then(response => {
          console.log(response); //成功
          alert("修改成功");
          this.$router.push("/b/news");
          window.location.reload();
        })
        .catch(function(error) {
          console.log(error); //失败
        });
    },
    myBrowser() {
      var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
      var isOpera = userAgent.indexOf("Opera") > -1;
      if (isOpera) {
        return "Opera";
      } //判断是否Opera浏览器
      if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
      } //判断是否Firefox浏览器
      if (userAgent.indexOf("Chrome") > -1) {
        return "Chrome";
      }
      if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
      } //判断是否Safari浏览器
      if (
        userAgent.indexOf("compatible") > -1 &&
        userAgent.indexOf("MSIE") > -1 &&
        !isOpera
      ) {
        return "IE";
      } //判断是否IE浏览器
    }
  }
};
</script>

<style scoped>
.form-group {
  /* display: flex; */
  margin-right: 70px;
}
.logo2 {
  position: relative;
  top: 35px;
  left: 40px;
}
.header-name {
  color: black;
  font-size: 30px;
  line-height: 100px;
  position: relative;
  left: 60px;
}
.posi {
  position: absolute;
  right: 500px;
  top: 230px;
}
.header {
  display: flex;
}
ul li {
  list-style: none;
}
.line {
  width: 99.5%;
  border: 1px solid rgb(201, 201, 201);
}
.backHome {
  width: 130px;
  height: 50px;
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  background-color: #76d7e6;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  margin: 25px 0px 0px 70%;
}
.nihaoa {
  margin: 30px 0px;
}
.new {
  /* position: absolute; */
  margin: 60px auto 0 auto;
left: 500px;
width: 80%;
top: 180px;
height: auto;
}
#title {
  margin-top: 10px;
  width: 550px;
  font-size: 27px;
  border: none;
  border-bottom: 1px black solid;
}
.upload {
  margin: 30px 20px 30px 0px;
}
.article {
  width: 1000px;
  font-size: 20px;
  height: 600px;
  padding: 5px 0px 0px 10px;
}
.btn2 {
  width: 100px;
  height: 60px;
  color: white;
  background-color: #76d7e6;
  margin-right: 30px;
  font-size: 18px;
  border-radius: 5px;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
}
.h {
  display: flex;
  position: relative;
  margin: 20px 0px 120px 0px;
}
.time {
  margin: 30px 0;
}
#nihao {
   width: 100%;
 position: relative;
 height: 500px;
}
</style>
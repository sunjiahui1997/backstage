<template>
  <div>
    <div class="tixing">时长限制(0.5-15分钟)</div>
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
          v-model="news.title"
          placeholder="请输入标题，5~60字"
        />
      </div>
      <div class="upload">
        <div class="layui-upload">
          <button type="button" class="layui-btn layui-btn-normal" id="test11">
            选择视频
          </button>
          <!-- <button type="button" class="layui-btn" id="test9">开始上传</button> -->
        </div>
      </div>
      <div>
        <!-- <textarea -->
        <!-- name="" -->
        <!-- id="" -->
        <!-- cols="30" -->
        <!-- rows="10" -->
        <!-- class="article" -->
        <!-- placeholder="请输入文章详情" -->
        <!-- ></textarea> -->
        <mavon-editor
          id="nihao"
          v-model="news.content"
          @change="change"
        ></mavon-editor>
        <div class="time">
          <div class="block">
            <span class="demonstration">请选择日期</span>
            <el-date-picker
              v-model="value1"
              type="date"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
            >
            </el-date-picker>
          </div>
        </div>
      </div>
      <div class="h">
        <div class="btn2" id="test12" @click="subbmit">发布为企业咨询</div>
        <div class="btn2" id="test13" @click="subbmit1">发布为行业动态</div>
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
      disabled: false,
      value1: "",
      news: {
        title: "",
        content: ""
      },
      liulan: "",
      dialogImageUrl: "",
      dialogVisible: false,
      html: "",
      disabled: false,
      value1: "",
      elId: ""
    };
  },
  // inject: ["reload"],
  props: {},
  // beforeCreate(){
    // window.location.reload()
  // },
  // activated(){
    // window.location.reload()
  // },
  // mounted(){
    // this.rel()
  // },
  // 
  created() {
    this.$emit("hdhead",[1,1])
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

    this.elId = uuidv4();
    var n = this.elId;
    layui.use("upload", () => {
      var upload = layui.upload;
      var ins = upload.render({
        elem: "#test11",
        accept: "video", //视频
        url: "http://122.114.162.87:8080/system/api/uploadvideo", //改成您
        data: {
          id: n,
          exType: this.liulan
        },
        auto: false,
        //,multiple: true
        bindAction: "#test12,#test13",
        done: function(res) {
          layer.msg("上传成功");
          console.log(res);
          window.location.reload()
        }
      });
    });
  },
  // mounted(){
    //  this.$router.go(0);
  // },
  methods: {
    change(value, render) {
      this.html = render;
      // console.log(this.html);
    },
    backHome() {
      this.$router.push("/b/news");
      window.location.reload()
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
    },
    subbmit() {
      console.log(this.value1);
      axios
        .post("http://122.114.162.87:8080/system/api/xwzxadd", {
          id: this.elId,
          title: this.news.title,
          content: this.html,
          time: this.value1,
          type: "0"
        })
        .then(response => {
          console.log(response); //成功
          alert("添加成功");
          this.$router.push("/b/news");
        })
        .catch(function(error) {
          console.log(error); //失败
        });
      this.reload();
    },
    subbmit1() {
      console.log(this.value1);
      axios
        .post("http://122.114.162.87:8080/system/api/xwzxadd", {
          id: this.elId,
          title: this.news.title,
          content: this.news.content,
          time: this.value1,
          type: "1"
        })
        .then(response => {
          console.log(response); //成功
          alert("添加成功");
          this.$router.push("/b/news");
        })
        .catch(function(error) {
          console.log(error); //失败
        });
      this.reload();
    },
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
.new {
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
  width: 200px;
  height: 60px;
  color: white;
  background-color: #76d7e6;
  margin-right: 30px;
  border-radius: 5px;
  font-size: 18px;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
}
.h {
  display: flex;
  position: relative;
  margin: 20px 0px 120px 0px;
  /* top: 300px; */
  /* left: 1100px; */
}
.time {
  margin: 30px 0;
}
.tixing {
  position: absolute;
  color: cadetblue;
  font-size: 14px;
  left: 11%;
  top: 326px;
}
#nihao {
   width: 100%;
 position: relative;
 height: 500px;
}
</style>
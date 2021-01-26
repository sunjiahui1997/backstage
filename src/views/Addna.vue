<template>
  <div>
    <div class="header">
      <div class="logo2">
        <img
          style="width:30px;height:30px"
          src="../assets/product-b.png"
          alt=""
        />
      </div>
      <div class="header-name">硅酸钠</div>
      <div class="backHome" @click="backHome">返回</div>
    </div>
    <div class="line"></div>
    <div class="product-mess">
      <div class="form-group" id="name1">
        <div class="form-title">产品名称</div>
        <input
          type="text"
          name="name"
          v-model="name"
          placeholder="请输入产品名称"
        />
      </div>
      <div class="form-group" id="">
        <div class="form-title">产品序号</div>
        <input
          type="text"
          name="id"
          v-model="xh"
          placeholder="请输入产品序号"
        />
      </div>
    </div>
    <div class="params1">参数配置</div>
    <div class="params">
      <div class="param-item">
        <div class="param-title">模数</div>
        <input v-model="par.ms" type="text" />
      </div>
      <div class="param-item">
        <div class="param-title">比重</div>
        <input v-model="par.bz" type="text" />
      </div>
      <div class="param-item">
        <div class="param-title">浓度</div>
        <input v-model="par.nd" type="text" />
      </div>
      <div class="param-item">
        <div class="param-title">说明</div>
        <input v-model="par.show" type="text" />
      </div>
      <div class="param-item">
        <div class="param-title">分子式</div>
        <input v-model="par.fzs" type="text" />
      </div>
      <div class="param-item">
        <div class="param-title">外观</div>
        <input v-model="par.wg" type="text" />
      </div>
    </div>

    <div class="img1">添加图片</div>
    <div class="h">
      <div type="button" class="layui-btn; btn2" id="test6" @click="subbmit()">
        发布
      </div>
      <div class="btn2" @click="backHome()">取消</div>
    </div>

    <div class="img3">
      <div class="layui-upload">
        <button type="button" class="layui-btn layui-btn-normal" id="test5">
          选择文件
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      name: "",
      xh: "",
      p: "",
      form1: [],
      elId: "",
      par: {
        ms: "",
        fzs: "",
        wg: "",
        show: "",
        nd: "",
        bz: ""
      },
      file: "",
      imgUrl: "",
      resData: {
        id: ""
      },
      liulan: "",
      disabled: false
    };
  },
  props: {},
  inject: ["reload"],
  created() {
    this.$emit("hdhead",[0,0,2])
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
    this.resData.id = this.elId;
    var n = this.elId;

    // this.upload2();

    // upload.render(this.upload2);
    layui.use("upload", () => {
      var upload = layui.upload;
      var ins = upload.render({
        elem: "#test5",
        url: "http://8.136.144.43:8080/system/api/upload", //改成您自己的上传接口
        data: {
          id: n,
          exType: this.liulan
        },
        auto: false,
        bindAction: "#test6",
        done: res => {
          layer.msg("上传成功");
          this.$router.push("/b/product");
          window.location.reload();
          console.log(res);
        }
      });
      // upload.render()
      // ins.upload()
    });
  },
  methods: {
    // shuaxin(){
      // window.location.reload();
    // },
    backHome() {
      this.$router.push("/b/product");
      // window.location.reload();
      this.$router.go(0)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    add() {
      if (this.p === "") {
        alert("请输入内容");
      } else {
        this.form1.push({ name: this.name2, canshu: this.p });
        this.p = "";
      }
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
      var m;
      var d;
      var h;
      var i;
      var s;
      const now = new Date();
      const year = now.getFullYear();
      var month = now.getMonth() + 1;
      if (month < 10) {
        m = "0" + month;
      } else {
        m = month;
      }
      const day = now.getDate();
      if (day < 10) {
        d = "0" + day;
      } else {
        d = day;
      }
      const hour = now.getHours();
      if (hour < 10) {
        h = "0" + hour;
      } else {
        h = hour;
      }
      const minutes = now.getMinutes();
      if (minutes < 10) {
        i = "0" + minutes;
      } else {
        i = minutes;
      }
      const second = now.getSeconds();
      if (second < 10) {
        s = "0" + second;
      } else {
        s = second;
      }
      const time = year + "-" + m + "-" + d + " " + h + ":" + i + ":" + s;

      // console.log(time);

      axios
        .post("http://122.114.162.87:8080/system/api/jscpzxadd", {
          id: this.elId,
          name: this.name,
          xh: this.xh,
          jgTime: time,
          fzs: this.par.fzs,
          wg: this.par.wg,
          show: this.par.show,
          ms: this.par.ms,
          nd: this.par.nd,
          bz: this.par.bz,
          type: "0"
        })
        .then(response => {
          console.log(response); //成功
          // this.$refs.upload.submit();
          alert("添加成功");
          this.$router.push("/b/product");
          window.location.reload();
        })
        .catch(function(error) {
          console.log(error); //失败
        });
      this.reload();
    }
    // upload2() {
    // layui.use("upload", () => {
    // var upload = layui.upload;
    // var ins = upload.render({
    // elem: "#test5",
    // url: "http://8.136.144.43:8080/system/api/upload", //改成您自己的上传接口
    // data: {
    // id: this.elId,
    // exType: this.liulan
    // },
    // auto: false,
    // ,multiple: true
    // bindAction: "#test6",
    // done: res => {
    // layer.msg("上传成功");
    // this.$router.push("/b/product");
    // window.location.reload();
    // console.log(res);
    // }
    // });
    // upload.render()
    // ins.upload()
    // });
    // }
  }
};
</script>

<style scoped>
.layui-field-title {
  width: 50% !important;
}
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
.product-mess {
  /* display: flex; */
  font-size: 22px;
  margin: 20px 0px 0px 40px;
}
.backHome {
  width: 130px;
  height: 50px;
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  border-radius: 5px;
  background-color: #76d7e6;
  color: white;
  cursor: pointer;
  margin: 25px 0px 0px 70%;
  /* position: relative; */
  /* right: -1300px; */
  /* top: 25px; */
}
input {
  width: 270px;
  height: 40px;
  border: 1px solid #cccccc;
  border-radius: 2px;
  padding-left: 10px;
  outline: none;
  font-size: 18px;
  margin-top: 10px;
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #999999;
}
.form-title {
  margin-top: 20px;
}
.params1 {
  font-size: 22px;
  margin: 40px 0px 20px 40px;
}
.module {
  width: 100px;
  height: 70px;
}
#select1 {
  text-align: center;
  width: 130px;
  height: 50px;
  font-size: 18px;
  padding-left: 7px;
  margin-left: 40px;
  border: 1px solid #cccccc;
  border-radius: 2px;
  outline: none;
}
.select2 {
  text-align: center;
  font-size: 18px;
}
#param {
  border: none;
  border-bottom: 1px solid #cccccc;
  text-align: center;
  margin: 0 30px;
  width: 450px;
}
img {
  width: 40px;
  height: 40px;
  margin-left: 19px;
  cursor: pointer;
}
.img1 {
  font-size: 20px;
  margin: 100px 0px 0px 45px;
}
.btn2 {
  width: 100px;
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
  /* position: relative; */
  margin: 130px 0px 0px 70%;
}
.img3 {
  margin: -150px 0px 0px 100px;
}
.param-item {
  display: flex;
}
.param-title {
  line-height: 30px;
  margin: 20px 20px 0 40px;
}
</style>
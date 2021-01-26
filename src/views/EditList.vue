<template>
  <div>
    <div class="header">
      <div class="logo2"></div>
      <div class="header-name">{{ canshu1.lx | cate }}</div>
      <div class="backHome" @click="backHome">返回</div>
    </div>
    <div class="line"></div>
    <div class="product-mess">
      <div class="form-group" id="name1">
        <div class="form-title">产品名称</div>
        <input
          type="text"
          name="name"
          v-model="canshu1.name"
          placeholder="请输入产品名称"
        />
      </div>
      <div class="form-group" id="name1">
        <div class="form-title">产品序号</div>
        <input
          type="text"
          name="id"
          v-model="canshu1.xh"
          placeholder="请输入产品序号"
        />
      </div>
    </div>
    <div class="params1">参数配置</div>
    <div class="params">
      <div class="param-item">
        <div class="param-title">模数</div>
        <input v-model="canshu1.ms" type="text" />
      </div>
      <div class="param-item">
        <div class="param-title">比重</div>
        <input v-model="canshu1.bz" type="text" />
      </div>
      <div class="param-item">
        <div class="param-title">浓度</div>
        <input v-model="canshu1.nd" type="text" />
      </div>
      <div class="param-item">
        <div class="param-title">说明</div>
        <input v-model="canshu1.show" type="text" />
      </div>
      <div class="param-item">
        <div class="param-title">分子式</div>
        <input v-model="canshu1.fzs" type="text" />
      </div>
      <div class="param-item">
        <div class="param-title">外观</div>
        <input v-model="canshu1.wg" type="text" />
      </div>
    </div>
    <div class="img1">修改图片</div>
      <!-- <div style="margin-left:45px">(修改图片需要重新选择文件，点击开始上传。如不修改图片，只修改参数，点击下方发布修改按钮即可)</div> -->
    <div class="xiugai">
      <!-- <fieldset -->
        <!-- class="layui-elem-field layui-field-title" -->
        <!-- style="margin-top: 30px;" -->
      <!-- > -->
        <!-- <legend> -->
<!--           -->
        <!-- </legend> -->
      <!-- </fieldset> -->
      <div class="layui-upload">
        <button type="button" class="layui-btn layui-btn-normal" id="test14">
          选择文件
        </button>
        <button type="button" class="layui-btn" id="test15">开始上传</button>
      </div>
      <!-- </el-dialog> -->
    </div>
    <div class="h">
      <div class="btn2" @click="subbmit3">发布修改</div>
      <div class="btn2" @click="backHome">取消</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        name: "",
        id: ""
      },
      name2: "",
      p: "",
      form1: [],
      // id: this.$route.params.id
      canshu1: "",
      par: {
        ms: "",
        fzs: "",
        wg: "",
        show: "",
        nd: "",
        bz: ""
      },
      jgTime: ""
    };
  },
  props: {},
  created() {
    this.$emit("hdhead",[0,0,2])
    console.log(this.$route.query);
    this.canshu1 = this.$route.query;

    // console.log(canshu1.jgTime);
    // console.log(canshu1.lx);

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
    var n = this.canshu1.id;
    console.log(n);
    layui.use("upload", () => {
      var upload = layui.upload;
      var ins = upload.render({
        elem: "#test14",
        url: "http://122.114.162.87:8080/system/api/upload", //改成您自己的上传接口
        data: {
          id: n,
          exType: this.liulan
        },
        auto: true,
        //,multiple: true
        bindAction: "#test15",
        done: function(res) {
          layer.msg("上传成功");
          window.location.reload();
          console.log(res);
        }
      });
    });
  },
  methods: {
    backHome() {
      this.$router.push("/b/product");
      window.location.reload();
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
    handleClick(row) {
      console.log(row);
    },
    subbmit3() {
      var a = this.canshu1.name;
      if (a == null) {
        a = "";
      }
      var b = this.canshu1.xh;
      if (b == null) {
        b = "";
      }
      var c = this.canshu1.fzs;
      if (c == null) {
        c = "";
      }
      var d = this.canshu1.wg;
      if (d == null) {
        d = "";
      }
      var e = this.canshu1.show;
      if (e == null) {
        e = "";
      }
      var f = this.canshu1.ms;
      if (f == null) {
        f = "";
      }
      var g = this.canshu1.nd;
      if (g == null) {
        g = "";
      }
      var h = this.canshu1.bz;
      if (h == null) {
        h = "";
      }
      var i = this.canshu1.jgTime;
      if (i == null) {
        i = "";
      }

      axios
        .post("http://122.114.162.87:8080/system/api/jscpzxupdate", {
          id: this.canshu1.id,
          name: a,
          xh: b,
          fzs: c,
          wg: d,
          show: e,
          ms: f,
          nd: g,
          bz: h,
          // lx: this.canshu1.lx,
          jgTime: i,
          type: this.canshu1.lx
        })
        .then(response => {
          console.log(response); //成功
          alert("添加成功");
          this.$router.push("/b/product");
          window.location.reload()
        })
        .catch(function(error) {
          console.log(error); //失败
        });
    }
  },
  filters: {
    cate(val) {
      if (val === "0") {
        val = "硅酸钠";
      } else if (val === "1") {
        val = "硅酸钾";
      } else if (val === "2") {
        val = "硅酸钾钠";
      }
      return val;
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
.product-mess {
   /* display: flex; */
 font-size: 22px;
 margin:  20px 0px 0px 40px;
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
.xiugai {
  margin: 20px 0px 0px 100px;
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
  font-size: 20px;
  /* position: relative; */
  margin: 40px 0px 0px 45px;
}
.params {
  position: relative;
  top: 60px;
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
.param-item {
  display: flex;
}
.param-title {
  line-height: 30px;
  margin: 20px 20px 0 40px;
}
.h {
   display: flex;
 /* position: relative; */
 margin: 44px 0px 0px 70%;
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
.img3 {
  position: relative;
  top: 50px;
  left: 100px;
}
</style>
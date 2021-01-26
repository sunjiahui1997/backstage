<template>
  <div>
    <div class="black" v-if="black"></div>
    <div class="header">
      <div class="logo2">
        <img class="img1" src="../assets/news-b.png" alt="" />
      </div>
      <div class="header-name">新闻中心</div>
    </div>
    <div class="line"></div>
    <div class="product-mess">
      <div class="form-group" id="name1">
        <div class="form-title">新闻标题 :</div>
        <el-input type="text" name="name" v-model="form.name"></el-input>
      </div>
      <div class="form-group">
        <div class="form-title">查询时间 :</div>
        <div class="time1">
          <el-date-picker
            v-model="form.time1"
            type="date"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
          >
          </el-date-picker>
        </div>
        <div id="line2"></div>
        <div class="time2">
          <el-date-picker
            v-model="form.time2"
            type="date"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
          >
          </el-date-picker>
        </div>
      </div>
    </div>
    <div class="btn">
      <div class="btn1" @click="search(1)">查询</div>
      <div class="dropdown">
        <div class="item3" @click="showDrop">发布新闻</div>
        <div id="item2" v-if="show">
          <div class="item1">
            <router-link to="/b/addnew">图文</router-link>
          </div>
          <div class="item1">
            <router-link to="/b/addvideo">视频</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="table1">
      <table border="1">
        <thead>
          <tr id="thead">
            <th id="img6">图片</th>
            <th id="name">新闻标题</th>
            <th id="category">上传时间</th>
            <th id="op">操作</th>
          </tr>
        </thead>
        <tr v-for="(item, index) in list" :key="index">
          <td name="item">
            <img v-if="item.ip1 != null" class="img00" :src="item.ip1" alt="" />
            <video
              v-else-if="item.ip1 == null"
              class="img00"
              width="320"
              height="240"
              :src="item.videoip"
              controls
            ></video>
          </td>
          <td>{{ item.title }}</td>
          <td>{{ item.time | ellipsis }}</td>
          <td>
            <button class="btnn2" @click="edit(item)">编辑</button
            ><button class="btnn2" @click="delate(item.id)">删除</button>
          </td>
        </tr>
        <tbody></tbody>
      </table>
      <div class="pageNo" v-if="total3">
        <div class="block">
          <el-pagination
            layout="prev, pager, next"
            :total="total"
            @current-change="handleCurrentChange2"
          >
          </el-pagination>
        </div>
      </div>
      <div class="pageNo" v-if="total2">
        <div class="block">
          <el-pagination
            layout="prev, pager, next"
            :page-size="10"
            :total="total0"
            @current-change="handleCurrentChange"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import { EventBus } from "../event-bus.js";

export default {
  data() {
    return {
      form: {
        name: "",
        time1: "",
        time2: ""
      },
      show: false,
      black: false,
      list: [],
      pageIndex: 1,
      pageSize: 10,
      total: 0,
      total0: 0,
      total3: true,
      total2: false,
      z: true,
      isImg: [],
      data: 1,
      data2: false
    };
  },
  created() {
    this.$emit("hdhead", [1, 1]);
    //  console.log(123);
  },
  inject: ["reload"],
  methods: {
    additem() {
      this.$router.push("/addpro");
    },
    showDrop() {
      // document.getElementById('item2').style.visibility = 'visible'
      this.show = !this.show;
      this.black = !this.black;
    },
    getList(val) {
      axios
        .post("http://122.114.162.87:8080/system/api/xwzxList", {
          pageIndex: val,
          pageSize: this.pageSize
        })
        .then(res => {
          // console.log(res);
          this.total = res.data.result.total;
          this.list = res.data.result.rowsList;
          // console.log(this.list);
          // console.log(res.data.result.rowsList);
          var nn = this.list;
          // console.log(nn);
          // for (let x = 0; x < nn.length; x++) {
          // if (nn[x].ip1 === "" || nn[x].ip1 === null) {
          // this.isImg[x]=false;
          // }else{
          // this.isImg[x]=true;
          // }
          // }
          // console.log(this.isImg);

          // if (this.list.ip1 === "" || this.list.ip1 === null) {
          // this.z = false;
          // }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    handleCurrentChange2(val) {
      this.getList(val);
    },
    handleCurrentChange(val) {
      this.search(val);
    },
    delate(iid) {
      var x;
      var r = confirm("确认删除？");
      if (r) {
        axios.post(
          // `http://122.114.162.87:8080/system/api/xwzxdelete?id=${iid}`
          "http://122.114.162.87:8080/system/api/xwzxdelete?id=",
          {
            id: iid
          }
        );
        this.reload();
      } else {
      }
    },
    search(val) {
      // console.log(this.form.time1);
      this.total3 = false;
      this.total2 = true;
      axios
        .post("http://122.114.162.87:8080/system/api/xwzxList", {
          pageIndex: val,
          pageSize: this.pageSize,
          title: this.form.name,
          startTime: this.form.time1,
          endTime: this.form.time2
        })
        .then(res => {
          // console.log(res.data.result.total);
          this.total0 = res.data.result.total;
          this.list = res.data.result.rowsList;
          // console.log(res.data.result.rowsList);
          // this.pro.push(...res.data.result.rowsList);
          // console.log(this.pro);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    edit(item) {
      // console.log(item);
      if (item.list.ip1 === "" || item.list.ip1 === null) {
        this.$router.push({
          path: "/b/editvideo",
          query: {
            id: item.id,
            title: item.title,
            content: item.content,
            time: item.time
          }
        });
      } else {
        this.$router.push({
          path: "/b/editnews",
          query: {
            id: item.id,
            title: item.title,
            content: item.content,
            time: item.time
          }
        });
      }
      // this.$router.push({
      // path: "/b/editnews",
      // query: {
      // id: item.id,
      // title: item.title,
      // content: item.content,
      // time: item.time
      // }
      // });
    }
    // zz() {
    // if (this.list.ip1 === "" || this.list.ip1 === null) {
    // this.z = false;
    // }
    // }
  },
  filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 1) {
        return value.slice(0, 10);
      }
      return value;
    }
  },
  mounted() {
    this.getList(1);
    // console.log(this.list);
  }
};
</script>

<style scoped>
.form-group {
  display: flex;
  margin-right: 70px;
}
.logo2 {
  position: relative;
  top: 35px;
  left: 40px;
}
.pageNo {
  position: relative;
  margin: 30px 0 0px 0px;
}
.header-name {
  color: black;
  font-size: 30px;
  line-height: 100px;
  position: relative;
  left: 60px;
}
.header {
  display: flex;
}
.line {
  width: 99.5%;
  border: 1px solid rgb(201, 201, 201);
}
.product-mess {
  display: flex;
  font-size: 22px;
  margin: 40px 0px 0px 40px;
}
input {
  height: 50px;
  margin-left: 20px;
}
.form-title {
  font-size: 20px;
  line-height: 30px;
  white-space: nowrap;
  margin-right: 10px;
}
.btn {
  display: flex;
  position: relative;
  top: 70px;
  /* right: -50px; */
}
.img00 {
  width: 100px;
  height: 100px;
}
.btn1 {
  width: 150px;
  height: 50px;
  border-radius: 5px;

  background: #76d7e6;
  text-align: center;
  color: white;
  cursor: pointer;
  line-height: 50px;
  margin: 0 40px;
  font-size: 18px;
  position: relative;
  /* top: 80px; */
}
/* .time1 { */
/* position: relative; */
/* left: 10px; */
/* top: 10px; */
/* } */
/* .time2 { */
/* position: relative; */
/* top: 10px; */
/* } */
.table1 {
  margin: 150px 0px 0px 40px;
}
.dropdown {
  display: flex;
  width: 200px;
  flex-wrap: wrap;
}
#line2 {
  width: 17px;
  /* border: none; */
  border-bottom: 1px solid black;
  /* padding-bottom: 20px; */
  /* margin: 2px 10px 30px 20px; */
  margin: 0px 5px 15px 5px;
}
.item1 {
  background-color: rgb(242, 242, 242);
  color: black;
  width: 150px;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
  border-radius: 5px;
}
.dropdown {
  position: absolute;
  left: 250px;
  z-index: 1000;
  cursor: pointer;
}
.black {
  position: absolute;
  background-color: black;
  opacity: 0.6;
  width: 90%;
  height: 1000px;
  z-index: 900;
  /* visibility: hidden; */
}
.item3 {
  background: #76d7e6;
  color: white;
  width: 150px;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
  border-radius: 5px;
}
td {
  border: 0px;
}
table {
  border-collapse: collapse;
}
td,
th,
tr {
  position: relative;
  padding: 9px 15px;
  min-height: 20px;
  line-height: 20px;
  font-size: 16px;
  border: 1px solid #e2e2e2;
}
th {
  width: 200px;
  height: 50px;
  font-size: 20px;
}
#name {
  width: 500px;
}
.img1 {
  width: 30px;
  height: 30px;
}
</style>
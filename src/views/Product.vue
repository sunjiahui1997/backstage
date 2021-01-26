<template>
  <div>
    <div class="black" v-if="black"></div>
    <div class="header">
      <div class="logo2"><img class="img1" src="../assets/product-b.png" alt="" /></div>
      <div class="header-name">产品中心</div>
    </div>
    <div class="line"></div>
    <div class="product-mess">
      <div class="form-group" id="name1">
        <div class="form-title">产品名称 :</div>
        <el-input type="text" class="c" style="width:250px" name="name" v-model="form.name"></el-input>
      </div>
      <div class="form-group" id="name1">
        <div class="form-title">产品序号 :</div>
        <el-input type="text" name="id" v-model="form.id"></el-input>
      </div>
      <div class="form-group" id="name1">
        <div class="form-title">产品分类 :</div>
        <el-select id="select1" v-model="form.sele">
          <el-option value="" label="请选择产品分类"></el-option>
          <el-option value="0" label="硅酸钠"></el-option>
          <el-option value="1" label="硅酸钾"></el-option>
          <el-option value="2" label="硅酸钾钠"></el-option>
        </el-select>
      </div>
    </div>
    <div class="btn">
      <div class="btn1" @click="search(1)">查询</div>
      <div class="dropdown">
        <div class="item3" @click="showDrop">新增产品</div>
        <div id="item2" v-if="show">
          <div class="item1">
            <router-link to="/b/addna">硅酸钠</router-link>
          </div>
          <div class="item1">
            <router-link :to="'/b/addk'">硅酸钾</router-link>
          </div>
          <div class="item1">
            <router-link :to="'/b/addkna'">硅酸钾钠</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="table1">
      <table border="1">
        <thead>
          <tr id="thead">
            <th id="img6">图片</th>
            <th id="name">产品名称</th>
            <th id="category">所属分类</th>
            <th id="xh">序号</th>
            <th id="time">上传时间</th>
            <th id="op">操作</th>
          </tr>
        </thead>
        <tr v-for="(item, index) in list" :key="index">
          <td><img class="img00" :src="item.ip" alt="" /></td>
          <td>{{ item.name }}</td>
          <td>{{ item.lx | cate }}</td>
          <td>{{ item.xh }}</td>
          <td>{{ item.uploadTime | ellipsis }}</td>
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
            :page-size ="10"
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
export default {
  data() {
    return {
      form: {
        name: "",
        id: "",
        sele: ""
      },
      show: false,
      black: false,
      pro: [],
      list: [],
      pageIndex: 1,
      pageSize: 10,
      total: 0,
      total0: 0,
      total3: true,
      total2: false
    };
  },
  inject: ["reload"],
  methods: {
    additem() {
      this.$router.push("/addpro");
    },
    showDrop() {
      // window.location.reload()
      this.show = !this.show;
      this.black = !this.black;
    },
    edit(item) {
      // console.log(item);
      this.$router.push({
        path: "/b/editlist",
        query: {
          id: item.id,
          lx: item.lx,
          xh: item.xh,
          name: item.name,
          // type:item.lx,
          jgTime:item.jgTime,
          ip: item.ip,
          bz: item.bz,
          fzs: item.fzs,
          ms: item.ms,
          nd: item.nd,
          show: item.show,
          wg: item.wg
        }
      });
    },
    delate(iid) {
      var x;
      var r = confirm("确认删除？");
      if (r) {
        axios.post(
          // `http://122.114.162.87:8080/system/api/jscpzxdelete?id=${iid}`
          "http://122.114.162.87:8080/system/api/jscpzxdelete",
          {
            id: iid
          }
        );
        this.reload();
      } else {
      }
    },
    handleCurrentChange2(val) {
      this.getList(val);
    },
    handleCurrentChange(val) {
      this.search(val);
    },
    search(val) {
      this.total3 = false;
      this.total2 = true;
      axios
        .post("http://122.114.162.87:8080/system/api/jscpzx", {
          pageIndex: val,
          pageSize: this.pageSize,
          type: this.form.sele,
          name: this.form.name,
          xh: this.form.id
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
    getList(val) {
      this.total3 = true;
      this.total2 = false;
      axios
        .post("http://122.114.162.87:8080/system/api/jscpzx", {
          pageIndex: val,
          pageSize: this.pageSize
        })
        .then(res => {
          // console.log(res.data.result.total);
          this.total = res.data.result.total;
          this.list = res.data.result.rowsList;
          // console.log(res.data.result.rowsList);
          // this.pro.push(...res.data.result.rowsList);
          // console.log(this.pro);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted() {
    this.getList(1);
  },
  created(){
    this.$emit("hdhead",[0,0,2])
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
    },
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 1) {
        return value.slice(0, 10);
      }
      return value;
    }
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
.header-name {
  color: black;
  font-size: 30px;
  line-height: 100px;
  position: relative;
  left: 60px;
}
.header {
  width: 100%;
  display: flex;
}
.line {
  width: 99.5%;
  border: 1px solid rgb(201, 201, 201);
}
.product-mess {
  display: flex;
  font-size: 22px;
  /* position: relative; */
  /* top: 40px; */
  /* left: 40px; */
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
#select1 {
  width: 200px;
  height: 30px;
  font-size: 18px;
  margin: 10px 0px 0px 20px;
}
.btn {
  display: flex;
  position: relative;
  top: 70px;
  /* margin: 70x 50px 0px 0px !important; */
}
.btn1 {
  width: 150px;
  height: 50px;
  border-radius: 5px;
  background: #76d7e6;
  text-align: center;
  line-height: 50px;
  margin: 0 40px;
  font-size: 18px;
  color: white;
  cursor: pointer;
  position: relative;
  /* top: 80px; */
}
.table1 {
  margin: 150px 0px 0px 40px;
}
.dropdown {
  display: flex;
  width: 200px;
  flex-wrap: wrap;
}
.img00 {
  width: 100px;
  height: 100px;
}
.item1 {
  background-color: rgb(242, 242, 242);
  color: black;
  width: 150px;
  border-radius: 5px;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
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
  border-radius: 5px;
background: #76d7e6;
  color: white;
  width: 150px;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
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
  font-size: 14px;
  border: 1px solid #e2e2e2;
}
th {
  width: 180px;
  height: 50px;
  font-size: 18px;
}

a {
  text-decoration: none;
}
/*正常的未被访问过的链接*/
a:link {
  text-decoration: none;
}
/*已经访问过的链接*/
a:visited {
  text-decoration: none;
}
/*鼠标划过(停留)的链接*/
a:hover {
  text-decoration: none;
}
/* 正在点击的链接*/
a:active {
  text-decoration: none;
}
img {
  width: 30px;
  height: 30px;
}
.pageNo {
  margin: 20px 0px 0px 0px;
}
.img1{
  width: 30px;
  height: 30px;
}
.c:focus{
  border-color: #292D30 !important;
}
.c.el-input.el-input--small:focus{
   border-color: #292D30 !important;
}
.el-input__inner:focus{
  border-color: #292D30 !important;
}
input{
   border-color: #292D30 !important;
   outline: none;
}
</style>
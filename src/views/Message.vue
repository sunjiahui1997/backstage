<template>
  <div>
    <div class="black" v-if="black"></div>
    <div class="header">
      <div class="logo2"><img class="img1" src="../assets/comment-b.png" alt="" /></div>
      <div class="header-name">留言中心</div>
    </div>
    <div class="line"></div>
    <div class="table1">
      <table border="1">
        <thead>
          <tr id="thead">
            <th id="img6">姓名</th>
            <th id="name">电话</th>
            <th id="category">邮箱</th>
            <th id="op">留言信息</th>
            <th id="del">操作</th>
          </tr>
        </thead>
        <tr v-for="(item, index) in list" :key="index">
          <td>{{ item.name | hava }}</td>
          <td>{{ item.tel | hava }}</td>
          <td>{{ item.email | hava }}</td>
          <td>{{ item.message | hava }}</td>
          <td><button class="btnn2" @click="del(item.id)">删除</button></td>
        </tr>
        <tbody></tbody>
      </table>
      <div class="pageNo">
        <div class="block">
          <el-pagination
            layout="prev, pager, next"
            :page-size ="10"
            :total="total"
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
        time1: "",
        time2: ""
      },
      show: false,
      black: false,
      list: [],
      pageIndex: 1,
      pageSize: 10,
      total: 0
    };
  },
  filters:{
    hava(val){
      var exp = val
        if(!exp && typeof exp != "undefined" && exp != 0){
            return '暂无'
        }else if (exp === '') {
          return '暂无'
        }else{
            return val
        }
    }
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
        .post("http://8.136.144.43:6064/hgcweb/api/zxlyList", {
          pageIndex: val,
          pageSize: this.pageSize
        })
        .then(res => {
          console.log(res);
          this.total = res.data.result.total;
          this.list = res.data.result.jxzxlyRows;
          // console.log(res.data.result.jxzxlyRows);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    del(iid) {
      var x;
      var r = confirm("确认删除？");
      if (r) {
        axios.post(
          // `http://122.114.162.87:8080/system/api/zxlydelete?id=${iid}`
          "http://122.114.162.87:8080/system/api/zxlydelete",
          {
            id: iid
          }
        );
        this.reload();
      } else {
      }
    },
    handleCurrentChange(val) {
      this.getList(val);
    }
  },
  mounted() {
    this.getList(1);
    
  },
  created(){
    this.$emit("hdhead",[2,2])
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
  margin: 30px 0 30px 0px;
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
input {
  height: 50px;
  margin-left: 20px;
}
.form-title {
  line-height: 50px;
}
.btn {
  display: flex;
  position: relative;
  top: 70px;
  right: -50px;
}
.table1 {
  margin: 80px 0px 0px 40px;
}
.dropdown {
  display: flex;
  width: 200px;
  flex-wrap: wrap;
}
#line2 {
  width: 25px;
  /* border: none; */
  border-bottom: 1px solid black;
  /* padding-bottom: 20px; */
  margin: 0 10px 30px 20px;
}
.item1 {
  background-color: rgb(242, 242, 242);
  color: black;
  width: 150px;
  text-align: center;
  line-height: 50px;
  font-size: 23px;
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
  width: 1720px;
  height: 1000px;
  z-index: 900;
  /* visibility: hidden; */
}
.item3 {
  background-color: rgb(148, 148, 148);
  color: black;
  width: 150px;
  text-align: center;
  line-height: 50px;
  font-size: 23px;
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
  width: 350px;
  height: 50px;
  font-size: 20px;
}
#img6 {
  width: 150px;
}
#name {
  width: 150px;
}
#category {
  width: 150px;
}
#op {
  width: 400px;
}
#del {
  width: 100px;
}
.img1{
  width: 30px;
  height: 30px;
}
</style>
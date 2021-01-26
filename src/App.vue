<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>



export default {
  name: "app",
  created(){
    // if (this.$router.path !== "/backstage") {
  // this.$router.replace("/backstage");
// }

  }
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}
.btnn2{
  width: 40px;
  height: 25px;
  background-color: #4489b0; ;
  color: white;
  cursor: pointer;
  border: none;
  margin: 0px 5px 0 20px;
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
</style>
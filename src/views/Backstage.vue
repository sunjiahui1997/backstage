<template>
  <div id="app">
    <div class="tabbarx">
      <div class="logo" @click="toMain">宏盛科技</div>
      <div class="row">|</div>
      <div class="toMain">
        <a class="back" href="http://www.hzhsxclkj.com/#/home/homeitem"
          >进入网站</a
        >
      </div>
    </div>
    <div class="sidebar">
      <div
        class="side-item"
        :class="{ active: 0 === currentIndex }"
        @click="
          btnclick(0);
          topro();
        "
      >
       
          <div class="logo1"><img src="../assets/product.png" alt="" /></div>
          <div class="word">
            产品中心
          </div>
       
      </div>
      <div
        class="side-item"
        :class="{ active: 1 === currentIndex }"
        @click="
          btnclick(1);
          tonew();
        "
      >
        <div class="logo1"><img src="../assets/news.png" alt="" /></div>
        <div class="word">
          新闻中心
        </div>
      </div>
      <div
        class="side-item"
        :class="{ active: 2 === currentIndex }"
        @click="
          btnclick(2);
          tomess();
        "
      >
        <div class="logo1"><img src="../assets/comment.png" alt="" /></div>
        <div class="word">
          留言中心
        </div>
      </div>
    </div>
    <router-view class="main" v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
import { EventBus } from "../event-bus";

export default {
  name: "app",
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      currentIndex: 0,
      isRouterAlive: true
    };
  },
  methods: {
    toMain() {},
    btnclick(index) {
      // window.location.reload()
      this.currentIndex = index;
    },
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    },
    topro() {
      this.$router.push("/b/product");
      // window.location.reload()
    },
    tonew() {
      this.$router.push("/b/news");
      // window.location.reload()
    },
    tomess() {
      this.$router.push("/b/message");
      // window.location.reload()
    }
  },
  mounted() {
    EventBus.$on("aMsg", msg => {
      this.currentIndex = msg;
    });
  }
};
</script>

<style>
.tabbarx {
  width: 100%;
  height: 80px;
  background-color: #4489b0;
  position: relative;
  display: flex;
}
body {
  margin: 0px;
  padding: 0px;
}
.sidebar {
  position: relative;
  width: 10%;
  left: 0px;
  height: 1200px;
  background-color: rgb(242, 242, 242);
}
.side-item {
  width: 100%;
  height: 80px;
  cursor: pointer;
  display: flex;
  line-height: 60px;
  position: relative;
}
.logo {
  color: white;
  font-size: 30px;
  line-height: 80px;
  position: absolute;
  left: 40px;
}
.row {
  color: rgb(121, 121, 121);
  font-size: 30px;
  position: relative;
  line-height: 80px;
  left: 253px;
}
.toMain {
  position: relative;
  line-height: 80px;
  text-decoration: none;
  font-size: 30px;
  left: 280px;
  color: white;
}
.back {
  text-decoration: none;
  color: white;
}
.logo1 {
  /* width: 30px; */
  /* height: 30px; */
  /* border: 1px white solid; */
  position: relative;
  top: 1px;
  left: 20%;
}
.word {
  position: relative;
  right: -50px;
}
.active {
  color: white;
  background-color: rgb(174, 174, 174);
}
.main {
  position: absolute;
  width: 90%;
  left: 10%;
  top: 80px;
}
.layui-table {
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
</style>
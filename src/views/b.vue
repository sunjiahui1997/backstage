<template>
  <div class="all">
    <div class="side-bar">
      <div class="img1">
        <img class="back-logo" src="../assets/back-logo.png" alt="" />
      </div>
      <div class="back-wz">宏盛科技后台管理</div>
      <div
        class="side-item"
        :class="0 === currentIndex ? 'active' : 'box2'"
        @click="
          btnclick(0);
          topro();
        "
      >
        <div class="logo1" v-if="0 == pp">
          <!-- <img src="../assets/product-b.png" alt="" /> -->
          <img src="../assets/product1.png" alt="" />
          <div class="line1"></div>
        </div>
        <div class="logo1" v-else>
          <img src="../assets/product-b.png" alt="" />
        </div>
        <div class="word">
          产品中心
        </div>
      </div>
      <div
        class="side-item"
        :class="1 === currentIndex ? 'active' : 'box2'"
        @click="
          btnclick(1);
          tonew();
        "
      >
        <div class="logo1" v-if="1 == nn">
          <img src="../assets/news1.png" alt="" />
          <div class="line1"></div>
        </div>
        <div class="logo1" v-else>
          <img src="../assets/news-b.png" alt="" />
        </div>
        <div class="word">
          新闻中心
        </div>
      </div>
      <div
        class="side-item"
        :class="2 === currentIndex ? 'active' : 'box2'"
        @click="
          btnclick(2);
          tomess();
        "
      >
        <div class="logo1" v-if="2 == mm">
          <img src="../assets/comment1.png" alt="" />
          <div class="line1"></div>
        </div>
        <div class="logo1" v-else>
          <img src="../assets/comment-b.png" alt="" />
        </div>
        <div class="word">
          留言中心
        </div>
      </div>
    </div>
    <div class="header-b">
      <div class="gly">您好，管理员</div>
      <!-- <router-view class="main" ></router-view> -->
      <router-view
        class="main"
        v-if="isRouterAlive"
        @hdhead="hdhead"
      ></router-view>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../event-bus";

export default {
  // inject:['reload'],
  // inject: ["reloadRouter"],
  name: "app",
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      currentIndex: 0,
      isRouterAlive: true,
      nn: 0,
      pp: 3,
      mm: 0,
      cz: "",
      hh:''
    };
  },
  methods: {
    hdhead(num) {
      this.currentIndex = num[0];
      // this.nn = num[1];
      this.nn = num[1]
      this.mm = num[1]
      this.pp = num[1]
      this.hh = num[2]
    },
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
      this.mm = 0;
      this.nn = 0;
      this.pp = 0;
      // this.reload();
      // this.reloadRouter();
      // window.location.reload()
    },
    tonew() {
      this.$router.push("/b/news");
      this.mm = 1;
      this.pp = 1;
      this.nn = 1;
      // this.reload();
      // this.reloadRouter();
      // window.location.reload()
      // window.history.go(0)
    },
    tomess() {
      this.$router.push("/b/message");
      this.pp = 2;
      this.nn = 2;
      this.mm = 2;
      // this.reloadRouter();
      // this.reload();
      // window.history.go(0)
      // window.location.reload()
    }
  },
  mounted() {
  },
  creater(){
  }
};
</script>

<style scoped>
.header-b {
  width: 90%;
  height: 80px;
  background: #ffffff;
  box-shadow: 4px 4px 10px 0px rgba(3, 0, 0, 0.1);
}
.logo1 {
  width: 30px;
  height: 30px;
}
.img1 {
  width: 100%;
}
body {
  padding: 0px;
  margin: 0px;
}
.all {
  width: 100%;
  display: flex;
  margin: 0px;
  padding: 0px;
}
.side-bar {
  width: 10%;
  height: 1200px;
  background: #292d30;
}
.back-logo {
  width: 118px;
  height: 118px;
  display: block;
  margin: 50px auto 50px auto;
  /* margin: 50px 81px 41px 81px; */
}
.back-wz {
  text-align: center;
  font-size: 20px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  font-style: italic;
  color: #76d7e6;
  margin-bottom: 40px;
}
img {
  width: 100%;
  height: 100%;
}
.side-item {
  display: flex;
  position: relative;
  cursor: pointer;
  height: 80px;
  justify-content: center;
  align-items: center;
}

.word {
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  /* color: #93A0A9;  */
  margin-left: 14px;
}

.active {
  color: rgba(254, 255, 255, 1) !important;
  background-color: rgba(0, 0, 0, 0.3);
}
.box2 {
  color: #93a0a9;
}
.gly {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #93a0a9;
  line-height: 80px;
  margin-left: 87%;
}
.line1 {
  /* position: absolute; */
  width: 10px;
  height: 80px;
  position: absolute;
  left: 0px;
  top: 0px;
  background: #76d7e6;
}
</style>
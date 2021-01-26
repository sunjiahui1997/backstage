<template>
  <div class="login">
    <div class="loginForm">
      <div class="login_tit">
        <h4>
          <img src="../assets/logo.png" alt="" />
        </h4>
      </div>

      <label :class="{ active: number == 1 }">
        <input
          type="text"
          placeholder="请输入账号"
          @focus="number = 1"
          v-model="user"
        />
      </label>

      <label :class="{ active: number == 2 }">
        <input
          type="password"
          placeholder="请输入密码"
          v-model="password"
          @focus="number = 2"
          @blur="number = 0"
        />
      </label>
    </div>

    <button class="loginBtn" @click="login()">
      登录
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      user: "",
      password:""
    }
  },
    methods:{
        login(){
            if(this.user == 'hskj'&& this.password =='admin123'){
                this.$router.push("/b")
            }else{
                alert("请输入正确的用户名和密码！")
            }
        }
    }
};
</script>

<style lang="less" scoped="scoped">
.login_tit {
  line-height: 1.7;
  position: relative;
  top: -50px;

  h4 {
    text-align: center;
    font-size: 20px;
    color: #8bc34a;
    font-weight: 500;

    img {
      height: 105px;
      display: block;
      margin: 50px auto;
      margin-bottom: 0;
    }
  }
}

.loginForm {
  display: block;
  position: relative;
  top: 100px;

  label {
    margin: 0 auto;
    display: table;
    width: 20%;
    margin-bottom: 50px;
    border: 1px solid #fff;
    transition: all 0.8s;
    border-radius: 300px;

    &.active {
      border: 1px solid #000;
    }

    input {
      border: 0;
      -webkit-box-shadow: 0 0 15px #ccc;
      box-shadow: 0 0 15px #0000000f;
      padding: 15px 0;
      width: 100%;
      float: left;
      text-indent: 20px;
      border-radius: 50px;
      outline: none;
    }
  }
}

.loginBtn {
  cursor: pointer;
  position: relative;
  top: 100px;
  padding: 14px 0;
  border: 0;
  background: #000;
  color: #fff;
  border-radius: 50px;
  width: 20%;
  margin: auto;
  display: block;
  outline: none;
}
</style>

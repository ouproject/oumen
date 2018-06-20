<template>
  <div class="registerContainer">
    <img class="regBg" src="../../assets/img/shou1.jpg" alt="">
    <!--<i class="iconfont icon-suo" style="color: red"></i>-->
    <div class="fromContainer">
      <div class="regTitle">注册</div>
      <ul class="regContent">
        <li class="reg_item">
          <i class="iconfont icon-weibiaoti2fuzhi07 reg_font" ></i>
          <input class="reg_ipt" type="text" name="tel" placeholder="请输入手机号" ref="telVal" >
        </li>
        <li class="reg_item">
          <i class="iconfont icon-bianji reg_font" ></i>
          <input class="reg_ipt" type="text" placeholder="请输入验证码">
          <button class="send_regCode">发送验证码</button>
        </li>
        <li class="reg_item">
          <i class="iconfont icon-suo reg_font" ></i>
          <input class="reg_ipt" type="text" placeholder="请输入密码" ref="pwdVal" >
          <i class="iconfont icon-iconset0207 reg_pwdFont" ></i>
        </li>
        <li  class="erroPromt" v-show="erroJudge" style="color: red;font-size:10px"> 用户名或密码不正确</li>
      </ul>

      <div class="goreg">
        <router-link tag="div" :to="{path:'/login'}" class="gologin">已有账号登陆</router-link>
        <!--<div class="gologin" @click="goLogin">已有账号登陆</div>-->
        <div class="reg" @click="goReg">立即注册</div>
      </div>
      <div class="regPrompt">使用偶们亲子出行，就代表您同意 <a href="#" style="color:#0fa9ff">使用条款</a>和<a href="#" style="color:#0fa9ff">用户协议</a></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Register",
    data:function(){
      return{
        erroJudge:false
      }
    },
    created:function () {

    },
    methods:{
      goReg(){
        //点击立即注册，把手机号和密码,验证码 发给后台。查询是否已注册，密码格式，手机格式是否正确
        var telVal = /^[1][3,4,5,7,8][0-9]{9}$/.test(this.$refs.telVal.value);
        var pwdVal = /^([0-9]|[a-zA-Z]){6,16}$/.test(this.$refs.pwdVal.value);

        //还少一个验证码的判断
        if(!telVal || this.$refs.telVal.value=="" || this.$refs.pwdVal.value=="" || !pwdVal){
          //手机号格式错误
          this.erroJudge = true;
        }else {
          //手机号格式正确，发送请求
          this.erroJudge = false;

          var params = new URLSearchParams();
          params.append('tel', this.$refs.telVal.value);
          params.append('passwd', this.$refs.pwdVal.value);
          this.$http.post('http://10.80.7.125/MyRead/index.php?m=Home&c=Register&a=register', params)
            .then((res) => {
              //console.log(res.data);
              if(res.data=='registerOk'){
                //注册成功；跳转到首页
                  $(".erroPromt").html("注册成功").show();
                  this.$router.push({
                    path: '/login'
                  })
            }else if(res.data=='telExist'){
                $(".erroPromt").html("手机号已存在").show();
            }
            }).catch((err) => {
            console.log(err)
          })
        }
      }
    }
  }
</script>

<style scoped>
  ul{
    padding: 0;
    margin: 0;
  }
  li{
    list-style: none;
  }
  .regBg{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -999;
  }
  .registerContainer{
    width: 750px;
    height: 1336px;
    background: rgba(0,0,0,.3);
    display: -webkit-flex;
    -webkit-justify-content:center;
  }
  .fromContainer{
    width: 550px;
    height: 689px;
    background: rgba(255,255,255,.8);
    border-radius: 10px;
    color: black;
    padding: 4px;
    margin-top: 150px;
    display: flex;
    align-items: center;
    /*justify-content: center;*/
    flex-direction: column;
  }
  .regTitle{
    font-size: 30px;
    padding-top: 20px;
  }
  .regContent{
    margin:40px;
    text-align: center;
  }
  .reg_item{
    padding-bottom: 10px;
    border-bottom: 1px solid gray;
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
  }
  .reg_ipt{
    width: 280px;
    border-color: transparent;
    background-color: transparent;
    outline: none;
    margin-left: 10px;
  }
  .send_regCode{
    color: #0fa9ff;
    cursor: pointer;
    outline: none;
  }
  .reg_font{
    font-size: 35px;
    color: #999999;
  }
  .reg_pwdFont{
    color: #0fa9ff;
    font-size: 40px;
    margin-left: 40px;
  }
  .goreg{
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
  }
  .gologin{
    width: 180px;
    height: 50px;
    background-color: #cccccc;
    /*border:1px solid red;*/
    -webkit-border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .reg{
    width: 180px;
    height: 50px;
    /*background-color: #0fa9ff;*/
    color: white;
    /*border:1px solid red;*/
    -webkit-border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .regPrompt{
    margin: 20px 20px 0 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 15px;
  }
</style>

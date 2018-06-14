<template>
    <div>
      <router-view></router-view>
      <div class="mineheader">
          <router-link tag="span" :to="{path:'/user'}">
            <div class="mineimg">
              <img src="../../assets/img/tg.jpg">
            </div>
          </router-link>
          <div class="logins">
            <span>登录</span>
            <span>/注册</span>
          </div>
          <div class="minebottom">

          </div>
      </div>
      <div class="mineline"></div>
      <div class="minenav">
        <div class="mineuser"></div>
        <div class=""></div>
        <div></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Mine"
    }
</script>

<style scoped>
.mineheader{
  width: 750px;
  height: 420px;
  background-image: url("../../assets/img/user1.jpg");
  background-repeat: no-repeat;
  /*position: relative;*/
  overflow: hidden;
}
  .mineimg {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    left: 45%;
    margin-top: 100px;
  }
.mineimg img{
  width: 100px;
  height: 100px;
}
  .logins{
    position: relative;
    left: 45%;
    margin-top: 20px;
    color: white;
  }
  .minebottom{
    height: 80px;
    width: 100%;
    position: relative;
    bottom: -84px;
    background-color: rgba(7,17,27,0.4);
  }
  .mineline{
    height: 32px;
    width: 100%;
    background-color: #f0eff5;
  }
  .minenav{
    height: 252px;
    width: 100%;
  }
</style>

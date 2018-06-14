<template>
    <div>
      <router-view></router-view>
      <div class="mineheader">
        <router-link tag="span" :to="{path:'/user'}">
          <div class="mineimg">
            <img src="../../assets/img/tg.jpg">
          </div>
        </router-link>
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
</style>

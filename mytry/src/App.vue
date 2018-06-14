<template>
  <div id="app">
    <router-view></router-view>
    <div id="footstar">

      <router-link class="footItem" tag="span" :to="{path:'/pages'}">
        <div><i class="icon-user"></i></div>
        <div>首页</div>
      </router-link>
      <router-link class="footItem" tag="span" :to="{path:'/ages'}">
        <div><i class="icon-sphere"></i></div>
        <div> 年龄</div>
      </router-link>
      <router-link class="footItem" tag="span" :to="{path:'/mine'}">
        <div> <i class="icon-home2"></i></div>
        <div>我的</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  /*引入svg里面的样式*/
  @import "assets/Iconimg/style.css";
  *{
    margin: 0;
    padding: 0;
  }
#footstar{
  height: 90px;
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  align-items: center;
  background-color: white;
}
.footItem{
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 70px;
  font-size: 28px;
  color: rgb(77,85,93);
}
  .footItemimg1{
    height: 50px;
    width: 50px;
  }
  .router-link-active{
    color: blue;
  }
</style>

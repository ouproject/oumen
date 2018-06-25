<template>
  <div>
    <mt-header title="关于我们" class="usersheader">
      <router-link to="/mine" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="guanyu">
      <img src="../../assets/img/logo-01.jpg">
      <div class="title">
        ABOUTS US
        <div class="titleText">关于我们</div>
      </div>
      <div class="desc">
        TIME亲子出行是青岛时光社文化传媒有限公司旗下的亲子旅游平台;
        致力于打造“TIME出行,为爱出行”,专为家庭提供私家精品游。
        打造高品质的旅行产品，将旅行服务做到臻善臻美。
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Age"
  }
</script>

<style scoped>
  .usersheader{
    height: 80px;
    font-size: 32px;
    background-color: white;
    color: gray;
    border-bottom: 1px solid #e6e6e6;
  }
  .guanyu{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .guanyu img{
    text-align: center;
    width: 300px;
    margin-top: 100px;
  }
  .title{
    font-size: 35px;
    text-align: center;
    margin-top: 100px;
  }
  .titleText{
    font-size: 20px;
    text-align: center;
  }
  .desc{
    padding: 50px 100px;
    line-height: 35px;
    font-size: 20px;
    letter-spacing:3px;
    text-indent: 30px;
  }
</style>

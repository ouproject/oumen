<template>
    <div>
      <mt-header title="支付完成" class="usersheader">
        <router-link to="/mine" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="contents">
        <p class="write">亲，您的付款已经结束啦！感谢你的支持!</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Endpay",
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
  .contents{
    background-color: white;
    overflow: hidden;
    height: 100vh;
  }
  .write{
      margin-top: 20px;
      color: orange;
  }

</style>

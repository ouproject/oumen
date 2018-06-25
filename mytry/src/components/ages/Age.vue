<template>
    <div>
      <mt-header title="关于我们" class="usersheader">
        <router-link to="/mine" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="guanyu">
        <img src="../../assets/img/guanyu.jpg">
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
  .guanyu img{
    width: 750px;
  }
</style>

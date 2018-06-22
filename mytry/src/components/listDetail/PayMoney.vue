<template>
  <div class="box">
    <mt-header title="支付订单" class="usersheader">
      <router-link to="/wirteInfo" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div class="htop">
      <div class="heta1">
        <img class="detailimg" src="../../assets/img/lot1.jpg">
        <p class="hetap1">香港+澳门4晚5日经典观光游4晚5日经典4晚5日经典4晚5日经典</p>
      </div>
      <div class="timedetail">
        <span class="timepan1">10月20日</span>
        <span class="timepan2"></span>
        <span class="timepan3">2成人 1儿童</span>
        <span class="timepan4">历时5天</span>
        <span class="timepan5">10月25日</span>
      </div>
      <ul class="hbot">
        <li>
          <div class="zonge">出发地：</div>
          <div class="zongenum">北京</div>
        </li>
        <li>
          <div class="zonge">目的地：</div>
          <div class="zongenum">韩国</div>
        </li>
        <li>
          <div class="zonge">合计：</div>
          <div class="zongenum">￥666666</div>
        </li>
        <li>
          <div class="zonge">实付金额：</div>
          <div class="zongenum">￥666666</div>
        </li>
      </ul>
      <h4>选择支付方式</h4>
      <div class="xinxi">
        <ul>
          <li>
            <img src="../../assets/img/weixin.png" />
            <span>微信支付</span>
            <input type="checkbox"/>
          </li>
          <li>
            <img src="../../assets/img/zhifubao.png" />
            <span>支付宝</span>
            <input type="checkbox"/>
          </li>
        </ul>
      </div>
      <h3>温馨提示</h3>
      <h5>· 请在2小时内完成付款，逾期将取消订单</h5>
      <div class="quzhifu">
        <p>去支付</p>
      </div>
      <div class="big"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "PayMoney"
    }
</script>

<style scoped>
  *{
    list-style: none;
  }
  h3{
    margin-top: 60px;
    margin-left: 30px;
  }
  h5{
    margin-top: 30px;
    margin-left: 30px;
    color: gray;
  }
  h4{
    margin: 50px 0 10px 28px;
    color: gray;
    display: inline-block;
  }
  .big{
    width: 100%;
    height: 90px;
  }
  .usersheader{
    height: 80px;
    font-size: 30px;
    background-color: white;
    color: gray;
    border-bottom: 1px solid #e6e6e6;
  }
  .heta1{
    display: flex;
  }
  .detailimg{
    width: 120px;
    height: 80px;
    margin-left:40px;
    margin-top: 36px;
  }
  .hetap1{
    margin-left: 10px;
    margin-top: 36px;
    padding-right:20px;
    font-size: 28px;
  }
  .htop{
    height: 390px;
    background-color: white;
  }
  .timedetail{
    position: relative;
    margin-top: 50px;
    margin-left: 80px;
  }
  .timepan1{
    font-size: 34px;
    color: #4c4c4c;
  }
  .timepan2{
    display: inline-block;
    height: 2px;
    width: 40%;
    background-color: gray;
  }
  .timepan3{
    position: absolute;
    left: 220px;
    top: 0;
    color: gray;
  }
  .timepan4{
    position: absolute;
    left: 240px;
    top:35px;
  }
  .timepan5{
    font-size: 34px;
    color: #4c4c4c;
  }
  .zonge{
    font-size: 28px;
    padding-left: 30px;
  }
  .zongenum{
    font-size: 28px;
    color: orangered;
    float: right;
    padding-right: 30px;
  }
  .hbot{
    margin-top: 80px;
    border-bottom: 2px dashed gray;
  }
  .hbot li{
    background-color: white;
    padding: 20px 0;
  }
  .hbot li div{
    display: inline-block;
  }
  .xinxi ul li{
    height: 80px;
    width: 750px;
    background-color: white;
    line-height: 80px;
    font-size: 30px;
    padding-left: 30px;
  }
  .xinxi ul li img{
    vertical-align: middle;
  }
  .xinxi ul li input{
    float: right;
    margin-top: 30px;
  }
  .quzhifu{
    height: 120px;
    width: 750px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 9;
    background-color: white;
    text-align: center;
  }
  .quzhifu p{
    width: 70%;
    height: 70px;
    color: white;
    font-size: 28px;
    line-height: 70px;
    background-color: orangered;
    border-radius: 40px;
    margin: 25px auto 0 auto;
  }
</style>

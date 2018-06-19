<template>
<div>
  <mt-header title="我的收藏" class="usersheader">
    <router-link to="/mine" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
  </mt-header>
  <div>
    <div class="pagelot">
      <div class="pagelot1">
        <img src="../../assets/img/lot1.jpg">
        <span class="lothui">冬令营</span>
        <p class="lotwin">
          <img id="eyes" src="../../assets/img/browse.png">
          3456
        </p>
        <span class="lotbo">育</span>
      </div>
      <p class="titlelot">香港+澳门4晚5日经典观光游4晚5日经典4晚5日经典4晚5日经典</p>
      <p class="agelots">
        <span class="agelot">适合的年龄：</span>
        <span class="numslot">8</span><span class="numslot">9</span>
        <span class="numslot">10</span><span class="numslot">11</span>
        <span class="numslot">12</span>
      </p>
      <p>
        <span>￥23345起/人</span><span class="prcienum">市场价：￥50000</span>
      </p>
      <p class="wacthimg">
        <span class="wacthimg1">返</span>
        <span class="wacthimg2">精</span>
      </p>
      <p class="complimentary">
        <span class="complimentary2">随性赠送礼品：高档亲子装、高档雨衣、高档书包等性赠送礼品：高档亲子装、高档雨衣</span>
      </p>
    </div>
    <div class="pagelot">
      <div class="pagelot1">
        <img src="../../assets/img/lot1.jpg">
        <span class="lothui">冬令营</span>
        <p class="lotwin">
          <img id="eyes1" src="../../assets/img/browse.png">
          3456
        </p>
        <span class="lotbo">育</span>
      </div>
      <p class="titlelot">香港+澳门4晚5日经典观光游4晚5日经典4晚5日经典4晚5日经典</p>
      <p class="agelots">
        <span class="agelot">适合的年龄：</span>
        <span class="numslot">8</span><span class="numslot">9</span>
        <span class="numslot">10</span><span class="numslot">11</span>
        <span class="numslot">12</span>
      </p>
      <p>
        <span>￥23345起/人</span><span class="prcienum">市场价：￥50000</span>
      </p>
      <p class="wacthimg">
        <span class="wacthimg1">返</span>
        <span class="wacthimg2">精</span>
      </p>
      <p class="complimentary">
        <span class="complimentary2">随性赠送礼品：高档亲子装、高档雨衣、高档书包等性赠送礼品：高档亲子装、高档雨衣</span>
      </p>
    </div>
    <div class="pagelot">
      <div class="pagelot1">
        <img src="../../assets/img/lot1.jpg">
        <span class="lothui">冬令营</span>
        <p class="lotwin">
          <img id="eyes2" src="../../assets/img/browse.png">
          3456
        </p>
        <span class="lotbo">育</span>
      </div>
      <p class="titlelot">香港+澳门4晚5日经典观光游4晚5日经典4晚5日经典4晚5日经典</p>
      <p class="agelots">
        <span class="agelot">适合的年龄：</span>
        <span class="numslot">8</span><span class="numslot">9</span>
        <span class="numslot">10</span><span class="numslot">11</span>
        <span class="numslot">12</span>
      </p>
      <p>
        <span>￥23345起/人</span><span class="prcienum">市场价：￥50000</span>
      </p>
      <p class="wacthimg">
        <span class="wacthimg1">返</span>
        <span class="wacthimg2">精</span>
      </p>
      <p class="complimentary">
        <span class="complimentary2">随性赠送礼品：高档亲子装、高档雨衣、高档书包等性赠送礼品：高档亲子装、高档雨衣</span>
      </p>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "Collect"
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
  .pagelot{
    width: 660px;
    height: 600px;
    margin-left: 40px;
    border-radius: 8px;
    margin-top: 18px;
    overflow: hidden;
    border: 2px solid #e6e6e6;

  }
  .pagelot1{
    position: relative;
  }
  .pagelot1 img{
    width: 660px;
    height: 380px;
  }
  .lothui{
    display: inline-block;
    position: absolute;
    left: 20px;
    top: 20px;
    color: white;
    width: 100px;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    text-align: center;
    border: 2px solid white;
    border-radius: 20px;
  }
  .lotwin{
    display: inline-block;
    position: absolute;
    top: 20px;
    right: 20px;
    color: white;
    text-align: center;
    height: 45px;
    line-height: 45px;
    background-color: pink;
    border-radius: 10px;

  }
  .lotbo{
    display: inline-block;
    position: absolute;
    color: white;
    width: 80px;
    height: 80px;
    line-height: 80px;
    border-radius: 50%;
    background-color: rebeccapurple;
    font-size: 36px;
    text-align: center;
    bottom: -35px;
    right: 55px;
  }
  .titlelot{
    width: 420px;
    height: 75px;
    font-size: 28px;
    padding: 0;
    overflow: hidden;
  }
  .agelots{
    overflow: hidden;
    margin-top: 5px;
  }
  .agelot{
    display: inline-block;
    float: left;
  }
  .numslot{
    display: inline-block;
    width: 30px;
    height: 30px;
    float: left;
    margin-left: 9px;
    border-radius: 50%;
    background-color: gray;
    text-align: center;
  }
  .prcienum{
    color: #bababa;
    text-decoration: line-through;
  }
  .wacthimg{
    float: right;
    margin-top: -40px;
    color: #bababa;
    margin-right: 5px;
  }
  .complimentary{
    width: 750px;
    height: 54px;
    line-height: 54px;
    margin-top: 5px;
    background-color: #f6f6f5;
  }
  .complimentary2{
    font-size: 8px;
    color: #9b338a;
    width: 750px;
    height: 54px;
    display: inline-block;
    overflow: hidden;
  }
  #eyes{
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }
  #eyes1{
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }
  #eyes2{
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }
  .wacthimg1{
    display: inline-block;
    width: 35px;
    height: 35px;
    text-align: center;
    border-radius: 50%;
    border: 2px solid gray;
  }
  .wacthimg2{
    display: inline-block;
    width: 35px;
    height: 35px;
    text-align: center;
    border-radius: 50%;
    border: 2px solid gray;
  }
</style>

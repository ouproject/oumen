<template>
<div>
  <mt-header title="我的订单" class="usersheader">
    <router-link to="/mine" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
  </mt-header>
  <div>
    <div class="orderheader">
      <div class="orderleft">
        <p @click="Show"  class="orderp">全部订单</p>
        <img class="pimg" src="../../assets/img/more_unfold.png">
        <div class="heline" v-show="isShow"></div>
        <div class="orderlist" v-show="isShow">
          <div class="listall">全部订单</div>
          <div class="listall" @click="waitpay">代付款</div>
          <div class="listall" @click="waitgo">待出发</div>
          <div class="listall" @click="endtime">已完成</div>
          <div class="listall" @click="delpay">已取消</div>
        </div>
      </div>
      <div class="orderright">
        <p @click="Shows" class="orderp">按下单时间排序</p>
        <img class="pimg" src="../../assets/img/more_unfold.png">
        <div class="orderlistright" v-show="isShows">
          <div class="listall">按下单时间顺序</div>
          <div class="listall">按出行时间顺序</div>
        </div>
      </div>
    </div>
    <div class="orderfoot">
      <div class="travellist">
        <div class="listorder">
          <img class="flowers" src="../../assets/img/flowers.png">
          <p class="travename">境外亲子游</p>
          <div class="findlist">已完成</div>
          <p class="monenylist">
            <span class="pay">实付金额：</span>
            <span class="paymoney">￥3452</span>
          </p>
        </div>
        <div class="navtravel">
          <div class="travelimg">
            <img class="travelimgsleft" src="../../assets/img/lot1.jpg">
            <p class="writep">往后余生，你会在哪里，我的生活即将没有你，我们后会有期</p>
          </div>
          <p class="travelcontents">
            <img class="clock" src="../../assets/img/task-management.png">
            <span class="spantravel1">2018-5-20出发</span>
            <span class="spantravel2">历时半天</span>
          </p>
          <p class="travelcontents">
            <img class="map" src="../../assets/img/map.png">
            <span class="spantravel3">杭州</span>
          </p>
        </div>
      </div>
      <div class="travellist">
        <div class="listorder">
          <img class="flowers" src="../../assets/img/flowers.png">
          <p class="travename">境外亲子游</p>
          <div class="findlist">已完成</div>
          <p class="monenylist">
            <span class="pay">实付金额：</span>
            <span class="paymoney">￥3452</span>
          </p>
        </div>
        <div class="navtravel">
          <div class="travelimg">
            <img class="travelimgsleft" src="../../assets/img/lot1.jpg">
            <p class="writep">往后余生，你会在哪里，我的生活即将没有你，我们后会有期</p>
          </div>
          <p class="travelcontents">
            <img class="clock" src="../../assets/img/task-management.png">
            <span class="spantravel1">2018-5-20出发</span>
            <span class="spantravel2">历时半天</span>
          </p>
          <p class="travelcontents">
            <img class="map" src="../../assets/img/map.png">
            <span class="spantravel3">杭州</span>
          </p>
        </div>
      </div>
      <div class="travellist">
        <div class="listorder">
          <img class="flowers" src="../../assets/img/flowers.png">
          <p class="travename">境外亲子游</p>
          <div class="findlist">已完成</div>
          <p class="monenylist">
            <span class="pay">实付金额：</span>
            <span class="paymoney">￥3452</span>
          </p>
        </div>
        <div class="navtravel">
          <div class="travelimg">
            <img class="travelimgsleft" src="../../assets/img/lot1.jpg">
            <p class="writep">往后余生，你会在哪里，我的生活即将没有你，我们后会有期</p>
          </div>
          <p class="travelcontents">
            <img class="clock" src="../../assets/img/task-management.png">
            <span class="spantravel1">2018-5-20出发</span>
            <span class="spantravel2">历时半天</span>
          </p>
          <p class="travelcontents">
            <img class="map" src="../../assets/img/map.png">
            <span class="spantravel3">杭州</span>
          </p>
        </div>
      </div>
      <div class="travellist">
        <div class="listorder">
          <img class="flowers" src="../../assets/img/flowers.png">
          <p class="travename">境外亲子游</p>
          <div class="findlist">已完成</div>
          <p class="monenylist">
            <span class="pay">实付金额：</span>
            <span class="paymoney">￥3452</span>
          </p>
        </div>
        <div class="navtravel">
          <div class="travelimg">
            <img class="travelimgsleft" src="../../assets/img/lot1.jpg">
            <p class="writep">往后余生，你会在哪里，我的生活即将没有你，我们后会有期</p>
          </div>
          <p class="travelcontents">
            <img class="clock" src="../../assets/img/task-management.png">
            <span class="spantravel1">2018-5-20出发</span>
            <span class="spantravel2">历时半天</span>
          </p>
          <p class="travelcontents">
            <img class="map" src="../../assets/img/map.png">
            <span class="spantravel3">杭州</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "Order",
        data:function(){
          return{
            isShow:false,
            isShows:false,
          }
        },
      methods:{
        Show(){
          this.isShow = !this.isShow;
        },
        Shows(){
          this.isShows = !this.isShows;
        },
        waitpay(){
          this.$router.push({
            path: '/orderdetail',
          });
        },
        waitgo(){
          this.$router.push({
            path: '/orderdetail',
          });
        },
        endtime(){
          this.$router.push({
            path: '/orderdetail',
          });
        },
        delpay(){
          this.$router.push({
            path: '/orderdetail',
          });
        }
      }

    }
</script>

<style scoped>
  /*router-link出现下划线，其实router-link相当于a标签，所以设置a链接的样式*/
  a {
    text-decoration: none;
  }
  .usersheader{
    height: 90px;
    font-size: 26px;
    background-color: white;
    text-align: center;
    color: gray;
    border-bottom: 1px solid #e6e6e6;
  }
  .orderheader{
    height: 84px;
    width: 100%;
    display: flex;
    /*background-color: yellow;*/
    border-bottom: 1px solid #e6e6e6;
    box-sizing: border-box;
  }
  .orderleft{
    height: 84px;
    position: relative;
    display: flex;
    flex: 1;
  }
  .heline{
    width:180px;
    height: 10px;
    background-color: #00a3fb;
    position: absolute;
    left: 40px;
    top: 75px;
  }
  .orderp{
    margin-top: 20px;
    margin-left: 40px;
    font-size: 28px;
  }
  .pimg{
    width: 40px;
    height: 40px;
    margin-top: 18px;
  }
  .orderlist{
    height: 420px;
    width: 180px;
    position: absolute;
    top: 100px;
    left: 40px;
    background-color: white;
    border: 1px solid #e6e6e6;
    box-sizing: border-box;
  }
  .orderright{
    height: 84px;
    position: relative;
    display: flex;
    flex: 1;
  }
  .listall{
    height: 84px;
    line-height: 84px;
    color: #4d4d4d;
    text-align: center;
    border-bottom: 1px solid #e6e6e6;
    box-sizing: border-box;
  }
  .orderlistright{
    width: 240px;
    position: absolute;
    top: 100px;
    left: 40px;
    border: 1px solid #e6e6e6;
    box-sizing: border-box;
    background-color: white;
  }

  .orderfoot{

  }
  .travellist{
    height: 334px;
    width: 660px;
    margin-left: 45px;
    /*background-color: pink;*/
    margin-top: 20px;
    border-radius: 8px;
    border: 2px solid #e6e6e6;
  }
  .listorder{
    height: 92px;
    width: 630px;
    margin-left: 15px;
    display: flex;
    align-items: center;
    border-bottom:1px solid #e6e6e6 ;
  }
  .flowers{
    width: 50px;
    height: 50px;
  }
  .travename{

  }
  .findlist{
      margin-left: 18px;
    padding-left: 10px;
    color: #797979;
    border-left: 1px solid #e6e6e6;
  }
  .pay{
    color: #797979;
  }
  .monenylist{
    margin-left: 150px;
  }
  .monenylist span{
    float: left;
  }
  .navtravel{
    width: 630px;
    margin-left: 15px;
  }
  .travelimg{
    display: flex;
    /*background-color: orange;*/
    margin-top: 15px;
  }
  .travelimgsleft{
    width: 150px;
    height: 80px;
    flex: 2;
  }
  .writep{
    flex: 6;
    margin-left: 7px;
  }
  .clock{
    width: 25px;
    height: 25px;
    margin-top: 5px;
  }
  .travelcontents{
    margin-top: 5px;
    overflow: hidden;
    /*background-color: orange;*/
  }
  .spantravel1{
    display: inline-block;
    margin-left: 6px;
    color: #b0b0b0;
  }
  .spantravel2{
    display: inline-block;
    margin-left: 12px;
    color: #b0b0b0;
  }
  .map{
    width: 25px;
    height: 25px;
  }
  .spantravel3{
    color:#b0b0b0 ;
  }
  .paymoney{
    color: #ff8b53;
  }
</style>

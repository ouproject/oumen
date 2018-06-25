<template>
  <div class="box">
    <mt-header title="支付订单" class="usersheader">
      <router-link to="/wirteInfo" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div class="htop">
      <div class="heta1">
        <img class="detailimg" :src="'http://10.80.7.125/MyRead/'+$store.state.goodsData.sendDatas.img_addr">
        <p class="hetap1">{{$store.state.goodsData.sendDatas.title}}</p>
      </div>
      <div class="timedetail">
        <span class="timepan1">{{$store.state.goodsData.sendDatas.starttime}}</span>
        <span class="timepan2"></span>
        <span class="timepan3">{{$store.state.orderPay.num}}成人 {{$store.state.orderPay.nummber}}儿童</span>
        <span class="timepan4">历时{{days}}天</span>
        <span class="timepan5">{{$store.state.goodsData.sendDatas.endtime}}</span>
      </div>
      <ul class="hbot">
        <li>
          <div class="zonge">出发地：</div>
          <div class="zongenum">{{$store.state.schedulingData[0].start_addr}}</div>
        </li>
        <li>
          <div class="zonge">目的地：</div>
          <div class="zongenum">{{$store.state.schedulingData[0].end_addr}}</div>
        </li>
        <li>
          <div class="zonge">合计：</div>
          <div class="zongenum">￥{{pricesall}}</div>
        </li>
        <li>
          <div class="zonge">实付金额：</div>
          <div class="zongenum">￥{{pricesall}}</div>
        </li>
      </ul>
      <h4>选择支付方式</h4>
      <div class="xinxi">
        <ul>
          <li>
            <img src="../../assets/img/weixin.png" />
            <span>微信支付</span>
            <input type="checkbox" />
          </li>
          <li>
            <img src="../../assets/img/zhifubao.png" />
            <span>支付宝</span>
            <input type="checkbox" />
          </li>
        </ul>
      </div>
      <h3>温馨提示</h3>
      <h5>· 请在2小时内完成付款，逾期将取消订单</h5>
      <div class="quzhifu">
        <p @click="paymoney">去支付</p>
      </div>
      <div class="big"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "PayMoney",
      data:function(){
          return{
            pricesall:Number(this.$store.state.orderPay.prices) + Number(this.$store.state.orderPay.prices1)
          }
      },
      mounted(){
        console.log("selScheduling--999999------",this.$store.state.schedulingData);
      },
      methods:{

        paymoney(){
          if(this.$store.state.loginTel == ''){
            this.$router.push({
              path: '/login',
            });
          }else{
            this.$store.commit('OrderSate','待付款')
            var params = new URLSearchParams();
            params.append('reg_tel', this.$store.state.loginTel);
            params.append('money', this.pricesall);
            params.append('user_name',this.$store.state.familys.personum);
            params.append('user_tel', this.$store.state.familys.phonenum);
            params.append('goods_id', this.$store.state.goodsData.sendDatas.goods_id);
            params.append('state', this.$store.state.orderSate);
            params.append('old_num', this.$store.state.orderPay.num);
            params.append('child_num', this.$store.state.orderPay.nummber);
            console.log(this.pricesall)
            this.$http.post(this.baseUrl+'m=Home&c=Tour&a=addOrder',params)
              .then((res) => {
                // res.setHeader("Content-type", "text/html;charset=UTF-8");
                console.log(res)

              }).catch((err) => {
              console.log(err)
            })
            this.$router.push({
              path: '/listorder'
            })
          }
        },


      },
      computed:{
        days(){
          var starday = this.$store.state.goodsData.sendDatas.starttime.split("-");
          var endday = this.$store.state.goodsData.sendDatas.endtime.split("-");
          var dayall = new Date(starday[0],starday[1],starday[2]);
          var dayall1 = new Date(endday[0],endday[1],endday[2]);
          var daysAll = (dayall1 - dayall)/(24*60*60*1000);
          return daysAll;
        }
      }
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
    /*margin-left: 80px;*/
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

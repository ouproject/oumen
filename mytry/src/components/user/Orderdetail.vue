<template>
<div>
  <mt-header title="订单详情" class="usersheader">
    <router-link to="/order" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
  </mt-header>
  <div>
    <div class="ordertetail">
      <div class="headerdetail">
        <div class="orderleft">
          <p class="leftp1">{{$store.state.orderSate}}</p>
          <p class="leftp2">订单编号:4957384</p>
        </div>
        <div class="orderRight">
          <img src="../../assets/img/iconfont-phone.png">
          <p class="orderRightp">咨询</p>
        </div>
      </div>
      <div>
        <div class="heta1">
          <img class="detailimg" :src="'http://10.80.7.125/MyRead/'+$store.state.goodsData.sendDatas.img_addr">
          <p class="hetap1">{{$store.state.goodsData.sendDatas.title}}</p>
        </div>
        <div class="timedetail">
          <span class="timepan1">{{$store.state.goodsData.sendDatas.starttime}}</span>
          <span class="timepan2"></span>
          <span class="timepan3">{{$store.state.orderPay.num}}个成人 {{$store.state.orderPay.nummber}}个儿童</span>
          <span class="timepan4">历时{{days}}天</span>
          <span class="timepan5">{{$store.state.goodsData.sendDatas.endtime}}</span>
        </div>
        <div class="places">
          <p class="placesp1">
            <span class="spanpl1">出发地：</span>
            <span class="spanpl2">北京</span>
          </p>
          <p class="placesp1">
            <span class="spanpl1">目的地：</span>
            <span class="spanpl2">新西兰</span>
          </p>
        </div>
        <div>
          <div class="clnum">
            <p class="clnum1">实发金额：</p>
            <p class="clnum2">￥{{this.pricesall}}</p>
          </div>
        </div>
      </div>
      <div class="mineline">
        <p class="minelinepe">联系人信息</p>
      </div>
      <div>
        <div class="orderuser">
          <p class="orderuser1">联系人：</p>
          <p class="orderuser2">{{$store.state.familys.personum}}</p>
        </div>
        <div class="orderuser">
          <p class="orderuser1">电话：</p>
          <p class="orderuser3">{{$store.state.familys.phonenum}}</p>
        </div>
      </div>
      <div class="orderfoot" v-show="sHows">
        <div class="orderfoot1" @click="delorder">取消订单</div>
        <div class="orderfoot2" @click="payall">预支付款</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "Orderdetail",
      data:function () {
        return{
          sHows:false,
          pricesall:Number(this.$store.state.orderPay.prices) + Number(this.$store.state.orderPay.prices1),

        }
      },
      mounted(){
          if(this.$store.state.orderSate == '待付款'){
            this.sHows = true;
          }
        console.log('0000000000000000',this.$store.state.orderPay)
      },
      methods:{
        delorder(){
          this.$store.commit('OrderSate','已取消')
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
          this.$http.post('http://10.80.7.125/MyRead/index.php?m=Home&c=Tour&a=addOrder',params)
            .then((res) => {
              // console.log(res)
              this.$router.push({
                path: '/pages'
              })
            }).catch((err) => {
            console.log(err)
          })
        },
        payall(){
          this.$store.commit('OrderSate','已完成')
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
          this.$http.post('http://10.80.7.125/MyRead/index.php?m=Home&c=Tour&a=addOrder',params)
            .then((res) => {
              // console.log(res)
              this.$router.push({
                path: '/end'
              })
            }).catch((err) => {
            console.log(err)
          })

        }
      },
      computed:{
        days(){
          var starday = this.$store.state.goodsData.sendDatas.starttime.split("-");
          var endday = this.$store.state.goodsData.sendDatas.endtime.split("-");
          var dayall = new Date(starday[0],starday[1],starday[2]);
          var dayall1 = new Date(endday[0],endday[1],endday[2]);
          var daysAll = (dayall1 - dayall)/(24*60*60*1000);
          return daysAll;
        },

      }
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

  .ordertetail{

  }
  .headerdetail{
    height: 140px;
    width: 100%;
    /*background-color: pink;*/
    display: flex;
    border-bottom: 2px solid  #e6e6e6;
  }
  .orderleft{
    flex: 1;
    /*background-color: orange;*/
  }
  .orderRight{
    flex:1;
    position: relative;
    /*background-color: rebeccapurple;*/
  }
  .orderRight img{
    width: 60px;
    height: 60px;
    margin-left: 150px;
    margin-top: 30px;
    vertical-align: middle;
  }
  .leftp1{
    color: #56b979;
    margin-left: 20px;
    margin-top: 20px;
    font-size: 26px;
  }
  .leftp2{
    color: #989898;
    margin-left: 20px;
    margin-top: 20px;
  }
  .orderRightp{
    margin-left: 220px;
    margin-top: -45px;
    font-size: 34px;
    color: #4ac0fc;
  }



  .heta1{
    display: flex;
  }

  .detailimg{
    width: 120px;
    height: 80px;
    margin-left:26px;
    margin-top: 36px;
  }
  .hetap1{
    margin-left: 10px;
    margin-top: 36px;
    padding-right:20px;
    font-size: 26px;
  }
  .timedetail{
    position: relative;
    margin-top: 50px;
    /*margin-left: 60px;*/
  }
  .timepan1{
    font-size: 34px;
    color: #4c4c4c;
  }
  .timepan2{
    display: inline-block;
    height: 2px;
    width: 40%;
    background-color: #e6e6e6;
  }
  .timepan3{
    position: absolute;
    left: 240px;
    top:-12px;
  }
  .timepan4{
    position: absolute;
    left: 260px;
    top:35px;
  }
  .timepan5{
    font-size: 34px;
    color: #4c4c4c;
  }
  .places{
    height: 140px;
    width: 700px;
    margin-top: 50px;
    margin-left: 25px;
    border-bottom: 2px solid  #e6e6e6;
    border-top: 2px solid  #e6e6e6;
  }
  .placesp1{
    display: flex;
    margin-top: 20px;
  }
  .placesp1 span{
    display: inline-block;
    float: right;
  }
  .spanpl1{
    color: #767676;
    font-size: 28px;
  }
  .spanpl2{
   margin-left: 480px;
    color: #767676;
    font-size: 28px;
  }

  .clnum{
    display: flex;
    height: 92px;
    margin-left: 25px;
    align-items: center;
    border-bottom: 2px solid  #e6e6e6;
  }
  .clnum1{
    flex: 1;
    color: #767676;
    font-size: 28px;
  }
  .clnum2{
    flex: 1;
    color: #767676;
    font-size: 28px;
    margin-left: 380px;
  }


  .mineline{
    height: 70px;
    width: 100%;
    overflow: hidden;
    background-color: #ededed;

  }
  .minelinepe{
    margin-left: 34px;
    margin-top: 24px;
    font-size: 28px;
    color: #767676;
  }
  .orderuser{
    width: 700px;
    height: 80px;
    margin-left: 25px;
    border-bottom: 2px solid  #e6e6e6;
    display: flex;
    align-items: center;
  }
  .orderuser1{
    color: #767676;
  }
  .orderuser2{
    color: #767676;
    margin-left: 480px;
  }
  .orderuser3{
    color: #767676;
    margin-left: 450px;
  }
  .orderfoot{
    height: 100px;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    background-color: white;
  }
  .orderfoot1{
    flex: 3;
    height: 70px;
    border-radius: 40px;
    text-align: center;
    line-height: 70px;
    color: #767676;
    font-size: 28px;
    border: 2px solid  #e6e6e6;
    box-sizing: border-box;
    margin-left: 30px;
  }
  .orderfoot2{
    flex: 6;
    height: 70px;
    border-radius: 40px;
    text-align: center;
    line-height: 70px;
    background-color: #ff714a;
    color: white;
    font-size: 28px;
    border: 2px solid  #e6e6e6;
    box-sizing: border-box;
    margin-left: 30px;

  }
</style>

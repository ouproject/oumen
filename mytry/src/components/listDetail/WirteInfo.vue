<template>
  <div class="box">
    <mt-header title="填写信息" class="usersheader">
      <router-link to="/time" slot="left">
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
      <div class="zonge">订单总额：</div><div class="zongenum">￥{{this.pricesall}}</div>
    </div>
    <h4>联系人信息</h4>
    <div class="xinxi">
      <ul>
        <li>
          <span>联系人：</span>
          <input v-model="personum" type="text" placeholder="填写联系人" />
        </li>
        <li>
          <span>联系电话：</span>
          <input v-model="phonenum" type="text" placeholder="填写常用手机号" />
        </li>
        <li>
          <span>电子邮箱：</span>
          <input v-model="emails" type="text" placeholder="(选填)" />
        </li>
      </ul>
    </div>
    <h4>旅客信息：</h4>
    <p>{{$store.state.orderPay.num}}成人 {{$store.state.orderPay.nummber}}儿童</p>
    <div class="lvke">
      <ul>
        <li>
          <span>出行人</span>
        </li>
        <li>
          <span>出行人</span>
        </li>
        <li class="dajinquan">
          <span>代金券：</span>
          <p>￥100 ></p>
        </li>
      </ul>
    </div>
    <h4>爱心红包剩余：</h4>
    <p>￥88888</p>
    <h3><img src="../../assets/img/wenhao.png" />如何获取爱心红包</h3>
    <div class="hongbao">
      <ul>
        <li class="shiyong">
          <input type="checkbox" />
          <span>使用红包：</span>
          <input type="text" style="outline:none" class="numb" placeholder="请填写抵用现金数量" />
        </li>
        <li>
          <span>红包减免：</span>
          <p>-￥0</p>
        </li>
        <li>
          <span>实付款：</span>
          <p>￥{{this.pricesall}}</p>
        </li>
      </ul>
    </div>
    <h4>
      <input type="checkbox" />
      点击提交订单表示已阅读并同意
      <h5>预定须知和重要条款</h5>
    </h4>
    <div class="bott">
      <span>预付款：</span>
      <p>￥{{sellder}}</p>
      <h6 @click="pays">提交订单</h6>
    </div>
    <div class="big"></div>
  </div>
</template>

<script>
  export default {
    name: "WirteInfo",
    data () {
      return {
        personum:'',
        phonenum:'',
        emails:'',

        pricesall:Number(this.$store.state.orderPay.prices) + Number(this.$store.state.orderPay.prices1)
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
      sellder(){
        var person1 = this.$store.state.orderPay.num;
        var person2 = this.$store.state.orderPay.nummber;
        // console.log(person1+person2)
        var sellders = (person1 + person2) * Number(this.$store.state.goodsData.sendDatas.advance);
        // console.log(this.$store.state.goodsData.sendDatas.advance)
        return sellders;
      }
    },
    methods: {
      pays(){
        this.$router.push({
          path: '/pay'
        })
        var obj = {
          personum:this.personum,
          phonenum:this.phonenum,
          emails:this.emails,
        }
        this.$store.commit("faMily",obj)
        console.log("goods666666666666666-----",this.$store.state.familys)
      }
    }
  }
</script>

<style scoped>
  *{
    list-style: none;
  }
  .bott{
    width: 100%;
    height: 100px;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: white;
    line-height: 100px;
    padding-left: 30px;
    z-index: 9;
  }
  .bott span{
    font-size: 28px;
  }
  .bott h6{
    width: 50%;
    height: 60px;
    float: right;
    background-color: orangered;
    line-height: 60px;
    margin-top: 20px;
    margin-right: 60px;
    border-radius: 40px;
    text-align: center;
    color: white;
    font-size: 28px;
  }
  .bott p{
    font-size: 28px;
    color: orangered;
    display: inline-block;
  }
  .big{
    width: 100%;
    height: 90px;
  }
  .box{
    background-color: rgb(236,236,236);
  }
  h4{
    margin: 50px 0 10px 28px;
    color: gray;
    display: inline-block;
  }
  h5{
    color: dodgerblue;
    display: inline-block;
  }
  h3{
    float: right;
    color: dodgerblue;
    padding-top: 40px;
    font-size: 20px;
    margin-right: 30px;
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
    top:0px;
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
    float: left;
    margin-left: 35px;
    margin-top: 80px;
  }
  .zongenum{
    font-size: 28px;
    color: orangered;
    float: right;
    margin-right: 35px;
    margin-top: 80px;
  }
  .htop{
    height: 390px;
    background-color: white;
    border-bottom: 2px black dashed;
  }
  .xinxi ul li{
    height: 80px;
    width: 720px;
    background-color: white;
    line-height: 80px;
    font-size: 30px;
    padding-left: 30px;
  }
  .xinxi ul li input{
    outline:none;
    line-height: 80px;
  }
  .lvke ul li{
    height: 80px;
    width: 720px;
    background-color: white;
    line-height: 80px;
    font-size: 30px;
    padding-left: 30px;
    color: dodgerblue;
  }
  .box>p{
    display: inline-block;
    color: orangered;
  }
  .lvke ul li input{
    outline:none;
    line-height: 80px;
  }
  .lvke ul .dajinquan span{
    color: black;
  }
  .lvke ul .dajinquan p{
    float: right;
    margin-right: 10px;
    color: orangered;
  }
  .lvke ul .dajinquan{
    margin-top: 25px;
  }
  .hongbao{
    font-size: 28px;
    background-color: white;
  }
  .hongbao ul li .numb{
    width: 35%;
    line-height: 80px;
    margin-left: 100px;
    background-color: white;
    padding: 0 10%;
  }
  .hongbao ul span{
    color: black;
    color: gray;
  }
  .hongbao ul p{
    float: right;
    margin-right: 30px;
    color: orangered;
  }
  .hongbao ul li{
    margin-top: 25px;
    padding-left: 30px;
    padding-top: 20px;
  }
  .hongbao ul .shiyong{
    padding-top: 0;
  }
</style>

<template>
    <div class="box">
      <div class="swiper-container">
        <router-view></router-view>
        <router-link :to="{path:'/pages'}">
          <div class="back">
            <img src="../../assets/img/back.png" />
          </div>
        </router-link>
          <div class="enshrine">
            <img src="../../assets/img/enshrine.png" />
          </div>
          <div class="share">️
            <img src="../../assets/img/share.png" />
         ️</div>
          <div class="tag">超值特惠</div>
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <!--<img style="width: 750px;height: 500px" src="../../assets/img/shou1.jpg">-->
            <!--<div :style="{width: '750px',height: '500px',background: 'url(http://10.80.7.125/MyRead/+Detail.img_addr)'}"></div>-->
            <div :style="{width: '750px',height: '500px',background: 'url('+imgurl+')'}"></div>
          </div>
          <div class="swiper-slide">
            <!--<img :src="'http://10.80.7.125/MyRead/'+Detail.img_addr">-->
            <!--<div :style="{width: '750px',height: '500px',background: 'url(http://10.80.7.125/MyRead/+Detail.img_addr)'}"></div>-->
            <div :style="{width: '750px',height: '500px',background: 'url('+imgurl+')'}"></div>
          </div>
          <div class="swiper-slide">
            <!--<img :src="'http://10.80.7.125/MyRead/'+Detail.img_addr">-->
            <div :style="{width: '750px',height: '500px',background: 'url('+imgurl+')'}"></div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <div class="information">
        <h2>{{Detail.title}}</h2>
        <span class="h_right">偶们自营</span>
        <p>{{Detail.detail}}</p>
        <p>适合年龄：
          <span class="radius">8</span>
          <span class="radius">9</span>
          <span class="radius">10</span>
          <span class="radius">11</span>
          <span class="radius">12</span>
        </p>
        <h3>￥ {{Detail.new_price}}</h3>
        <p class="h_p">起/人</p>
        <p>预付款：￥{{Detail.advance}}/人</p>
        <span class="accessing">
          <img src="../../assets/img/eyes.png" />
          {{Detail.follow_num}}
        </span>
      </div>

      <div class="fee">
        <p>费用明细(人均)</p>
        <span>往返机票￥16000</span>
        <span>五日酒店￥20000</span>
        <span>导服￥4000</span>
        <br />
        <span>育乐师服务￥5000</span>
      </div>

      <div class="catenation">
        <a>
          <div class="pic">育</div>
          <div>
            <p>育乐师</p>
            <span>随行配备专业育乐师，教会儿童在游玩中成长</span>
          </div>
          <h2>></h2>
        </a>
      </div>

      <div class="gift">
        <h2>随行赠送礼品</h2>
        <div>
          <img src="../../assets/img/backpack.png" />
        </div>
        <div>
          <img src="../../assets/img/raincoat.png" />
        </div>
        <div>
          <img src="../../assets/img/family.png" />
        </div>
      </div>

      <div class="recommend">
        <h2>推荐理由</h2>
        <ul v-for="(v,k) in reson">
          <li>{{k+1}}、{{v}}</li>
          <!--<li>1、 韩式五星级酒店，乐天马浦酒店住宿</li>-->
          <!--<li>2、 大韩航空，直飞不奔波，出行更便利</li>-->
          <!--<li>3、 韩国旅游发展局提供的精彩绝伦的表演秀（根据当地演出时间安排乱打秀或涂鸦秀）</li>-->
        </ul>
      </div>

      <div class="purchase">
        <ul>
          <li>
            <img src="../../assets/img/chuxing.png" />
            <span>出行人数</span>
            <p>{{Detail.limit_num}}组成团/已报名{{Detail.actual_num}}组</p>
          </li>
          <li>
            <img src="../../assets/img/tuanqi.png" />
            <span>最近团期</span>
            <p>{{Detail.starttime}}</p>
          </li>
        </ul>
      </div>
      <div class="purchase">
        <ul>
          <li>
            <img src="../../assets/img/feiyong.png" />
            <span>费用说明</span>
            <h2>></h2>
          </li>
          <li>
            <img src="../../assets/img/yuding.png" />
            <span>预订须知</span>
            <h2>></h2>
          </li>
          <li>
            <img src="../../assets/img/qianzheng.png" />
            <span>签证信息</span>
            <h2>></h2>
          </li>
        </ul>
      </div>
      <div class="route">
        <ul>
          <li :class="isShows?'blue':'xingCheng'" @click="xingCheng">行程安排</li>
          <li>温馨提示</li>
          <li :class="isShow?'blue':'pingJia'" @click="pingJia">评价(987)</li>
        </ul>
      </div>
      <div class="route" v-show="isShows">
        <div class="stroke">
          <span class="pag">第1天</span>
          <span>北京 - 首尔</span>
          <ul>
            <li>
              <img src="../../assets/img/hangban.png" />
              <span>航班：</span>
              <p>CZD653 (12:00 - 22:00)</p>
            </li>
            <li>
              <img src="../../assets/img/jiaotong.png" />
              <span>交通：</span>
              <p>旅游空调大巴</p>
            </li>
            <li>
              <img src="../../assets/img/canyin.png" />
              <span>餐饮：</span>
              <p class="day">早餐——自理<br />午餐——自理<br />晚餐——中式团餐</p>
            </li>
            <li>
              <img src="../../assets/img/zhusu.png" />
              <span>住宿：</span>
              <p>当地六星级酒店</p>
            </li>
            <li class="shuoming">
              上午：抵达仁川国际机场，办理出境手续<br />
              下午：导游机场接机，首尔市区活动过后到达酒店，班里入住手续<br />
              <img src="../../assets/img/fengjing.png" />
              <br />
              首尔市区
            </li>
          </ul>
        </div>
        <div class="stroke strokeb">
          <span class="pag">第2天</span>
          <span>首尔</span>
          <ul>
            <li>
              <img src="../../assets/img/jiaotong.png" />
              <span>交通：</span>
              <p>旅游空调大巴</p>
            </li>
            <li>
              <img src="../../assets/img/canyin.png" />
              <span>餐饮：</span>
              <p class="day">早餐——中式<br />午餐——中式<br />晚餐——中式</p>
            </li>
            <li>
              <img src="../../assets/img/zhusu.png" />
              <span>住宿：</span>
              <p>当地六星级酒店</p>
            </li>
            <li class="shuoming">
              上午：跆拳道馆体验（约两小时左右）<br />
              下午：先去儿童大公园，然后到市民安全体验馆（如约满，更改其他行程或再议或特里爱立体博物馆）<br />
              <img src="../../assets/img/fengjing.png" />
              <br />
              儿童大公园
            </li>
          </ul>
        </div>
      </div>

      <div class="evaluate" v-show="isShow">
        <ul>
          <li class="first">
            <img src="../../assets/img/fengjing.png" />
            <span>哈哈哈</span>
            <span class="date">2015-09-09 12:32</span>
            <p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
          </li>
          <li>
            <img src="../../assets/img/fengjing.png" />
            <span>哈哈哈</span>
            <span class="date">2015-09-09 12:32</span>
            <p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
          </li>
          <li>
            <img src="../../assets/img/fengjing.png" />
            <span>哈哈哈</span>
            <span class="date">2015-09-09 12:32</span>
            <p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
          </li>
          <li>
            <img src="../../assets/img/fengjing.png" />
            <span>哈哈哈</span>
            <span class="date">2015-09-09 12:32</span>
            <p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
          </li>
        </ul>
        <p>查看更多(66666)</p>
        <p>我要评价</p>
      </div>

      <div class="bot">
        <span class="zixun">
          <img src="../../assets/img/zixun.png" />
          咨询
        </span>

        <span class="buy" @click="buy">立即购买</span>
      </div>

      <div class="big"></div>

    </div>
</template>

<script>
  import Swiper from 'swiper';
  export default {
    name: "Detail",
    data:function(){
      return{
        Detail:{},
        imgurl:"",
        reson:[],
        isShow:false,
        isShows:true
      }
    },
    mounted(){
      new Swiper ('.swiper-container', {
        loop: true,
        autoplay:true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })

      if(this.$route.query.type=='vvip'){
        this.Detail = this.$route.query.datas;
        this.imgurl = 'http://10.80.7.125/MyRead/'+this.Detail.img_addr;
      }else if(this.$route.query.type=='list'){
        this.Detail = this.$route.query.listDatas;
        this.imgurl = 'http://10.80.7.125/MyRead/'+this.Detail.img_addr;
      }
    },
    methods:{
      xingCheng(){
        this.isShows = true;
        this.isShow = false;
      },
      pingJia(){
        this.isShow = true;
        this.isShows = false;
      },
      buy(){
        this.$router.push({
          path: '/time'

        })
      }
    }
  }
</script>

<style scoped>
  *{
    list-style: none;
  }
  .big{
    width: 100%;
    height: 100px;
  }
  .bot{
    width: 100%;
    height: 100px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9;
    background-color: white;
  }
  .bot .zixun{
    width: 48%;
    display: inline-block;
    font-size: 30px;
    height: 70px;
    color: dodgerblue;
    text-align: center;
    line-height: 70px;
    margin-top: 15px;
  }
  .zixun img{

  }
  .bot .buy{
    width: 48%;
    margin-top: 15px;
    height: 70px;
    border-radius: 40px;
    line-height: 70px;
    font-size: 30px;
    display: inline-block;
    color: white;
    background-color: orangered;
    text-align: center;
  }
  .box{
    width: 100%;
    background-color: rgb(238,238,238);
  }
  .swiper-container{
    height: 500px;
    position: relative;
    text-align: center;
  }
  .back{
    width: 60px;
    height: 60px;
    position: absolute;
    left: 30px;
    top: 50px;
    z-index: 9;
    background-color: black;
    color: white;
    border-radius: 50%;
    opacity: 0.6;
  }
  .enshrine{
    width: 60px;
    height: 60px;
    position: absolute;
    top: 50px;
    right: 130px;
    z-index: 9;
    background-color: black;
    color: white;
    border-radius: 50%;
    opacity: 0.6;
  }
  .share{
    width: 60px;
    height: 60px;
    position: absolute;
    top: 50px;
    right: 30px;
    z-index: 9;
    background-color: black;
    color: white;
    border-radius: 50%;
    opacity: 0.6;
  }
  .back img{
    padding-top: 13px;
    width: 40px;
    height: 40px;
  }
  .enshrine img{
    padding-top: 10px;
  }
  .share img{
    padding-top: 13px;
  }
  .tag{
    padding: 5px 15px;
    position: absolute;
    bottom: 50px;
    left: 0;
    z-index: 9;
    font-size: 25px;
    background-color: rgb(255,90,100);
    color: white;
  }
  .information{
    position: relative;
    background-color: white;
    padding-bottom: 20px;
  }
  .information h2{
    display: inline-block;
    margin-left: 20px;
    margin-top: 15px;
  }
  .h_right{
    display: inline-block;
    padding-left: 10px;
    width: 100px;
    height: 40px;
    color: red;
    line-height: 40px;
    border: 2px solid red;
    border-radius: 20px;
  }
  .information p{
    font-size: 25px;
    color: gray;
    margin-left: 20px;
    margin-top: 15px;
  }
  .information .h_p{
    display: inline-block;
    margin-left: 0;
  }
  .information .radius{
    width: 30px;
    height: 30px;
    display: inline-block;
    background-color: rgb(233,233,233);
    border-radius: 50%;
    color: black;
    text-align: center;
    line-height: 30px;
    font-size: 8px;
  }
  .information h3{
    font-size: 45px;
    color: red;
    margin-left: 20px;
    display: inline-block;
    margin-top: 15px;
  }
  .information .accessing{
    position: absolute;
    right: 20px;
    bottom: 20px;
    color: gray;
    font-size: 18px;
  }
  .information .accessing img{
    width: 30px;
    height: 30px;
  }
  .fee{
    background-color: rgb(248,248,248);
    padding-bottom: 40px;
  }
  .fee p{
    margin: 0 20px;
    padding-top: 20px;
  }
  .fee span{
    margin: 10px 30px;
    font-size: 18px;
    display: inline-block;
    color: gray;
  }
  .catenation{
    margin-top: 30px;
    width: 100%;
    height: 140px;
    position: relative;
    background-color: white;
  }
  .catenation a{
    display: inline-block;
    height: 80px;
  }
  .catenation a .pic{
    width: 70px;
    border-radius: 50%;
    background-color: rgb(140,46,125);
    color: white;
    line-height: 70px;
    text-align: center;
    font-size: 40px;
    height: 70px;
    position: absolute;
    left: 20px;
    top: 30px;
  }
  .catenation a div{
    position: absolute;
    left: 120px;
    top: 30px;
  }
  .catenation a div p{
    font-size: 30px;
  }
  .catenation a div span{
    color: gray;
    font-size: 20px;
  }
  .catenation a h2{
    font-size: 50px;
    color: rgb(186,186,186);
    position: absolute;
    right: 20px;
    top: 30px;
  }
  .gift{
    width: 100%;
    margin-top: 30px;
    height: 220px;
    padding: 30px 0;
    background-color: white;
  }
  .gift h2{
    font-size: 30px;
    border-left: 5px deepskyblue solid;
    margin-left: 40px;
    padding-left: 20px;
    margin-bottom: 30px;
  }
  .gift div{
    width: 25%;
    float: left;
    margin-left: 6%;
  }
  .recommend{
    width: 100%;
    margin-top: 30px;
    height: 280px;
    padding-top: 30px;
    background-color: white;
  }
  .recommend h2{
    font-size: 30px;
    border-left: 5px deepskyblue solid;
    margin-left: 40px;
    padding-left: 20px;
    margin-bottom: 30px;
  }
  .recommend ul li{
    margin-left: 40px;
    font-size: 25px;
    color: gray;
  }
  .purchase{
    margin-top: 30px;
    background-color: white;
  }
  .purchase ul li{
    border-bottom: 1px rgb(230,230,230) solid;
    height: 100px;
    line-height: 100px;
    padding-left: 30px;
  }
  .purchase ul li span{
    font-size: 28px;
    display: inline-block;
  }
  .purchase ul li h2{
    float: right;
    color: rgb(200,200,200);
    font-size: 50px;
    padding-right: 20px;
  }
  .purchase ul li p{
    float: right;
    color: gray;
    font-size: 25px;
    padding-right: 20px;
  }
  .route{
    margin-top: 30px;
    background-color: white;
  }
  .route>ul>li{
    display: inline-block;
    width: 32%;
    text-align: center;
    padding: 20px 0;
    font-size: 27px;
  }
  .route>ul .blue{
    color: dodgerblue;
  }
  .stroke{
    margin-top: 30px;
  }
  .stroke .pag{
    width: 150px;
    display: inline-block;
    background-color: dodgerblue;
    border-radius: 0 25px 25px 0;
    height: 50px;
    color: white;
    text-align: center;
    line-height: 50px;
    margin-left: 0;
    font-size: 25px;
  }
  .stroke>span{
    font-size: 30px;
    margin-left: 20px;
  }
  .stroke ul{
    width: 720px;
  }
  .stroke ul li{
    font-size: 27px;
    margin-left: 20px;
  }
  .stroke ul li p{
    display: inline-block;
    color: gray;
  }
  .stroke ul li .day{
    display: block;
    margin-left: 50px;
  }
  .stroke ul .shuoming img{
    margin-top: 20px;
  }
  .stroke ul .shuoming{
    color: gray;
  }
  .evaluate{
    background-color: white;
    /*display: none;*/
  }
  .evaluate ul .first{
    margin-top: 0;
    padding-top: 20px;
  }
  .evaluate ul li{
    margin: 50px 20px 0 30px;
  }
  .evaluate ul li span{
    font-size: 25px;
  }
  .evaluate ul li img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .evaluate ul li .date{
    float: right;
    color: gray;
    padding-top: 20px;
  }
  .evaluate ul li p{
    font-size: 22px;
    color: gray;
  }
  .evaluate>p{
    text-align: center;
    line-height: 60px;
    width: 35%;
    height: 60px;
    border: 1px gray solid;
    border-radius: 10px;
    display: inline-block;
    margin: 50px 0 30px 70px;
    font-size: 23px;
    color: gray;
  }
</style>

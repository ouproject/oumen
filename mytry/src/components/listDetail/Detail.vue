<template>
    <div class="box">
      <div class="swiper-container">
          <div class="back" @click="goBack">
            <img src="../../assets/img/back.png" />
          </div>
          <div @click="shouCang" :class="lights?'enn':'enshrine'">
            <i class="icon-star-empty"></i>
          </div>
          <div class="share" @click="share">️
            <i class="icon-redo2"></i>
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
        <div class="stroke strokeb" v-for="(v,k) in $store.state.schedulingData">
          <span class="pag">第{{k+1}}天</span>
          <span>{{v.start_addr}} - {{v.end_addr}}</span>
          <ul>
            <li>
              <img src="../../assets/img/hangban.png" />
              <span>航班：</span>
              <p>{{v.flight}}</p>
            </li>
            <li>
              <img src="../../assets/img/jiaotong.png" />
              <span>交通：</span>
              <p>{{v.vehicle}}</p>
            </li>
            <li>
              <img src="../../assets/img/canyin.png" />
              <span>餐饮：</span>
              <span class="day">{{v.foods}}</span>
            </li>
            <li>
              <img src="../../assets/img/zhusu.png" />
              <span>住宿：</span>
              <p>{{v.stay}}</p>
            </li>
            <li class="shuoming">
              <p><span style="font-weight: bold">上午：</span>{{v.morning}}</p><br>
              <p style="margin-top: 20px"><span style="font-weight: bold">下午：</span>{{v.afternoon}}</p>
              <!--<img :src="'http://10.80.7.125/MyRead/'+v.img"  v-show="v.img" />-->
              <!--<br />-->
              <!--{{v.img_title}}-->
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

       <!--分享-->
      <div class="bdsharebuttonbox shareBox" data-tag="share_1"  v-show="shareJudge">
        <a class="bds_sqq share_item" data-cmd="sqq">&nbsp;QQ</a>
        <a class="bds_tsina share_item" data-cmd="tsina" >&nbsp;微博</a>
        <a class="bds_weixin share_item" data-cmd="weixin">&nbsp;微信</a>
        <!--<a class="bds_more share_item" data-cmd="more">更多</a>-->
      </div>
    </div>
</template>

<script>
  import Swiper from 'swiper';
  function setCookie(key,value,day){
    if (day) {
      var date = new Date();
      var r = date.getDate();
      date.setDate(r + day);
      document.cookie = key+'='+value+';expires='+date;
    }else{
      document.cookie = key+'='+value;
    }
  }
  export default {
    name: "Detail",
    data:function(){
      return{
        Detail:{},
        imgurl:"",
        reson:[],
        isShow:false,
        isShows:true,
        shareJudge:false,
        lights:false
      }
    },
    mounted(){
      console.log("selScheduling--33333333------",this.$store.state.schedulingData);
      new Swiper ('.swiper-container', {
        loop: true,
        autoplay:true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })

      console.log("goods--------",this.$store.state.goodsData)
      this.Detail = this.$store.state.goodsData.sendDatas;
      this.reson = this.Detail.recommended_reasons.split(";");
      this.imgurl = 'http://10.80.7.125/MyRead/'+this.Detail.img_addr;
    },
    methods:{
      xingCheng(){
        this.isShows = true;
        this.isShow = false;
      },
      shouCang(){
        console.log("******************",this.$store.state.goodsData.sendDatas.tour_id);
        setCookie('goods',this.$store.state.goodsData.sendDatas.tour_id);
        this.lights = true;

      },
      pingJia(){
        this.isShow = true;
        this.isShows = false;
      },
      buy(){
        this.$router.push({
          path: '/time'

        })
      },
      goBack(){
        if(this.$store.state.goodsData.type=='vvip'){
            this.$router.push({
              path: '/pages'
            })
        }else if(this.$store.state.goodsData.type=='list'){
          this.$router.push({
            path: '/list',
            query:{tour_type:this.$store.state.goodsData.tour_type}
          })
        }
      },
      //分享
      share(){
          this.shareJudge = true;
          //分享
          window._bd_share_config = {
            common : {
              bdText : '自定义分享内容',
              bdDesc : '自定义分享摘要',
              bdUrl : 'http://www.baidu.com',
              bdPic : '自定义分享图片'
            },
            share : [{
              "bdSize" : 64
            }],
            slide : [{
              bdImg : 8,
              bdPos : "right",
              bdTop : 50
            }],
            image : [{
              viewType : 'list',
              viewPos : 'top',
              viewColor : 'black',
              viewSize : '32',
              viewList : ['sqq','weixin','tsina']
            }],
            selectShare : [{
              "bdselectMiniList" : ['sqq','weixin','tsina']
            }]
          };
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
    border-radius: 50%;
    opacity: 0.6;
    color: white;
    font-size: 40px;
  }
  .enn{
    color: red;
    width: 60px;
    height: 60px;
    position: absolute;
    top: 50px;
    right: 130px;
    z-index: 9;
    background-color: black;
    border-radius: 50%;
    opacity: 0.6;
    font-size: 40px;
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
    text-align: left;
    opacity: 0.6;
    font-size: 40px;
  }
  .back img{
    padding-top: 13px;
    width: 40px;
    height: 40px;
  }
  .enshrine img{
    padding-top: 5px;
  }
  .share img{
    padding-top: 5px;
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
    margin-top: 50px;
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
    /*display: block;*/
    margin-left: 20px;
  }
  .stroke ul .shuoming img{
    margin-top: 20px;
  }
  .stroke ul .shuoming{
    color: gray;
    line-height: 45px;
    margin-top: 30px;
    padding: 0 10px;
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

  /*分享*/
  .shareBox{
    width: 750px;
    height: 100px;
    background: skyblue;
    position: fixed;
    bottom:100px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }
  .share_item{
    display: inline-block;
    margin:0 20px !important;

  }
</style>

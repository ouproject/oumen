<template>
    <div style="overflow: auto;">
      <mt-header :title=tour_type class="usersheader" v-show="disTop">
        <router-link to="/pages" slot="left" >
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>

      <mt-header title="搜索结果" class="usersheader" v-show="!disTop">
        <router-link to="/pages" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>

      <ul class="orderBox" v-show="disTop">
        <li class="orderItem order01" >
          <div class="orderContent">
            <span @click="addclass1(0)" :class="activeJudge1[0]?'order_active':''"  ref="order1_content">综合排序</span>
            <i :class="activeJudge1[0]?'icon-down order_active':'icon-down'" style="font-size: 30px"></i>
          </div>
          <ul :class="disJudge?'order01_01 dis':'order01_01'" >
            <li class="order01_01_li" @click="addclass(0)" :class="activeJudge[0]?'order_active':''">
              <span >综合排序</span>
              <i :class="activeJudge[0]?'icon-duihao':''" style="font-size: 30px"></i>
            </li>
            <li @click="addclass(1)" :class="activeJudge[1]?'order_active':''">
              <span>价格从高到低</span>
              <i :class="activeJudge[1]?'icon-duihao':''"  style="font-size: 30px"></i>
            </li>
            <li @click="addclass(2)" :class="activeJudge[2]?'order_active':''">
              <span>价格从低到高</span>
              <i :class="activeJudge[2]?'icon-duihao':''"  style="font-size: 30px"></i>
            </li>
            <li @click="addclass(3)" :class="activeJudge[3]?'order_active':''">
              <span>即将出发</span>
              <i :class="activeJudge[3]?'icon-duihao':''"  style="font-size: 30px"></i>
            </li>
          </ul>
        </li>
        <li class="orderItem order02">
          <div class="orderContent" @click="addclass1(1)" :class="activeJudge1[1]?'order_active':''" style="margin-top: 6px">
            <span>关注度优先</span>
            <i style="font-size: 30px"></i>
          </div>
        </li>
        <li  class="orderItem order03">
          <div class="order03Content">
            <span @click="addclass1(2)" :class="activeJudge1[2]?'order_active':''">筛选</span>
            <i :class="activeJudge1[2]?'icon-down order_active':'icon-down'" style="font-size: 30px"></i>
          </div>
        </li>
      </ul>
      <!--列表内容-->
      <div class="pagelot" v-for="(v,k) in listData" @click="goDetail(k)">
        <div class="pagelot1">
          <img :src="'http://10.80.7.125/MyRead/'+v.img_addr">
          <span class="lothui">冬令营
            </span>
          <p class="lotwin">
            <img id="eyes" src="../../assets/img/browse.png">
            {{v.follow_num}}
          </p>
          <span class="lotbo">育</span>
        </div>
        <p class="titlelot">{{v.title}}</p>
        <p class="agelots">
          <span class="agelot">适合的年龄：</span>
          <span class="numslot">8</span><span class="numslot">9</span>
          <span class="numslot">10</span><span class="numslot">11</span>
          <span class="numslot">12</span>
        </p>
        <p>
          <span>￥{{v.new_price}}起/人</span><span class="prcienum">市场价：￥{{v.old_price}}</span>
        </p>
        <p class="wacthimg">
          <span class="wacthimg1">返</span>
          <span class="wacthimg2">精</span>
        </p>
        <p class="complimentary">
          <span class="complimentary2">{{v.gift}}</span>
        </p>
      </div>

    </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "List",
      data:function () {
        return{
          tour_type:"",
          activeColor:"deepskyblue",
          activeJudge:[true,false,false,false],
          activeJudge1:[true,false,false],
          disJudge:true,
          listData:[],
          disTop:true
        }
      },
      mounted:function () {
          //根据分类发送请求 返回数据
          if(this.$route.query.tour_type != undefined){
            this.tour_type = this.$route.query.tour_type;

            var params = new URLSearchParams();
            params.append('tour_name', this.tour_type);
            console.log("tour_name------",this.tour_type);
            this.$http.post('http://10.80.7.125/MyRead/index.php?m=Home&c=Tour&a=seltourType',params)
              .then((res) => {
                this.listData= res.data;
                console.log("listdata--------",this.listData);
              }).catch((err) => {
              console.log(err)
            })
          }

          //根据搜索
          if(this.$route.query.selwords != undefined){
            console.log("00000000000000");
            this.disTop = false;
            var keyword = this.$route.query.selwords;
            this.$http.post('http://10.80.7.125/MyRead/index.php?m=Home&c=Tour&a=mistsSel&selwords='+keyword)
              .then((res) => {
                this.listData= res.data;
                console.log(this.listData)
              }).catch((err) => {
              console.log(err)
            })
          }

      },
      methods:{
          //一级条件下面的二级条件
          addclass(index){
            var orderKey = '';
            var orderType = '';

            for(var i =0; i < this.activeJudge.length; i++){
                if(i==index){
                  Vue.set(this.activeJudge, i, true);
                  //隐藏条件
                  this.disJudge = !this.disJudge;

                  //发送请求；根据排序条件刷新数据
                  if(i==1){
                    //按价格 从高到低 desc
                    orderKey = 'new_price';
                    orderType = 'desc';
                  }else if(i==2){
                    //按价格 从低到高 desc
                    orderKey = 'new_price';
                    orderType = 'asc';
                  }else if(i==3){
                    //按出发时间 starttime:'2018-06-01',endtime:'2018-06-30'
                    orderKey = 'starttime';
                    orderType = 'asc';
                  }else if(i==0){
                    //综合排序
                    orderKey = '';
                    orderType = '';
                  }

                  var params = new URLSearchParams();
                  params.append('orderKey', orderKey);
                  params.append('orderType', orderType);
                  params.append('tour_name', this.tour_type);

                  this.$http.post('http://10.80.7.125/MyRead/index.php?m=Home&c=Tour&a=seltourType',params)
                    .then((res) => {
                      this.listData= res.data;
                      //console.log("listdata--------",this.listData);
                    }).catch((err) => {
                    console.log(err)
                  })

                }else{
                  Vue.set(this.activeJudge, i, false);
                }
            }
          },
          //一级条件
        addclass1(index){
          for(var i =0; i < this.activeJudge1.length; i++){
            if(i==index){
              Vue.set(this.activeJudge1, i, true);
            }else{
              Vue.set(this.activeJudge1, i, false);
            }
          }
          //显示/隐藏二级条件
          if(index==0 ){
              this.disJudge = !this.disJudge;
          }else{
            this.disJudge = true;
          }
        },
        //跳转到详情页
        goDetail(index){
          this.$router.push({
            path: '/detail',
            query:{type:'list',listDatas:this.listData[index],tour_type:this.tour_type}
          })
          var datas = {type:'list',sendDatas:this.listData[index],tour_type:this.tour_type};
          this.$store.dispatch('getGoodsDatail',datas);
        }
      }
    }
</script>

<style scoped>
  @import "../../assets/IcomingRyp/style.css";
  .usersheader{
    height: 80px;
    font-size: 32px;
    background-color: white;
    color: gray;
    border-bottom: 1px solid #e6e6e6;
  }
  li{
    list-style: none;
  }
  .orderBox{
    display: flex;
    align-items: center;
    border-top: 1px solid #ccc;
  }
  .orderItem{
    height: 70px;
    flex: 1;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #ccc;
    position: relative;
  }
  .orderContent{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border-right: 1px solid #ccc;
  }
  .order03Content{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }
  .orderIcon{
    margin-left: 10px;
  }
  .order01_01{
    width: 750px;
    position: absolute;
    top:80px;
    left: 20px;
    z-index: 99;
    background-color: white;
  }
  .order01_01>li{
    height: 70px;
    line-height: 70px;
    border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
  }
 .dis{
   display: none;
 }
  .order_active{
    color: deepskyblue;
  }

  /*列表内容*/
  .pagelot{
    width: 660px;
    height: 600px;
    margin-left: 40px;
    border-radius: 8px;
    margin-top: 18px;
    overflow: hidden;
    margin-bottom: 80px;

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
    background-color: rgba(7,17,27,0.4);
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
    color: orange;
  }
  .wacthimg2{
    display: inline-block;
    width: 35px;
    height: 35px;
    text-align: center;
    border-radius: 50%;
    border: 2px solid gray;
    color: #4ac0fc;
  }
</style>

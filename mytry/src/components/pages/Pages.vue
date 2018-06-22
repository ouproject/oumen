<template>
  <div class="pages">
    <div class="pagediv">
        <div class="header">
          <div class="imghe">
            <img class="imghe1" src="../../assets/img/phone.png">
            <span class="textheader">咨询</span>
          </div>
          <input v-model="currentValue" class="inpheader" type="text" placeholder="目的地、关键词等" />
          <div class="serchadd" @click="Searchs">确定</div>
        </div>
        <div class="pagelunbo">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="../../assets/img/shou1.jpg">
              </div>
              <div class="swiper-slide">
                <img src="../../assets/img/shou2.jpg">
              </div>
              <div class="swiper-slide">
                <img src="../../assets/img/shou3.jpg">
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="travelnums">
          <router-link :to="{path:'/list',query:{tour_type:'境外亲子游'}}">
            <div class="travelItem">
              <img src="../../assets/img/rb.jpg">
              <p>境外亲子游</p>
            </div>
          </router-link>

          <router-link :to="{path:'/list',query:{tour_type:'国内亲子游'}}">
            <div class="travelItem">
              <img src="../../assets/img/oz.jpg">
              <p>国内亲子游</p>
            </div>
          </router-link>

          <div class="travelItem">
            <img src="../../assets/img/yn.jpg" >
            <p>周边亲子游</p>
          </div>
          <div class="travelItem">
            <img src="../../assets/img/tg.jpg">
            <p>冬夏令营</p>
          </div>
          <div class="travelItem">
            <img src="../../assets/img/bld.jpg">
            <p>游学</p>
          </div>
          <div class="travelItem">
            <img src="../../assets/img/els.jpg">
            <p>会员注册</p>
          </div>
        </div>
    </div>
    <div class="pagenav"></div>
    <div class="pagesNactior">
      <div class="navitem">
        <span class="navitem1"></span>
        <span class="navitem2">精选亲子出行路线</span>
      </div>
      <div class="pageslots">
        <div v-for="(v,k) in vvipData" @click="Detail(k)" class="pagelot" >
            <div class="pagelot1">
              <img :src="'http://10.80.7.125/MyRead/'+v.img_addr">
              <span class="lothui">超值特惠</span>
              <span class="lotwin">冬令营</span>
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
            <img :src="'http://10.80.7.125/MyRead/'+v.img_addr">
            3456
          </p>
          <p class="complimentary" >
            <span class="complimentary1">偶们自营</span>
            <span class="complimentary2" >
              <span>随性赠送礼品：</span>
              <span v-for="(val,key) in v.gift.split(';')">{{val}}、</span>
            </span>
          </p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  // 引入轮播图插件
  import Swiper from 'swiper';

    export default {
      name: "Pages",
      data: function () {
        return {
          currentValue:this.value,
          vvipData:[],
          giftArr:[]
        }
      },
      methods: {
        Searchs() {
          this.$router.push({
            path: '/list',
            query: {
              selwords:this.currentValue
            }

          })
        },
        Detail(index){
          this.$router.push({
            path: '/detail',
            // query:{type:'vvip',datas:this.vvipData[index]}
          });
          var datas = {type:'vvip',sendDatas:this.vvipData[index]};
          this.$store.dispatch('getGoodsDatail',datas);
        }
      },
      mounted(){

        // console.log("cookie------",document.cookie['user_tel']);
        new Swiper('.swiper-container', {
          loop: true,
          autoplay: true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        })

        //发送请求--返回旅游线路数据
        this.$http.post('http://10.80.7.125/MyRead/index.php?m=Home&c=Tour&a=selvip')
          .then((res) => {
            this.vvipData= res.data;
            console.log("vvipData-------",this.vvipData);
          }).catch((err) => {
          console.log(err)
        })
      }
    }

</script>

<style scoped>
  a{
    text-decoration: none;
  }
.pagediv{
  width: 750px;
  height: 820px;
  overflow: hidden;
}
a{
  text-decoration: none;
}
  .header{
    width: 750px;
    height: 92px;
    line-height: 90px;
    /*background-color: pink;*/
    position: fixed;
    z-index: 10;
    top: 10px;
    display: flex;

  }
  .inpheader{
    width: 490px;
    height: 64px;
    border-radius: 30px;
    margin-left: 20px;
    color: #999;
    outline: none;
  }
  .imghe{
    float: left;
    margin-left: 30px;

  }
  .imghe1{
    width: 20px;
    height: 20px;
  }
  .textheader{
    color: white;
    font-size: 30px;
    font-weight: 100;
  }

  .serchadd{
    width: 90px;
    height: 80px;
    text-align: center;
    background-color: deepskyblue;
    border-radius: 20px;
    margin-left: 10px;
    color: white;
    font-size: 26px;
  }




/*轮播图的样式*/
  .pagelunbo{
    width: 750px;
    height: 410px;
  }

.swiper-container {
  width: 750px;
  height: 410px;
  /*margin: 20px auto;*/
}

  .travelnums{
    height: 360px;
    display: flex;
    flex-wrap: wrap;
  }
.travelItem{
  width: 130px;
  height: 160px;
  /*background-color: aqua;*/
  margin-left: 90px;
  margin-top: 20px;
text-align: center;
}
  .travelItem img{
    width: 100px;
    height: 100px;
    border-radius: 50%;

  }
.travelItem p{
  color: #999;
  font-size: 14px;
}
  .pagenav{
    border-top: 1px solid #999;
    width: 750px;
    height: 30px;
    background-color: #f0eff5;
  }

  .pagesNactior{

  }
  .navitem{
    margin-left: 28px;
    overflow: hidden;
  }
  .navitem1{
    display: inline-block;
    width: 10px;
    height: 45px;
    margin-top: 20px;
    float: left;
    background-color: deepskyblue;
  }
  .navitem2{
    color: #3e3e3e;
    display: inline-block;
    font-size: 28px;
    margin-top: 20px;
    margin-left: 10px;
    float: left;
  }
  .pageslots{

  }
  .pagelot{
    width: 660px;
    height: 680px;
    /*background-color: pink;*/
    margin-left: 40px;
    border-radius: 8px;
    margin-top: 18px;
    overflow: hidden;

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
    left: 0px;
    top: 20px;
    color: white;
    width: 150px;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    text-align: center;
    background-color: orange;
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
    margin-top: -35px;
  color: #bababa;
  }
  .wacthimg img{
    width: 20px;
    height: 20px;
  }
  .complimentary{
    width: 750px;
    height: 54px;
    line-height: 54px;
    margin-top: 5px;
    background-color: #f6f6f5;
  }
  .complimentary1{
    display: inline-block;
    width: 100px;
    height: 30px;
    line-height: 30px;
    background-color: red;
    color: white;
    border-radius: 20px;

  }
  .complimentary2{
    font-size: 8px;
    color: #9b338a;
  }
</style>

<template>
  <div class="pages">
    <div class="pagediv">
        <div class="header">
          <div class="imghe">
            <img class="imghe1" src="../../assets/img/phone.png">
            <span class="textheader">咨询</span>
          </div>
          <input class="inpheader" type="text" placeholder="搜索目的地、关键词、年龄等" />
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
            <!-- 如果需要滚动条 -->
            <div class="swiper-scrollbar"></div>
          </div>
        </div>
        <div class="travelnums">
          <div class="travelItem">
            <img src="../../assets/img/rb.jpg">
            <p>境外亲子游</p>
          </div>
          <div class="travelItem">
            <img src="../../assets/img/oz.jpg">
            <p>国内亲子游</p>
          </div>
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
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
    export default {
        name: "Pages",
        mounted(){
          new Swiper ('.swiper-container', {
            loop: true,
            // 如果需要分页器
            pagination: '.swiper-pagination',
            // 如果需要前进后退按钮
            // 如果需要滚动条
            scrollbar: '.swiper-scrollbar',
          })
        }
    }

</script>

<style scoped>
.pagediv{
  width: 750px;
  height: 820px;
  overflow: hidden;
}
  .header{
    width: 750px;
    height: 92px;
    line-height: 90px;
    /*background-color: pink;*/
    position: fixed;
    z-index: 10;

  }
  .inpheader{
    width: 550px;
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

  }
  .navitem1{
    width: 10px;
    height: 20px;
  }
</style>

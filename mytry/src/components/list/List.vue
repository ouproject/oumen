<template>
    <div>
      <mt-header :title=tour_type class="usersheader">
        <router-link to="/pages" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <ul class="orderBox">
        <li class="orderItem order01">
          <div class="orderContent">
            <span class="order_active">综合排序</span>
            <i class="icon-down" style="font-size: 30px"></i>
          </div>
          <ul class="order01_01">
            <li class="order01_01_li">
              <span class="order_active">综合排序</span>
              <i class="icon-duihao" style="font-size: 30px"></i>
            </li>
            <li>价格从高到低</li>
            <li>价格从低到高</li>
            <li>即将出发</li>
          </ul>
        </li>
        <li class="orderItem order02">
          <div class="orderContent">关注度优先</div>
        </li>
        <li  class="orderItem order03">
          <div class="order03Content">
            <span>筛选</span>
            <!--<img class="orderIcon" src="../../assets/img/down.png" alt="">-->
          </div>

        </li>

      </ul>

    </div>
</template>

<script>
    export default {
        name: "List",
      data:function () {
        return{
          tour_type:""
        }
      },
      mounted:function () {
          this.tour_type = this.$route.query.tour_type;
          console.log(this.$route.query.tour_type)
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
    /*justify-content: space-around;*/
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
    margin-top: 10px;
    padding: 5px;
    border-right: 1px solid #ccc;
  }
  .order03Content{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
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
  }
  .order01_01>li{
    height: 70px;
    line-height: 70px;
    border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
  }
  .icon-duihao{
    margin-right: 50px;
  }
  .order_active{
    color: deepskyblue;
  }
</style>

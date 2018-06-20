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
            <span>综合排序</span>
            <img class="orderIcon" src="../../assets/img/down.png" alt="">
          </div>
          <!--<ul>-->
            <!--<li>综合排序</li>-->
            <!--<li>价格从高到低</li>-->
            <!--<li>价格从低到高</li>-->
            <!--<li>即将出发</li>-->
          <!--</ul>-->
        </li>
        <li class="orderItem order02">
          <div>关注度优先</div>
        </li>
        <li  class="orderItem order03">
          <div>筛选</div>
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
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #ccc;
  }
  .orderItem{
    height: 50px;
    padding: 20px;
    border-right: 1px solid #ccc;
  }
  .orderContent{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 10px;
  }
</style>

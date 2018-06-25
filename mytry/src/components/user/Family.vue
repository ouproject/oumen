<template>
  <div>
      <mt-header title="我的家庭成员" class="usersheader">
        <router-link to="/mine" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div>
        <div class="mineline"></div>
        <router-link :to="{path:'/familynum'}">
          <div class="adds">
            <img class="add" src="../../assets/img/add.png">
            <p class="addpeson">添加家人信息</p>
          </div>
        </router-link>
        <div class="mineline"></div>
        <div>
          <div class="names">
            <p class="usersheaders">大宝宝</p>
            <p class="xian">6岁</p>
            <div class="useright">
              <img src="../../assets/img/arrow-right.png">
            </div>
          </div>
          <div class="names">
            <p class="usersheaders">大宝宝</p>
            <p class="xian">6岁</p>
            <div class="useright">
              <img src="../../assets/img/arrow-right.png">
            </div>
          </div>
          <div class="names">
            <p class="usersheaders">大宝宝</p>
            <p class="xian">6岁</p>
            <div class="useright">
              <img src="../../assets/img/arrow-right.png">
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "Family"
    }
</script>

<style scoped>
  a {
    text-decoration: none;
  }
  .router-link-active {
    text-decoration: none;
  }
  .usersheader{
    height: 80px;
    font-size: 32px;
    background-color: white;
    color: #62c4f6;
    border-bottom: 1px solid #e6e6e6;
  }
  .mineline{
    height: 32px;
    width: 100%;
    background-color: #f0eff5;
  }
  .add{
    width: 50px;
    height: 50px;
    margin-left: 10px;
  }
  .adds{
    display: flex;
    align-items: center;
    height: 88px;
    border-top: 1px solid #e6e6e6;
  }
  .addpeson{
    color: #62c4f6;
    font-size: 28px;
    margin-left: 10px;
  }
  .names{
    height: 90px;
    margin-left: 20px;
    width: 730px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f9f9f9;
  }
  .xian{
    margin-left: 74%;
    color: #8e8e8e;
    font-size: 26px;
  }

  .contentright img{
    width: 30px;
    height: 30px;
  }
  .usersheaders{
    color: #3d3d3d;
    font-size: 28px;
  }
  .useright{
    margin-left: 10px;

  }
  .useright img{
    width: 30px;
    height: 30px;

  }
</style>

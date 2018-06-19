<template>
<div>

  <mt-header title="个人资料" class="usersheader">
    <router-link to="/mine" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
  </mt-header>
  <div>
    <div class="userline"></div>
    <div>
      <div class="usersimg">
        <div class="usersheaders">头像</div>
        <div class="userleft">
          <img src="../../assets/img/users999.jpg">
        </div>
        <div class="useright">
          <img src="../../assets/img/arrow-right.png">
        </div>
      </div>
      <div class="names">
        <p class="usersheaders">昵称</p>
        <p class="xian">小仙女</p>
        <div class="useright">
          <img src="../../assets/img/arrow-right.png">
        </div>
      </div>
      <div class="names">
        <p class="usersheaders">会员</p>
        <p class="xian" id="xian">普通会员</p>
        <div class="useright">
          <img src="../../assets/img/arrow-right.png">
        </div>
      </div>
    </div>
    <div class="userline"></div>
    <div>
      <div class="names">
        <p class="usersheaders">姓名</p>
        <p class="xian">小乌龟</p>
        <div class="useright">
          <img src="../../assets/img/arrow-right.png">
        </div>
      </div>
      <div class="names">
        <p class="usersheaders">性别</p>
        <p class="xian" id="sexnum">男</p>
        <div class="useright">
          <img src="../../assets/img/arrow-right.png">
        </div>
      </div>
      <div class="names">
        <p class="usersheaders">手机号</p>
        <p class="xian" id="phonenum">18056595673</p>
        <div class="useright">
          <img src="../../assets/img/arrow-right.png">
        </div>
      </div>
    </div>
    <div class="userline"></div>
    <div>
      <div class="names">
        <p class="usersheaders">孩子数量</p>
        <p class="xian">2</p>
        <div class="useright">
          <img src="../../assets/img/arrow-right.png">
        </div>
      </div>
      <div class="names">
        <p class="usersheaders">姓名</p>
        <p class="xian" id="bao">宝宝</p>
        <div class="useright">
          <img src="../../assets/img/arrow-right.png">
        </div>
      </div>
      <div class="names">
        <p class="usersheaders">性别</p>
        <p class="xian" id="sexnums">女</p>
        <div class="useright">
          <img src="../../assets/img/arrow-right.png">
        </div>
      </div>
      <div class="names">
        <p class="usersheaders">出生日期</p>
        <p class="xian" id="times">2018-5-9</p>
        <div class="useright">
          <img src="../../assets/img/arrow-right.png">
        </div>
      </div>
    </div>
  </div>


</div>
</template>

<script>
  import Vue from 'vue'
  // import { Header } from 'mint-ui';
  // Vue.component(Header.name, Header);
    export default {
        name: "user"
    }
</script>

<style scoped>
.usersheader{
  height: 80px;
  font-size: 28px;
  background-color: white;
  color: gray;
  border-bottom: 1px solid #e6e6e6;
}
  .userline{
    height: 32px;
    width: 100%;
    background-color: #f9fafa;
  }
  .usersimg{
    height: 140px;
    margin-left: 20px;
    width: 730px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f9f9f9;
  }
  .usersheaders{
    color: #bdbdbd;
    font-size: 32px;
  }
  .useright{
    margin-left: 10px;

  }
.useright img{
  width: 30px;
  height: 30px;

}
  .userleft{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    margin-left: 70%;

  }
  .userleft img{
    width: 80px;
    height: 80px;
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
    margin-left: 70%;
    color: #8e8e8e;
    font-size: 26px;
  }
  #xian{
    margin-left: 67%;
  }
.contentright img{
    width: 30px;
    height: 30px;
}
  #phonenum{
    margin-left: 52%;
  }
  #sexnum{
    margin-left: 76%;
  }
  #times{
    margin-left: 55%;
  }
  #sexnums{
    margin-left: 76%;
  }
  #bao{
    margin-left: 73%;
  }
</style>

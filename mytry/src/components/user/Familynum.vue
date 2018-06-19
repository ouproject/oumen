<template>
    <div>
      <mt-header title="家人信息" class="usersheader">
        <router-link to="/family" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="mineline"></div>
      <div >
        <div class="familyfrist">
          <p class="familyfrist1">我的家人</p>
          <select class="familyfrist2">
            <option>儿童</option>
            <option>成人</option>
          </select>
        </div>
        <div class="familyfrist">
          <p class="familyfrist1">姓名</p>
          <input class="familyfrist2 familyp" />
        </div>
        <div class="familyfrist">
          <p class="familyfrist1">性别</p>
          <select class="familyfrist2">
            <option>男</option>
            <option>女</option>
          </select>
        </div>
        <div class="familyfrist">
          <p class="familyfrist1">出生日期</p>
          <input type="date" class="familyfrist2 familyp1" />
        </div>
      </div>
      <div class="mineline"></div>
      <div>
        <div class="familyfrist">
          <p class="familyfrist1">证件类型</p>
          <select class="familyfrist2">
            <option>护照</option>
            <option>身份证</option>
          </select>
        </div>
        <div class="familyfrist">
          <p class="familyfrist1">证件号</p>
          <input class="familyfrist2 familyp2" />
        </div>
        <div class="familyfrist">
          <p class="familyfrist1">手机号</p>
          <input placeholder="必填" class="familyfrist2 familyp2" />
        </div>
      </div>
      <div class="mineline"></div>
      <div class="numbottom">
        <div class="addnum">保存</div>
        <div class="delnum">删除</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Familynum"
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
  .all{
    width: 100%;
    height: 100%;
    background-color: #f0eff5;
  }
  .mineline{
    height: 32px;
    width: 100%;
    background-color: #f0eff5;
  }
  .familyfrist{
    display: flex;
    flex: 10;
    height: 90px;
    align-items: center;
    /*background-color: deepskyblue;*/
    margin-left: 20px;
    border-bottom: 2px solid  #e6e6e6;
  }
  .familyfrist1{
    flex: 8;
    font-size: 28px;
    color: #6b6b6b;
    /*background-color: orange;*/
  }
  .familyfrist2{
    flex: 1;
    color: #6b6b6b;
    /*background-color: pink;*/
  }
  .familyp{
    flex: 1.5;
    width: 60px;
  }
  .familyp1{
    flex:4;
    width: 400px;
    text-align: right;
  }
  .familyp2{
    flex: 4.3;
    width: 406px;
    text-align: right;
    padding-right: 25px;
  }
  .numbottom{
    height: 100px;
    display: flex;
    /*background-color: deepskyblue;*/
    width: 100%;

  }
  .addnum{
    margin-left: 70px;
    display: flex;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
    color: #7fd8fd;
    width: 200px;
    border: 2px solid  #e6e6e6;
    border-radius: 50px;
  }
  .delnum{
    margin-left: 200px;
    display: flex;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
    color: #ff7138;
    width: 200px;
    border: 2px solid  #e6e6e6;
    border-radius: 50px;
  }
</style>

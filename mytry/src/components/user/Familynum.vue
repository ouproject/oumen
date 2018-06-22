<template>
    <div>

      <mt-header title="家人信息" class="usersheader">
        <router-link to="/family" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="mineline"></div>
      <form id="familynums" name="familynums" >
        <div>
          <div class="familyfrist">
            <p class="familyfrist1">我的家人</p>
            <select v-model="obj.persons" class="familyfrist2">
              <option>儿童</option>
              <option>成人</option>
            </select>
          </div>
          <div class="familyfrist">
            <p class="familyfrist1">姓名</p>
            <input v-model="obj.persons1" class="familyfrist2 familyp" />
          </div>
          <div class="familyfrist">
            <p class="familyfrist1">性别</p>
            <select v-model="obj.persons2" class="familyfrist2">
              <option>男</option>
              <option>女</option>
            </select>
          </div>
          <div class="familyfrist">
            <p class="familyfrist1">出生日期</p>
            <input v-model="obj.persons3" type="date" class="familyfrist2 familyp1" />
          </div>
        </div>
        <div class="mineline"></div>
        <div>
          <div class="familyfrist">
            <p class="familyfrist1">证件类型</p>
            <select v-model="obj.persons4" class="familyfrist2">
              <option>护照</option>
              <option>身份证</option>
            </select>
          </div>
          <div class="familyfrist">
            <p class="familyfrist1">证件号</p>
            <input v-model="obj.persons5" class="familyfrist2 familyp2" />
          </div>
          <div class="familyfrist">
            <p class="familyfrist1">手机号</p>
            <input v-model="obj.persons6" placeholder="必填" class="familyfrist2 familyp2" />
          </div>
        </div>
        <div class="mineline"></div>
        <div class="numbottom">
          <div class="addnum" @click="addFanum">保存</div>
          <div class="delnum">删除</div>
        </div>
      </form>
      <!--<form >-->
       <!--测试 <input type="text">-->
      <!--</form>-->
    </div>
</template>

<script>
    export default {
        name: "Familynum",
      data:function () {
        return{
          num:1,
          obj:{
            persons:'',
            persons1:'',
            persons2:'',
            persons3:'',
            persons4:'',
            persons5:'',
            persons6:'',
          }


        }

      },
      mounted:function () {


      },
      methods:{
        addFanum(){
          //发送请求

          // event.preventDefault();
          // let formData = new FormData();
          // FormData.append('persons',this.texts)

          var reg_form = document.getElementById("familynums");
          var formdata = new FormData(reg_form);
          // formdata.append("test","112121");
          //   console.log(formdata);

          let config = {
            'Content-Type': "multipart/form-data",
            'contentType': false,//必须
            'processData': false,//必须

          };
          //
          //
          // var params = new URLSearchParams();
          // params.append('persons', this.persons);
          // params.append('persons1', this.persons1);
          // params.append('persons2', this.persons2);
          // params.append('persons3', this.persons3);
          // params.append('persons4', this.persons4);
          // params.append('persons5', this.persons5);
          // params.append('persons6', this.persons6);
          // console.log(formdata);


          // params.append('orderType', orderType);
          // params.append('tour_name', this.tour_type);

          console.log(this.obj);
          this.$http.post('http://10.80.7.125/MyRead/index.php?m=Home&c=Tour&a=add_family_info',formdata,config)
            .then((res) => {
              console.log(res)
            }).catch((err) => {
            console.log(err)
          })
        }
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

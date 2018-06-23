<template>
    <div>
      <div class="mineheader">
         <router-view></router-view>
          <router-link tag="span" :to="{path:'/user'}">
            <div class="mineimg">
              <img src="../../assets/img/userhe.png">
            </div>
          </router-link>
          <div class="logins">
            <!--<span>登录</span>-->
            <!--<span>/注册</span>-->
            <router-link tag="span" :to="{path:'/login'}">登录</router-link>
            <router-link tag="span" :to="{path:'/register'}">注册</router-link>
          </div>
          <div class="minebottom">
            <div class="minebottom1">
              <img src="../../assets/img/cart.png">
              <span>爱心红包</span>
            </div>
            <div class="minebottom2">
              <img src="../../assets/img/comments.png">
              <span>我的消息</span>
            </div>
          </div>
      </div>
      <div class="mineline"></div>
      <div class="minenav">
        <!--<router-link tag="span" :to="{path:'/order'}">-->
          <div class="mineorder">
            <div class="orderimg">
              <img src="../../assets/img/copy.png">
            </div>
            <div class="myorder" @click="selOrder">我的订单</div>
            <div class="oderimgs">
              <img src="../../assets/img/arrow-right.png">
            </div>
          </div>
        <!--</router-link>-->
        <router-link :to="{path:'/collect'}">
          <div class="mineorder">
            <div class="orderimg" id="orderimg1">
              <img src="../../assets/img/favorite.png">
            </div>
              <div class="myorder">我的收藏</div>

            <div class="oderimgs">
              <img src="../../assets/img/arrow-right.png">
            </div>
          </div>
        </router-link>
        <div class="mineorder">
          <div class="orderimg" id="orderimg2">
            <img src="../../assets/img/gifts.png">
          </div>
          <p class="myorder">我的代金券</p>
          <div class="oderimgs" id="oderimgs">
            <img src="../../assets/img/arrow-right.png">
          </div>
        </div>
      </div>
      <div class="mineline"></div>
      <div>
        <router-link :to="{path:'/family'}">
          <div class="mineorder">
            <div class="orderimg" id="person">
              <img src="../../assets/img/personal-center1.png">
            </div>
            <div class="myorder">我的家庭成员</div>
            <div class="oderimgs">
              <img src="../../assets/img/arrow-right.png">
            </div>
          </div>
        </router-link>
        <div class="mineorder">
          <div class="orderimg" id="sets">
            <img src="../../assets/img/set.png">
          </div>
          <div class="myorder">设置</div>
          <div class="oderimgs">
            <img src="../../assets/img/arrow-right.png">
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
        name: "Mine",
        data:function(){
            return {
              tel:""
            }
        },
      mounted:function(){
          console.log("tel----------",this.$route.query.tel);
      },
        methods:{
          //点击查看订单--判断是否是登陆状态

          selOrder(){
            if(this.$store.state.loginTel == ''){
              this.$router.push({
                path: '/login',
              });
            }else {
              var params = new URLSearchParams();
              params.append('reg_tel', this.$store.state.loginTel);
              // params.append('persons1', this.persons1);
              this.$http.post('http://10.80.7.125/MyRead/index.php?m=Home&c=Tour&a=selOrder',params)
                .then((res) => {
                  console.log("9999999999999999",res.data);
                }).catch((err) => {
                console.log(err)
              })

              this.$router.push({
                path: '/order',
              });
            }

          }
        }
    }
</script>

<style scoped>
.mineheader{
  width: 750px;
  height: 420px;
  background-image: url("../../assets/img/minebg.jpg");
  background-size: 750px;
  background-repeat: no-repeat;
  overflow: hidden;
}
  .mineimg {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    left: 45%;
    margin-top: 100px;
  }
.mineimg img{
  width: 100px;
  height: 100px;
}
  .logins{
    position: relative;
    left: 45%;
    margin-top: 20px;
    color: white;
  }
  .minebottom{
    height: 80px;
    width: 100%;
    position: relative;
    bottom: -90px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(7,17,27,0.4);
  }
  .minebottom1{
    color: white;
    flex: 1;
    text-align: center;
    border-right: 1px solid white;
  }
  .minebottom1 img{
    width: 20px;
    height: 20px;
  }
  .minebottom2 {
    color: white;
    font-weight: 200;
    flex: 1;
    text-align: center;

  }
.minebottom2 img{
  width: 20px;
  height: 20px;
}



  .mineline{
    height: 32px;
    width: 100%;
    background-color: #f0eff5;
  }
  .minenav{
    height: 262px;
    width: 100%;
  }
  .mineorder{
    height: 90px;
    margin-left: 30px;
    line-height: 90px;
    width: 720px;
    align-items: center;
    overflow: hidden;
    border-bottom: 2px solid #e8e8e8;

  }
  .orderimg{
    width: 60px;
    height: 60px;
    display: flex;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    float: left;
    margin-top: 15px;
    background-color: #ff972c;
  }
  #orderimg1{
    background-color: #00c5b8;
  }
  #orderimg2{
      background-color:#f8544a;
    }
  #person{
    background-color: #85be4b;
  }
  #sets{
    background-color: #3990f4;
  }
  .orderimg img{
    width: 40px;
    height: 40px;
  }
  .myorder{
   margin-left: 20px;
    font-size: 28px;
    color: #999;
    float: left;
  }
  .oderimgs{
    margin-left: 90%;
    width: 20px;
    margin-top: 15px;
  }
  .oderimgs img{
    width: 40px;
    height: 40px;

  }

</style>

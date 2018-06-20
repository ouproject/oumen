<template>
    <div>
      <mt-header title="填写信息" class="usersheader">
        <router-link to="/pages" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div id="calendar">
        <!-- 年份 月份 -->
        <div class="month">
          <ul>
            <!--点击会触发pickpre函数，重新刷新当前日期 @click(vue v-on:click缩写) -->
            <li class="arrow" @click="pickPre(currentYear,currentMonth)">❮</li>
            <li class="year-month" @click="pickYear(currentYear,currentMonth)">
              <span class="choose-month">{{ currentMonth }}月</span>
              <span class="choose-year">{{ currentYear }}</span>

            </li>
            <li class="arrow" @click="pickNext(currentYear,currentMonth)">❯</li>
          </ul>
        </div>
        <!-- 星期 -->
        <ul class="weekdays">
          <li>一</li>
          <li>二</li>
          <li>三</li>
          <li>四</li>
          <li>五</li>
          <li style="color:red">六</li>
          <li style="color:red">日</li>
        </ul>
        <!-- 日期 -->
        <ul class="days">
          <li  v-for="dayobject in days">
            <!--本月-->
            <!--如果不是本月  改变类名加灰色-->
            <span v-if="dayobject.day.getMonth()+1 != currentMonth" class="other-month">{{ dayobject.day.getDate() }}</span>

            <!--如果是本月  还需要判断是不是这一天-->
            <span v-else>
          <!--今天  同年同月同日-->
                <span v-if="dayobject.day.getFullYear() == new Date().getFullYear() && dayobject.day.getMonth() == new Date().getMonth() && dayobject.day.getDate() == new Date().getDate()" class="active">{{ dayobject.day.getDate() }}</span>
                <span v-else>{{ dayobject.day.getDate() }}</span>
            </span>
            <!--显示剩余多少数量-->
            <p v-if="leftobj[dayobject.index]">剩余：<span style="color: red" >{{leftobj[dayobject.index].count}}</span></p>
            <!---->
            <!--<button @click="order(dayobject)" v-if="leftobj[dayobject.index]">预定</button>-->
          </li>
        </ul>
      </div>
      <div>
        <div class="mineline"></div>
        <div class="timeperson">
          <p class="timeperson1">选择出行人数</p>
          <div class="timeadd">
            <div class="addperson">
                <div class="addperson1">
                  <span class="addspan1">
                    <span class="delnum1" @click="delnum1">-</span>
                    <span class="nummber1 nummbersone">{{num}}</span>
                    <span class="addnum1" @click="addnum1">+</span>
                  </span>
                  <span class="addspan2">成人</span>
                </div>
                <p class="moneynums1">￥{{prices}}</p>
            </div>
            <div class="addchild">
              <div class="addperson1">
                  <span class="addspan1">
                    <span class="delnum1" @click="delnum2">-</span>
                    <span class="nummber1">{{nummber}}</span>
                    <span class="addnum1" @click="addnum2">+</span>
                  </span>
                <span class="addspan2">儿童</span>
              </div>
              <p class="moneynums1">￥{{prices1}}</p>
            </div>
          </div>
        </div>
        <div class="mineline"></div>
        <div class="zhu">
          <p class="zhu1">关于儿童定价的特别提醒</p>
          <p class="zhu2">儿童定价标准：年龄2-12周岁，不占床，含往返机票、半价、正餐、旅游车车位、不含门票、早餐</p>
        </div>
        <div class="timefoot">
          <div class="bottoms">
            <p class="bottoms1">
              <span>出发时间：</span>
              <span class="timenum">2015-08-12</span>
            </p>
            <p class="bottoms2">
              <span>出行人数:</span>
              <span class="timenum">{{num}}成人 {{nummber}}儿童</span>
            </p>
          </div>
          <div class="infowrite">
            <span class="infowrite1">填写信息</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "WriteTime",
        data: function () {
          return {
            num:0,
            nummber:0,
            prices:36700,
            prices1:26700,
            currentDay: 1,
            currentMonth: 1,
            currentYear: 1970,
            currentWeek: 1,
            days: [],
            leftobj:[    //存放剩余数量
              {count:1},
              {count:2},
              {count:3},
              {count:4},
              {count:5},
            ]
          }
        },
      created: function() {  //在vue初始化时调用
        this.initData(null);
      },
      methods: {
        delnum1(){
          this.prices =36700;
          if(this.num>0){
            this.num--;
            this.prices = this.prices * this.num;
          }
        },
        addnum1(){
            this.num++;
            this.prices = this.prices * this.num;
        },
        delnum2(){
          this.prices1 =26700;
          if(this.nummber>0){
            this.nummber--;
            this.prices1 = this.prices1 * this.nummber;
          }
        },
        addnum2(){
          this.nummber++;
          this.prices1 = this.prices1 * this.nummber;
        },
        order:function (day) {  //预定函数
          if(this.leftobj[day.index].count>=1)
            this.leftobj[day.index].count--;
          else
            alert('已经没有位置了')
        },
        initData: function(cur) {
          var leftcount=0; //存放剩余数量
          var date;
          var index=0;   //控制显示预定的天数 ，比如下面设置只能预定三天的
          //this.initleftcount(); 每次初始化更新数量
          //有两种方案  一种是每次翻页 ajax获取数据初始化   http请求过多会导致资源浪费
          // 一种是每次请求 ajax获取数据初始化    数据更新过慢会导致缺少实时性
          //还可以setTimeout 定时请求更新数据  实现数据刷新（可能会更好）
          if (cur) {
            date = new Date(cur);
          } else {
            var now=new Date();
            var d = new Date(this.formatDate(now.getFullYear() , now.getMonth() , 1));
            d.setDate(35);
            date = new Date(this.formatDate(d.getFullYear(),d.getMonth() + 1,1));
          }
          this.currentDay = date.getDate();
          this.currentYear = date.getFullYear();
          this.currentMonth = date.getMonth() + 1;

          this.currentWeek = date.getDay(); // 1...6,0
          if (this.currentWeek == 0) {
            this.currentWeek = 7;
          }
          var str = this.formatDate(this.currentYear , this.currentMonth, this.currentDay);
          this.days.length = 0;
          // 今天是周日，放在第一行第7个位置，前面6个
          //初始化本周
          for (var i = this.currentWeek - 1; i >= 0; i--) {
            var d = new Date(str);
            d.setDate(d.getDate() - i);

            var dayobject={};
            dayobject.day=d;
            var now=new Date();
            if(d.getDate()===(now.getDate())&&d.getMonth()===now.getMonth()&&d.getFullYear()===now.getFullYear())
            {
              dayobject.index=index++;//从今天开始显示供预定的数量
            }
            else  if(index!=0&&index<3)
              dayobject.index=index++;//从今天开始3天内显示供预定的数量
            this.days.push(dayobject);//将日期放入data 中的days数组 供页面渲染使用
          }
          //其他周
          for (var i = 1; i <= 35 - this.currentWeek; i++) {
            var d = new Date(str);
            d.setDate(d.getDate() + i);
            var dayobject={};
            dayobject.day=d;
            var now=new Date();
            if(d.getDate()===(now.getDate())&&d.getMonth()===now.getMonth()&&d.getFullYear()===now.getFullYear())
            {
              dayobject.index=index++;
            }

            else if(index!=0&&index<3)
              dayobject.index=index++;
            this.days.push(dayobject);
          }

        },
        pickPre: function(year, month) {
          // setDate(0); 上月最后一天
          // setDate(-1); 上月倒数第二天
          // setDate(dx) 参数dx为 上月最后一天的前后dx天
          var d = new Date(this.formatDate(year , month , 1));
          d.setDate(0);
          this.initData(this.formatDate(d.getFullYear(),d.getMonth() + 1,1));
        },
        pickNext: function(year, month) {
          var d = new Date(this.formatDate(year , month , 1));
          d.setDate(35);
          this.initData(this.formatDate(d.getFullYear(),d.getMonth() + 1,1));
        },
        pickYear: function(year, month) {
          alert(year + "," + month);
        },

        // 返回 类似 2016-01-02 格式的字符串
        formatDate: function(year,month,day){
          var y = year;
          var m = month;
          if(m<10) m = "0" + m;
          var d = day;
          if(d<10) d = "0" + d;
          return y+"-"+m+"-"+d
        }
      }

    }

</script>

<style>
  .usersheader{
    height: 80px;
    font-size: 32px;
    background-color: white;
    color: gray;
    border-bottom: 1px solid #e6e6e6;
  }
  .mineline{
    height: 32px;
    width: 100%;
    background-color: #f0eff5;
  }
  .timeperson{
    color: #6b6b6b;
    font-size: 28px;
    background-color: white;

  }
  .timeperson1{
    padding: 30px 0px 30px 20px;
  }
  .timeadd{
    width: 100%;
    height: 160px;
    /*background-color: pink;*/
    display: flex;
  }
  .addperson{
    flex: 1;
    /*background-color: deepskyblue;*/
  }
  .addchild{
    flex: 1;
    /*background-color: yellow;*/
  }
  * {
    box-sizing: border-box;
    font-size: 14px;
  }

  ul {
    list-style-type: none;
  }

  body {
    font-family: Verdana, sans-serif;
    background: #E8F0F3;
  }
  #calendar{
    width:100%;
    /*height: 800px;*/
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.1), 0 1px 5px 0 rgba(0,0,0,0.12);
  }
  .month {
    width: 100%;
    background: #00B8EC;
  }

  .month ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }

  .year-month {
    display: flex;
    /*flex-direction: column;*/
    align-items: center;
    justify-content: space-around;
  }

  .year-month:hover {
    background: rgba(150, 2, 12, 0.1);
  }

  .choose-year {
    padding-left: 20px;
    padding-right: 20px;
  }

  .choose-month {
    text-align: center;
    font-size: 32px;
  }

  .arrow {
    padding: 30px;
  }

  .arrow:hover {
    background: rgba(100, 2, 12, 0.1);
  }

  .month ul li {
    color: white;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  .weekdays {
    margin: 0;
    padding: 10px 0;
    background-color: #00B8EC;
    display: flex;
    flex-wrap: wrap;
    color: #FFFFFF;
    justify-content: space-around;
  }

  .weekdays li {
    display: inline-block;
    width: 70px;
    text-align: center;
  }

  .days {
    padding: 0;
    background: #FFFFFF;
    margin: 0;
    display: flex;
    height: 520px;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .days li {
    list-style-type: none;
    display: inline-block;
    width: 14.2%;
    height: 60px;
    text-align: center;
    padding-bottom: 15px;
    padding-top: 15px;
    font-size: 1rem;
    color: #000;
  }

  .days li .active {
    padding: 6px 10px;
    border-radius: 50%;
    background: #00B8EC;
    color: #fff;
  }

  .days li .other-month {
    padding: 5px;
    color: gainsboro;
  }

  .days li:hover {
    background: #e1e1e1;
  }



  .addperson1{
    text-align: center;
  }


  .addspan1{
    display: inline-block;
    width: 200px;
    height: 100px;
    line-height: 100px;
    /*background-color: pink;*/
    text-align: center;
    border: 2px solid #e1e1e1;
  }
  .addspan2{

  }
  .moneynums1{
    color: orange;
    margin-left: 60px;
  }
  .delnum1{
    display: inline-block;
    width: 60px;
    height: 40px;
    line-height: 40px;
    font-size: 32px;
    text-align: center;
    /*background-color: rebeccapurple;*/
    border-right:2px solid #e1e1e1;
    box-sizing: border-box;
  }
  .addnum1{
    display: inline-block;
    width: 60px;
    height: 40px;
    line-height: 40px;
    font-size: 32px;
    text-align: center;
    /*background-color: red;*/
    border-left:2px solid #e1e1e1;
    box-sizing: border-box;
  }
  .nummber1{
   display: inline-block;
    width: 50px;
  }
  .zhu{
    overflow: hidden;
    /*background-color: blue;*/
    height: 150px;
  }
  .zhu1{
    /*background-color: orange;*/
    margin-top: 20px ;
    padding-left: 20px;
    font-size: 28px;
  }
  .zhu2{
    /*background-color: pink;*/
    padding-left: 20px;
    font-size: 22px;
    color: #b1b2b3;
  }

  .timefoot{
    position: relative;
    height: 120px;
    width: 100%;
    display: flex;
    background-color: white;
    z-index: 6;
  }

  .bottoms{
    flex: 1;
  }
  .bottoms1{
    background-color: white;
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
  }

  .bottoms2{
    /*background-color: skyblue;*/
    height: 50px;
    line-height: 50px;
    padding-left: 20px;

  }

  .infowrite{
    flex: 1;
  }
  .infowrite1{
    display: inline-block;
    height: 100px;
    line-height: 100px;
    width: 320px;
    color: white;
    background-color: orange;
    text-align: center;
    border-radius: 40px;
    margin-left: 20px;
    margin-top: 5px;
  }
  .timenum{
    color: orange;
  }






</style>

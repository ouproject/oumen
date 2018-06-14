<template>
  <div class="pages">
    <div class="pagediv">
        <div class="header">
          <div class="imghe">
            <img class="imghe1" src="../../assets/img/phone.png">
            <span class="textheader">咨询</span>
          </div>
          <input class="inpheader" type="text" />
        </div>
    </div>
    <div></div>
  </div>
</template>

<script>
    export default {
        name: "Pages"
    }
</script>

<style scoped>
.pagediv{
  width: 750px;
  height: 820px;
  background-color: indianred;
}
  .header{
    width: 750px;
    height: 92px;
    line-height: 92px;
    background-color: pink;

  }
  .inpheader{
    width: 400px;
    height: 64px;
    border-radius: 30px;
    margin-left: 30px;
  }
  .imghe{
    float: left;
    background-color: orange;
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
</style>

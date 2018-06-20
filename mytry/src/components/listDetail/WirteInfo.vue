<template>
  <div class="writeContainer">
    <vue-event-calendar :events="demoEvents" @monthChanged="" @dayChanged=""></vue-event-calendar>
  </div>

</template>

<script>
  export default {
    name: "WirteInfo",
    data () {
      return {
        demoEvents: [{
          date: '2016/12/15',
          title: 'eat',
          desc: 'longlonglong description'
        },{
          date: '2016/11/12',
          title: 'this is a title'
        }]
      }
    },
    methods: {
      monthChange (month) {
        console.log(month)
      },
      dayChange (day) {
        console.log(day)
      }
    }
  }
</script>

<style scoped>
  .writeContainer{
    width: 100%;
    height: 100%;
    font-size: 12px;
  }

</style>

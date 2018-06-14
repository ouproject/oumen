<template>
<div>

  <mt-header title="你好" style="height: 50px">
    <router-link to="/mine" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
  </mt-header>



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

</style>

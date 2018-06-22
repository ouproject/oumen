// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import 'swiper/dist/css/swiper.css';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import Axios from 'axios';
import store from './store';
import $ from 'jquery'


// import 'vue-event-calendar/dist/style.css' //1.1.10之后的版本，css被放在了单独的文件中，方便替换
// import vueEventCalendar from 'vue-event-calendar'
// Vue.use(vueEventCalendar, {locale: 'en'}) //可以设置语言，支持中文和英文

Vue.prototype.$http = Axios  //ajax插件
// Vue.prototype.baseUrl = "/api"; //全局的变量


Vue.use(Mint);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

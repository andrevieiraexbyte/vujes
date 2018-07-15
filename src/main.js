import Vue from 'vue'
import App from './App.vue'

import VueResorce from 'vue-resource';
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css' // << import CSS

import VueClip from 'vue-clip';



Vue.use(VueResorce);
Vue.use(VueRouter);
Vue.use(VueClip);



new Vue({
  el: '#app',
  render: h => h(App),
  
})

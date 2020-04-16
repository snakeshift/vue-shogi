import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebaseConfig from './plugins/firebase'
import 'firebase/firestore'
import mixin from './mixins/index'
Vue.mixin(mixin);

Vue.config.productionTip = false

// Initialize Firebase
firebaseConfig.init()

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

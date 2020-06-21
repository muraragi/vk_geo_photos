import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueMasonry from 'vue-masonry-css'

Vue.config.productionTip = false
Vue.use(VueMasonry)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

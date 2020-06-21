import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueMasonry from 'vue-masonry-css'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false
Vue.use(VueMasonry)

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_KEY
  },
  installComponents: true
})

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

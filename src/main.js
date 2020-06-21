import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueMasonry from 'vue-masonry-css'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false
Vue.use(VueMasonry)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB8QHEhbdeyWATvBCo-GmMH9R-TAI7wpyw'
  },
  installComponents: true
})

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

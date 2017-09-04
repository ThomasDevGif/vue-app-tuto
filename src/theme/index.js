import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial);

// Theme
Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'red'
});

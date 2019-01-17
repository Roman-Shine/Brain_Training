import Vue from 'vue'
import App from './App'

import AppMessage from './components/Message'
import AppQuestion from './components/Question'
import AppResultScreen from './components/ResultScreen'
import AppStartScreen from './components/StartScreen'

Vue.component('AppMessage', AppMessage)
Vue.component('AppQuestion', AppQuestion)
Vue.component('AppResultScreen', AppResultScreen)
Vue.component('AppStartScreen', AppStartScreen)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

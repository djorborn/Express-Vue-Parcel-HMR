import Vue from 'vue'
import App from './src/App'

new Vue({
    el: '#app',
    render: (h) => h(App),
})

if (module.hot) {
    module.hot.dispose(function() {
      // module is about to be replaced
    })
  
    module.hot.accept(function() {
      // module or one of its dependencies was just updated
    })
  }
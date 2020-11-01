import Vue from 'vue'
import Router from 'vue-router'
import Headertop from "../pages/Headertop.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Headertop',
      component: Headertop
    }
  ]
})

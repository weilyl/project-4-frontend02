import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Page2 from '../views/Page2.vue'
// import New from '../views/New.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/make-new/',
  //   name: 'New',
  //   component: New
  // },
  {
    path: `/list-dashboard/`,
    name: 'ListDashboard',
    component: "ListDashboard"
  },
  {
    path: '/page2',
    name: 'Page2',
    component: Page2
  },
]

const router = new VueRouter({
  routes
})

export default router

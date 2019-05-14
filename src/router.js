import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/mapstate',
      name: 'mapstate',
      component: ()=>import('./views/MapState.vue')
    },
    {
      path: '/mapactions',
      name: 'mapactions',
      component: ()=>import('./views/MapActions.vue')
    },
    {
      path: '/mapmutations',
      name: 'mapmutations',
      component: ()=>import('./views/MapMutations.vue')
    },
    {
      path: '/about',
      name: 'about',
    
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

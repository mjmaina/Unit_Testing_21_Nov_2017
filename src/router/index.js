import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import index from '@/components/index.vue'
import about from '@/components/about.vue'
import contact from '@/components/contact.vue'
import sample from '@/components/sample.vue'

Vue.use(Router)
Vue.use(VueResource)

/*//custom directive
Vue.directives('rainbow', {
  bind(el, biding, vnode){
    el.style.color = "#" + Math.random().toString().slice(0,5);
  }
})*/

//creating routing for the components
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
      {
          path: '/sample',
          name: 'sample',
          component: sample
      }
  ]
})

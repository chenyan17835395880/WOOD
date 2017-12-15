import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import VueResource from 'vue-resource'

Vue.use(Router)
Vue.use(VueResource)

//首页
import index from '../components/home/index.vue'
import shouye from '../components/home/shouye.vue'
import weekproduct from '../components/home/weekproduct.vue'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
        children:[
            {
                path: '/',
                name: 'shouye',
                component: shouye,
            },
            {
                path:'weekproduct',
                name:'weekproduct',
                component:weekproduct,
            }
        ]
    }
  ]
})

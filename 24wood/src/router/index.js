import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Router)
Vue.use(VueResource)
Vue.use(ElementUI)

//首页
import index from '../components/home/index.vue'
import shouye from '../components/home/shouye.vue'
import weekproduct from '../components/home/weekproduct.vue'
import recommend from '../components/home/recommend.vue'
import land from '../components/home/land.vue'

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
                children:[
                    {
                        path:'land',
                        name:'land',
                        component:land,
                    }
                ]
            },
            {
                path:'weekproduct',
                name:'weekproduct',
                component:weekproduct,
            },
            {
                path:'recommend',
                name:'recommend',
                component:recommend
            },
        ]
    }
  ]
})

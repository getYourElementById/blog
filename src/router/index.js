import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Home from '@/components/homePage/home'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta:{
      	title:'登录'
      }
    },{
      path: '/home',
      name: 'home',
      component: Home,
      meta:{
        title:'首页'
      }
    }
  ]
})

router.afterEach(router=>{
	document.title = router.meta.title;
})

import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Home from '@/components/homePage/home'
import Center from '@/components/homePage/center/center'
import Blog from '@/components/homePage/blog/blog'
import UserCenter from '@/components/homePage/userCenter/userCenter'
import Setting from '@/components/homePage/setting/setting'

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
      },
      children:[
        {
          path: '',
          name: 'center',
          component: Center,
          meta:{
            title:'个人中心'
          },
        },
        {
          path: '/blog',
          name: 'blog',
          component: Blog,
          meta:{
            title:'博客'
          },
        },
        {
          path: '/userCenter',
          name: 'userCenter',
          component: UserCenter,
          meta:{
            title:'个人中心'
          },
        },
        {
          path: '/setting',
          name: 'setting',
          component: Setting,
          meta:{
            title:'设置'
          },
        }
      ]
    }
  ]
})

router.afterEach(router=>{
	document.title = router.meta.title;
})

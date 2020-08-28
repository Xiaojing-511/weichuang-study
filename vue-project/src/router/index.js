import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Course from '../views/Course.vue'
import Fe from '../views/Fe.vue'
import Rd from '../views/Rd.vue'  
import User from '../views/User.vue'
import Details from '../views/Details.vue'
import Error from '../views/Error.vue'
import Redirect from '../views/Redirect.vue'
import Count from '../views/Count.vue'

Vue.use(VueRouter)

// 通过注入路由器，我们可以在任何组件内通过 this.$router 访问路由器，
// 也可以通过 this.$route 访问当前路由

// 定义路由  每个路由应该映射一个组件
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // 起别名
    alias: '/aaa'
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/course',
    name: 'Course',
    component: Course,
    children: [
      {
        path: 'fe',
        name: 'Fe',
        component: Fe
      },
      {
        path: 'rd',
        name: 'Rd',
        component: Rd
      },
    ],
    // 路由钩子函数
    // 路由独享的守卫
    // beforeEnter: (to, from, next) => {
    //   console.log(to);
    //   console.log(from);
    //   console.log(next);
    //   next();
    // },
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    // 传参的第三种方式
    // 动态路径参数 以冒号开头
    // 当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用
    path: '/details/:name/:id',
    name:'Details',
    component: Details
  },
  {
    path: '/count',
    name: 'Count',
    component: Count
  },
  {
    // path: '/redirect',
    path: '/redirect/:name/:id',
    name: 'Redirect',
    component: Redirect,
    // redirect: '/'
    redirect: '/details/:name/:id'
  },

  // 捕获所有路由或 404 Not found 路由
  // 如果想匹配任意路径，我们可以使用通配符 (*)
  // 404要在最后写
  {
    path: '/*',
    name: 'Error',
    component: Error
  }

  // 会匹配以 `/user-` 开头的任意路径
  // path: '/user-*'
]

// 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  // 依赖HTML5   history api 和服务器配置
  mode: 'history',
  // 使用URL hash 值做路由，支持所有浏览器，包括不支持html5 history api 的浏览器
  // mode: 'hash',
  base: process.env.BASE_URL,
  routes // (缩写) 相当于 routes: routes
})

export default router

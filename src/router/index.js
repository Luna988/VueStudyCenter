import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: { name: 'home' },
    },
    {
      path: '/:language(zh|en)',
      redirect: { name: 'home' },
      component: () => import('@/layout/main.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          meta: {
            title: '概览',
          },
          component: () => import('@/views/components/home'),
        },
        {
          path: '/children1',
          name: 'children1',
          component: () => import('@/views/components/children1'),
        },
        {
          path: '/children2',
          name: 'children2',
          component: () => import('@/views/components/children2'),
        },
        {
          path: '/children3',
          name: 'children3',
          component: () => import('@/views/components/children3'),
        },
        {
          path: '/children2-1',
          name: 'children2-1',
          meta: {
            title: '父子组件传递',
          },
          component: () => import('@/views/components/componentActive/index'),
        },
        {
          path: '/children2-2',
          name: 'children2-2',
          component: () => import('@/views/components/children2-2'),
        },
        {
          path: '/responsive',
          name: 'responsive',
          component: () => import('@/views/components/responsive/index.vue'),
        },
        {
          path: '/vueRouter',
          name: 'vueRouter',
          meta: {
            title: '路由',
          },
          component: () => import('@/views/components/vueRouter/index.vue'),
        },
        {
          path: '/modifier',
          name: 'modifier',
          meta: {
            title: '修饰符',
          },
          component: () => import('@/views/components/modifier/index.vue'),
        },
        {
          path: '/slots',
          name: 'slots',
          meta: {
            title: '修饰符',
          },
          component: () => import('@/views/components/slot/index.vue'),
        },
        {
          path: '/vuex',
          name: 'vuex',
          meta: {
            title: '状态存储',
          },
          component: () => import('@/views/components/vuex/index.vue'),
        },
        {
          path: '/keepAlive',
          name: 'keepAlive',
          meta: {
            title: '组件缓存',
          },
          component: () => import('@/views/components/keepAlive/index.vue'),
        },
      ],
    },
  ],
})
export default router

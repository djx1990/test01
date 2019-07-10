
import VueRouter from 'vue-router'

export default new VueRouter({
  routes: [
    { 
      path: '/hi',
      component: () => import(/* webpackChunkName: "helloworld" */ './components/HelloWorld.vue')
    },
    {
      path: '/list',
      component: () => import(/* webpackChunkName: "list" */ './components/List.vue')
    },
    {
      path: '/list1',
      component: () => import(/* webpackChunkName: "list" */ './components/List1.vue')
    },
    {
      path:'/table',
      component: () => import(/* webpackChunName: "table" */ './components/table.vue')
    },
    {
      path: '/content',
      component: () => import(/* webpackChunName: 'content' */ './components/content.vue')
    },
    {
      path:'/table1',
      component:()=>import(/* webpackChunName:'table1' */ './components/table1.vue')
    },
    {
      path:'/users/new',
      component:()=>import(/* webpackChunName:'table1' */ './pages/users/new.vue')
    },
    {
      path:'/users/:id/edit',//此处定义id，这样可以把id数据传到需要的地方
      component:()=>import(/* webpackChunName:'table1' */ './pages/users/edit.vue')
    }
  ]
})
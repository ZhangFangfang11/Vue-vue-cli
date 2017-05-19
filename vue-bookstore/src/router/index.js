import Vue from 'vue'
import Router from 'vue-router';
import Detail from '@/components/Detail';
import List from '@/components/List';
import Add from '@/components/Add';

Vue.use(Router);
// 写路由的页面 接口
export default new Router({
  routes: [
  {
      path: '/add',
      component: Add
    },
    {
      path: '/detail/:id',
      name:'detail',//路径太长可以起一个别名
      component: Detail
    },
    {
      path: '/list',
      component: List
    }
  ]
})

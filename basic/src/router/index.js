import Vue from 'vue';
import Router from 'vue-router';
import MethodDemo from './MethodDemo';
import ComputedDemo from './ComputedDemo';
import WatchDemo from './WatchDemo';
import NextTickDemo from './NextTickDemo';
import RefDemo from './RefDemo/RefDemo.vue';
import RefDomDemo from './RefDemo/DomDemo.vue';
import RefGetChildrenDemo from './RefDemo/GetChildrenComDemo/Parent.vue';
import SlotDemo from './SlotDemo/SlotDemo.vue';
import SlotSimpleDemo from './SlotDemo/Simple/Parent.vue';
import SlotDefaultValueDemo from './SlotDemo/DefaultValue/Parent.vue';
import SlotHasNameDemo from './SlotDemo/HasName/Parent.vue';

Vue.use(Router);
// 解决相同路由下跳转的报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/method',
      name: 'MethodDemo',
      component: MethodDemo
    },
    {
      path: '/computed',
      name: 'ComputedDemo',
      component: ComputedDemo
    },
    {
      path: '/watch',
      name: 'WatchDemo',
      component: WatchDemo
    },
    {
      path: '/nexttick',
      name: 'NextTickDemo',
      component: NextTickDemo
    },
    {
      path: '/ref',
      name: 'RefDemo',
      component: RefDemo,
      children: [
        { path: '/ref/dom', name: 'RefDomDemo', component: RefDomDemo },
        { path: '/ref/getChildren', name: 'RefGetChildrenDemo', component: RefGetChildrenDemo },
        {path: '/ref',  redirect: '/ref/dom'}
      ]
    },
    {
      path: '/slot',
      name: 'SlotDemo',
      component: SlotDemo,
      children: [
        { path: '/slot/simple', name: 'SlotSimpleDemo', component: SlotSimpleDemo },
        { path: '/slot/defaultValue', name: 'SlotDefaultValueDemo', component: SlotDefaultValueDemo },
        { path: '/slot/hasName', name: 'SlotHasNameDemo', component: SlotHasNameDemo },
        {path: '/slot',  redirect: '/slot/simple'}
      ]
    },
    {path: '/',  redirect: '/method'}
  ],
  mode:'history'
})

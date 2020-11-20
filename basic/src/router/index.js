import Vue from 'vue';
import Router from 'vue-router';
import MethodDemo from './MethodDemo';
import ComputedDemo from './ComputedDemo';
import WatchDemo from './WatchDemo';
import PropsDemo from './PropsDemo/PropsDemo.vue';
import ParentToChildPropsDemo from './PropsDemo/ParentToChild/Parent.vue';
import ChildToParentPropsDemo from './PropsDemo/ChildToParent/Parent.vue';
import NextTickDemo from './NextTickDemo';
import RefDemo from './RefDemo/RefDemo.vue';
import RefDomDemo from './RefDemo/DomDemo.vue';
import RefGetChildrenDemo from './RefDemo/GetChildrenComDemo/Parent.vue';
import SlotDemo from './SlotDemo/SlotDemo.vue';
import SlotSimpleDemo from './SlotDemo/Simple/Parent.vue';
import SlotDefaultValueDemo from './SlotDemo/DefaultValue/Parent.vue';
import SlotHasNameDemo from './SlotDemo/HasName/Parent.vue';
import SlotCompileScopeDemo from './SlotDemo/CompileScope/Parent.vue';
import SlotScopeSlotDemo from './SlotDemo/ScopeSlot/Parent.vue';
import SwitchComDemo from './SwitchComDemo/SwitchCom.vue';
import SwitchComDestoryDemo from './SwitchComDemo/DestoryDemo/DestoryDemo.vue';
import SwitchComAliveDemo from './SwitchComDemo/AliveDemo/AliveDemo.vue';
import SyncDemo from './SyncDemo/SyncDemo.vue';
import NoSyncDemo from './SyncDemo/NoSync/Parent.vue';
import UseSyncDemo from './SyncDemo/UseSync/Parent.vue';

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
      path: '/props',
      name: 'PropsDemo',
      component: PropsDemo,
      children: [
        { path: '/props/parentToChild', name: 'ParentToChildPropsDemo', component: ParentToChildPropsDemo },
        { path: '/props/childToParent', name: 'ChildToParentPropsDemo', component: ChildToParentPropsDemo },
        {path: '/props',  redirect: '/props/parentToChild'}
      ]
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
        { path: '/slot/complieScope', name: 'SlotCompileScopeDemo', component: SlotCompileScopeDemo },
        { path: '/slot/scopeSlot', name: 'SlotScopeSlotDemo', component: SlotScopeSlotDemo },
        {path: '/slot',  redirect: '/slot/simple'}
      ]
    },
    {
      path: '/switch',
      name: 'SwitchComDemo',
      component: SwitchComDemo,
      children: [
        { path: '/switch/destory', name: 'SwitchComDestoryDemo', component: SwitchComDestoryDemo },
        { path: '/switch/alive', name: 'SwitchComAliveDemo', component: SwitchComAliveDemo },
        {path: '/switch',  redirect: '/switch/destory'}
      ]
    },
    {
      path: '/sync',
      name: 'SyncDemo',
      component: SyncDemo,
      children: [
        { path: '/sync/no', name: 'NoSyncDemo', component: NoSyncDemo },
        { path: '/sync/use', name: 'UseSyncDemo', component: UseSyncDemo },
        {path: '/sync',  redirect: '/sync/no'}
      ]
    },
    {path: '/',  redirect: '/method'}
  ],
  mode:'history'
})

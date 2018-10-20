import VueRouter from 'vue-router';
import Translate from './translate'
import A from './a'
import B from './b'
import Tags from './tags'

const routes = [
  { path: '/translate', component: Translate },
  { path: '/tags', component: Tags,
    children:[
    {path:'a',component:A},
    {path:'b',component:B},
     ]
  }
]


export default routes
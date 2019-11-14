import Vue from 'vue'
import Router from 'vue-router'
const Customers =()=>import( '@/components/Customers')
const About =()=>import ('@/components/About')
const add =()=>import ('@/components/add')
const CustomerDetails =()=>import ('@/components/CustomerDetails')
const Edit =()=>import ('@/components/Edit')
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      // redirect:'/Customers'
      component:Customers,
    },
    {
      path:'/about',
      component:About
    },
    {
      path:'/add',
      component:add
    },
    {
      path:'/CustomerDetails/:id',
      component:CustomerDetails
    },
    {
      path:'/edit/:id',
      component:Edit
    }
  ],
  mode:'history',

})

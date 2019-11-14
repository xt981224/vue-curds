<template>
  <div class="customer container">
    <alert v-if="alert"  :message="alert"></alert>
<h1 class="page-header"> 用户管理系统</h1>
<input type="text" class="from-control" placeholder="搜索" v-model="filterInput">

<table class="table table-striped">
  <thead>
    <tr>
      <th>姓名</th>
      <th>电话</th>
      <th>邮箱</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in filterBy(filterInput)" :key="item.name">
      <td>{{item.name}}</td>
      <td>{{item.phone}}</td>
      <td>{{item.email}}</td>
      <td><router-link
      class="btn btn-default"
      :to="'/CustomerDetails/'+item.id">详情</router-link></td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
  import {getuseralldata,delecust } from '@/network/home'
  import alert from './alert'
  export default {
     name: 'Customers',
     components:{
       alert
     },
     data(){
       return {
         customers:[],
         alert:'',
         filterInput:'',
       }
     },
     created(){
       if(this.$route.query.alert){
         this.alert = this.$route.query.alert
       }
       this.getuserdata()
     },
     methods:{
       getuserdata(){
       getuseralldata().then(res=>{
          this.customers = res.data
         })
       },
       filterBy(value){
         // 方法1
         return this.customers.filter(function(customer){
           return customer.name.match(value)
         })

       },
     },
  }
</script>

<style>
</style>

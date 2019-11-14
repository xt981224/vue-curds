<template>
  <div class="CustomerDetails container">
    <router-link to="/" class="btn btn-default">返回</router-link>
    <h1 class="page-header">
    {{CustomerDetails.name}}
    <span class="pull-right">
      <router-link class="btn btn-primary" :to="'/edit/'+CustomerDetails.id">
        编辑
      </router-link>
      <button class="btn btn-danger" @click="delecust(CustomerDetails.id)">删除</button>
    </span>

    </h1>
    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-asterisk">{{CustomerDetails.phone}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-envelope">{{CustomerDetails.email}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-plus">{{CustomerDetails.education}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-plus">{{CustomerDetails.school}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-plus">{{CustomerDetails.profile}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-plus">{{CustomerDetails.school}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import {getuseralldata,delecust,editdata } from '@/network/home'
  import axios from 'axios'
  export default {
     name: 'CustomerDetails',
     data(){
       return {
         CustomerDetails:''
       }
     },
     created() {
          this.getuserdata( this.$route.params.id)
     },
     methods:{
       getuserdata(id){

       editdata(id).then(res=>{
         	console.log(res.data)
          this.CustomerDetails = res.data
         })
         // axios.get('http://localhost:3000/users/'+id)
         // .then(res=>{
         //    this.CustomerDetails= res.data
         //    console.log(id)
         //     // this.$router.push( {path:'/',query:{alert:'用户信息更新成功'}})
         //     // query 用来路由传参 取值的时候用￥route

         // })
       },
       delecust(id){
       delecust(id).then(res=>{
       this.$router.push({path:'/',query:{alert:"删除成功"}})
        })

       }

     }
  }
</script>

<style>
</style>

<template>
  <div class="edit container">
    <alert v-if="alert"  :message="alert"></alert>
<h1 class="page-header">更新用户</h1>

<form  v-on:submit.prevent="updataCustrom">
  <div class="well">
    <h4> 用户信息</h4>
    <div class="form-group">
      <label>姓名</label>
      <input type="text" class="form-control" placeholder="name" v-model="customer.name" />
    </div>
    <div class="form-group">
      <label>电话</label>
      <input type="text" class="form-control" placeholder="phone" v-model="customer.phone" />
    </div>
    <div class="form-group">
      <label>邮箱</label>
      <input type="text" class="form-control" placeholder="email" v-model="customer.email" />
    </div>
    <div class="form-group">
      <label>学历</label>
      <input type="text" class="form-control" placeholder="education" v-model="customer.education" />
    </div>
    <div class="form-group">
      <label>毕业学校</label>
      <input type="text" class="form-control" placeholder="school" v-model="customer.school" />
    </div>
    <div class="form-group">
      <label>职业</label>
      <input type="text" class="form-control" placeholder="profession" v-model="customer.profession" />
    </div>
    <div class="form-group">
      <label>个人简介</label>
      <!-- <input type="text" class="form-control" placeholder="profile" v-model="customer.profile" /> -->
      <textarea class="form-control" rows="10" v-model="customer.profile"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">修改提交</button>
  </div>

</form>
  </div>
</template>

<script>
  import axios from 'axios'
  import {getuseralldata,delecust,editdata } from '@/network/home'
  import alert from './alert'
  export default {
     name: 'edit',
     components:{
       alert
     },
     data(){
       return {
         customer:[],
         alert:''
       }
     },
     created() {
        this.getuserdata(this.$route.params.id)
     },
     methods:{
    getuserdata(id){
      // console.log(id)
     editdata(id).then(res=>{
       this.customer = res.data
      })
    },
       updataCustrom(){
         if(!this.customer.name || !this.customer.phone || !this.customer.email){
            this.alert= '请填写相关信息'
         }else{
           let updataCustrom ={
             name:this.customer.name,
             phone:this.customer.phone,
             email:this.customer.email,
             education:this.customer.education,
             school:this.customer.school,
             profession:this.customer.profession,
             profile:this.customer.profile,
           }

           axios.put('http://localhost:3000/users/'+this.$route.params.id,updataCustrom)
           .then(res=>{
               // this.$router.push('/')
               this.$router.push( {path:'/',query:{alert:'用户信息更新成功'}})
               // query 用来路由传参 取值的时候用￥route

           })
         }
       }
     },
  }
</script>

<style>
</style>

<template>
  <div id="app">
   <head-nav></head-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import HeadNav from './components/HeadNav'
export default {
  name: 'App',
 components:{
    HeadNav
 },
}
</script>

<style>
</style>

<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {getCategoryList} from './api'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted(){
    getCategoryList().then(result=>{
      console.log('result',result);
    })
  }
}
</script>
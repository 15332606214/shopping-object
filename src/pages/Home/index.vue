<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <TodyRecommend></TodyRecommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="floor in floors" :key="floor.id" :floor="floor"></Floor>
    <Brand></Brand>
  </div>
  
</template>

<script>
import { mapState } from "vuex";
import ListContainer from "./ListContainer";
import TodyRecommend from "./TodyRecommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";


export default {
    name:'Home',
    mounted(){
      this.$store.dispatch('getRecommends')
      this.$store.dispatch('getFloors')
    },
    computed:{
      ...mapState({
        floors:state=>state.home.floors,
        recommends:state=>state.home.recommends
      })
    },
    components:{
      ListContainer,
      TodyRecommend,
      Rank,
      Like,
      Floor,
      Brand
    }
}
</script>

<style scoped lang="less">

</style>
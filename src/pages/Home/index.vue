<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <TodyRecommend></TodyRecommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
  
</template>

<script>
import ListContainer from "./ListContainer";
import TodyRecommend from "./TodyRecommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";

export default {
    name:'Home',
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
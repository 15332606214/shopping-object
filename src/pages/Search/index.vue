<template>
  <div>
    <typeNav></typeNav>
    <h2>search</h2>
    <h3>params.keyword:{{ $route.params.keyword }}</h3>
    <h3>query.keyword2:{{ $route.query.keyword2 }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style scoped lang="less">

</style>
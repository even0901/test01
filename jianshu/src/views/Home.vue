<template>
  <div class="Home">
    <myHead/>
    <div class="container">
    <list></list>
    <recommend></recommend>
    </div>
  </div>
</template>
<script>
import myHead from '../components/Header'
import list from '../components/List'
import recommend from '../components/Recommend'
export default {
  name: 'Home',
  components: {
    myHead,
    list,
    recommend
  }
}
</script>
<style lang="scss" scoped>
.container{
  width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
</style>

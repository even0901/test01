<template>
  <div class="home">
    <vNav></vNav>
    <newsList></newsList>
  </div>
</template>

<script>

import vNav from '@/components/vNav.vue'
import newsList from '@/components/newsList.vue'

export default {
  name: 'Home',
  components: {
    vNav,
    newsList
  }
}
</script>

<template>
  <div class="home">
    <myHead/>
    <mySwiper/>
    <myNavi/>
    <myHot/>
    <myFoot/>
  </div>
</template>

<script>
// @ is an alias to /src
import myHead from '../components/Header'
import mySwiper from '../components/Swiper.vue'
import myNavi from '../components/Navi.vue'
import myHot from '../components/Hot.vue'
import myFoot from '../components/Foot.vue'
export default {
  name: 'Home',
  components: {
    myHead,
    mySwiper,
    myNavi,
    myHot,
    myFoot
  }
}
</script>

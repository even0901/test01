<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="/images/html.png" alt="" /></div>
        <div class="swiper-slide"><img src="/images/react.png" alt="" /></div>
        <div class="swiper-slide"><img src="/images/vue.png" alt="" /></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.css";
import Swiper from "swiper";

export default {
  mounted() {
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项

      autoplay: true, //3秒自动循序
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
};
</script>

<style lang="scss" scoped>
.swiper-slide {
  img {
    width: 100%;
    height: 200px;
  }
}
</style>
<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="/images/banner1.jpg" alt="" /></div>
        <div class="swiper-slide"><img src="/images/banner2.jpg" alt="" /></div>
        <div class="swiper-slide"><img src="/images/banner3.jpg" alt="" /></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
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
      autoplay:true,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
};
</script>

<style lang="scss" scoped>
.swiper-slide {
  img {
    width: 100%;
  }
}
.swiper-container {
  --swiper-theme-color: #1d8daf; /* 设置Swiper风格 */
  --swiper-navigation-color:#1d8daf; /* 单独设置按钮颜色 */
  --swiper-navigation-size: 30px; /* 设置按钮大小 */
}
</style>
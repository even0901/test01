<template>
  <div>
    <ul class="d-flex flex-wrap justify-content-between mt-3">
      <router-link :to="{name:'BlogListPage',params:{id:item.id}}" v-for="item in blogNav" :key="item.id" class="mx-2 text-center mb-3" tag="li">
        <p class="myp1 mx-auto">{{ item.category.slice(0, 1) }}</p>
        <p class="myp2 mt-2">{{ item.category }}</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    blogNav() {
      return this.$store.state.category;
    },
  },
};
</script>

<style lang="scss" scoped>

$color1: pink;
$color2: rgb(142, 142, 241);
$color3: rgb(152, 235, 104);
$color4: rgb(182, 228, 56);
$color5: rgb(235, 83, 197);
$color6: rgb(117, 50, 243);
$color7: rgb(32, 210, 241);
$color8: rgb(231, 98, 98);
ul {
  width: 100%;
  li {
    width: 20%;
    p {
      line-height: 40px;
    }
    .myp1 {
      width: 40px;
      height: 40px;
      border-radius: 30px;
    }
    &:nth-of-type(1) .myp1 {
      background: $color1;
    }
    &:nth-of-type(2) .myp1 {
      background: $color2;
    }
    &:nth-of-type(3) .myp1 {
      background: $color3;
    }
    &:nth-of-type(4) .myp1 {
      background: $color4;
    }
    &:nth-of-type(5) .myp1 {
      background: $color5;
    }
    &:nth-of-type(6) .myp1 {
      background: $color6;
    }
    &:nth-of-type(7) .myp1 {
      background: $color7;
    }
    &:nth-of-type(8) .myp1 {
      background: $color8;
    }
  }
}
</style>
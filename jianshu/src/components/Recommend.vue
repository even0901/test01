<template>
  <div>
    <ul class="recommend">
      <li v-for="item in list" :key="item.id">
        <img :src="require(`@/assets/image/recom0${item}.png`)" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [1, 2, 3, 4]
    }
  }
}
</script>

<style lang="scss" scoped>
.recommend {
  margin-top: 15px;
  img {
    width: 320px;
  }
}
</style>

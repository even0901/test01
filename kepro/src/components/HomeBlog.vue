<template>
  <div>
    <h4>推荐文章</h4>
    <ul class="mt-4">
      <router-link
        class="rounded border"
        v-for="item in recommend.blogs"
        :key="item.id"
        tag="li"
        :to="{
          name: 'BlogContentPage',
          params: { id: recommend.id, bid: item.id },
        }"
      >
        <h3 class="text-center pt-3">{{ item.title }}</h3>
        <p>
          <span class="rounded mr-2 px-2 py-1">{{ recommend.category }}</span>
        </p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    recommend() {
      return this.$store.state.hotblogs;
    },
  },
};
</script>

<style lang="scss" scoped>
h4 {
  text-indent: 10px;
}
ul {
  li {
    background: rgb(192, 190, 189);
    height: 150px;
    margin-bottom: 20px;
    h3 {
      line-height: 100px;
      font-size: 30px;
    }
    p {
      text-align: right;
      span {
        background: #666;
        color: white;
      }
    }
  }
}
</style>
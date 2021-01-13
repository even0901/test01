<template>
  <div class="px-1 pt-3">
    <router-link :to="{ name: 'BlogListPage' }"
      >&gt;&gt;&gt;返回列表</router-link
    >
    <h3 class="text-center my-5">{{ blogContent.title }}</h3>
    <p class="text-center">{{ blogContent.content }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    blogContent() {
      return this.$store.state.category[this.$route.params.id].blogs[
        this.$route.params.bid
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
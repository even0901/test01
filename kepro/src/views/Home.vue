<template>
  <div>
    <HomeBanner></HomeBanner>
    <HomeMenu></HomeMenu>
    <HomeBlog></HomeBlog>
  </div>
</template>

<script>
    import HomeBanner from "../components/HomeBanner";
    import HomeMenu from "../components/HomeMenu";
    import HomeBlog from "../components/HomeBlog";
  export default {
    components: {
      HomeBanner,
      HomeMenu,
      HomeBlog,
    },
  }
</script>

<style lang="scss" scoped>

</style>

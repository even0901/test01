<template>
  <div id="vNav">
    <div class="nav">
      <h2>KGC新闻</h2>
      <div class="naver">
        <ul>
          <li v-for="(item, index) in myList" :key="index">
            {{ item }}
          </li>
        </ul>
        <span @click="changeRouter">+</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'vNav',
  computed: {
    myList() {
      return this.$store.state.list
    }
  },
  created() {
    this.$store.dispatch('getChannels')
  },
  methods: {
    changeRouter() {
      this.$router.push({ name: 'channelManagePage' })
    }
  }
}
</script>

<style lang="scss" scoped>
$color1: rgb(230, 88, 88);
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  h2 {
    width: 100%;
    line-height: 50px;
    background: $color1;
    color: #fff;
    text-align: center;
    white-space: 2px;
  }
  .naver {
    overflow: hidden;
    line-height: 35px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #eee;
    ul {
      flex-grow: 1;
      display: flex;
      align-items: center;
      scroll-behavior: smooth;
      scrollbar-width: 0;
      &::-webkit-scrollbar {
        display: none;
      }
      overflow-x: scroll;
      li {
        text-align: center;
        font-weight: 500;
        width: 18%;
        white-space: nowrap;
        margin: 0 3.5%;
      }
    }
    span {
      width: 33px;
      height: 33px;
      line-height: 100%;
      font-size: 30px;
      border: 1px solid rgb(160, 155, 155);
      color: $color1;
      flex-shrink: 0;
      text-align: center;
    }
  }
}
</style>

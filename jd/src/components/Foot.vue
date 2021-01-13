<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index" @click="getLocal(index)">
        <img
          :src="require(`../assets/image/icon-${item}.png`)"
          alt=""
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["home", "me", "cart", "catergry"],
    };
  },
  methods: {
    getLocal(index) {
      if (index == 0) {
        this.$router.push({name:'ClassifyPage'});
      } else {
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  overflow: hidden;
  width: 100%;
  margin-top: 20px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  li {
    width: 25%;
    img {
      width: 100%;
    }
  }
}
</style>
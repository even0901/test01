<template>
  <div id='channelMa'>
    <h2>
      <router-link to="/" tag="span"
        ><img src="@/assets/images/back.png" alt="" width="30"
      /></router-link>
      频道管理
    </h2>
    <div class="content">
      <p class="myp1">点击删除以下频道</p>
      <ul class="myul1">
        <li
          v-for="(item, index) in myList"
          :key="index"
          @click="dec(index, item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="content">
      <p class="myp1">点击添加以下频道</p>
      <ul class="myul1">
        <li
          v-for="(items, indexs) in newList"
          :key="indexs"
          @click="add(items)"
        >
          {{ items }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name:'channelMa',
  data() {
    return {
      newList: []
    }
  },
  computed: {
    myList() {
      return this.$store.state.list
    }
  },
  created() {
    this.$store.dispatch('getChannels')
  },
  methods: {
    dec(index, item) {
      this.$store.commit('decrement', index)
      this.newList.push(item)
    },
    add(item, index) {
      this.$store.commit('increment', item)
      this.newList.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
$color1: rgb(230, 88, 88);
h2 {
  width: 100%;
  line-height: 50px;
  background: $color1;
  color: #fff;
  text-align: center;
  white-space: 2px;
  position: relative;
  span {
    position: absolute;
    top: 18%;
    left: 2%;
  }
}
.content {
  padding: 10px;
  .myp1 {
    line-height: 30px;
    color: rgb(189, 185, 185);
  }
  .myul1 {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    li {
      padding: 5px 0;
      text-align: center;
      border: 1px solid #eee;
      width: 20.5%;
      margin: 5px 1.8%;
      white-space: nowrap;
    }
  }
}
</style>

<template>
  <div class="list">
    <img src="/images/home.png" alt="" class="swiperImg" />
    <ul>
      <li v-for="item in list" :key="item.id">
        <div class="content">
          <h3>{{item.title}}</h3>
          <p>{{item.desc}}</p>
        </div>
        <img :src='"https:"+item.imgUrl' alt="" />
      </li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      list: []
    }
  },
  mounted () {
    axios.get('/api/home.json').then((res) => {
        this.list = res.data.data.listInfo
    })
  }
}
</script>

<style lang="scss" scoped>
.list {
  margin-top: 20px;
  width: 635px;
  min-height: 20px;
  .swiperImg {
    width: 100%;
    border-radius: 10px;
  }
}
ul {
  li {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
    img {
      margin-left: 5px;
      width: 80px;
      height: 80px;
      border-radius: 3px;
    }
  }
}
</style>

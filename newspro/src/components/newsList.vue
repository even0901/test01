<template>
  <div>
    <ul>
      <li v-for="item in lists" :key="item.id">
        <img :src="item.pic" alt="" width="80" />
        <div class="right">
          <h3>
            {{ item.title }}
          </h3>
          <p>
            <span>{{ item.time }}</span
            ><span>{{ item.src }}</span>
          </p>
        </div>
      </li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      lists: []
    }
  },
  mounted() {
    axios.get('/json/news.json').then(res => {
      // console.log( res.data.result.list);
      this.lists = res.data.result.list
    })
  }
}
</script>

<style lang="scss" scoped>
ul {
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  li {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #eee;
    img {
      width: 90px;
      height: 90px;
      margin-right: 10px;
    }
    .right {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h3 {
        font-size: 18px;
      }
      p {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: rgb(204, 199, 199);
        white-space: nowrap;
      }
    }
  }
}
</style>

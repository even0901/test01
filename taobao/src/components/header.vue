<template>
  <div class="box">
    <img src="/images/taobao_logo.gif" alt="" class="d-block" />
    <p class="myp1 mt-3">
      您的位置：
      <a
        href="#"
        v-for="(item, index) in titList"
        :key="index"
        :class="{ active1: num1 == index }"
      >
        {{ item }}
      </a>
    </p>
    <ul class="d-flex justify-content-between myul1 mt-2 rounded">
      <li
        v-for="(item, i) in classPage"
        :key="i"
        :class="{ active2: num2 == i, active3: num3 == i }"
        @click="changeNum2(i)"
      >
        <h5>{{ item.id }} . {{ item.title }}</h5>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["titList", "classPage"],
  data() {
    return {
      num1: 2,
      num2: 0,
      num3: 0,
    };
  },
  methods: {
    changeNum2(i) {
      this.num2 = i;
      this.num3 = i - 1;
    },
  },
};
</script>

<style scoped>
@import url("/utils.css");
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}

body {
  font: 14px;
  font-family: "微软雅黑";
}
.myp1 {
  font-size: 15px;
}
.myp1 > a:not(:last-of-type)::after {
  content: ">";
}
.myp1 > a {
  color: rgb(73, 129, 233);
}
.myp1 > .active1 {
  color: black;
}

.myul1 {
  height: 30px;
  line-height: 30px;
  overflow: hidden;
}
.myul1 > li {
  width: 300px;
  text-align: center;
}
.myul1>li:not(:last-of-type){
  background: url("/images/taobao_bg.png") #e4e4e4  no-repeat;
  background-size: 20px;
  background-position: right top 0;
}
.myul1>li:last-of-type{
  background-color: #e4e4e4;
}
.box .myul1 > .active3 {
  background-image: url("/images/taobao_bg.png") no-repeat;
  background-size: 20px;
  background-position: right top -30px;
  background-color:  #e4e4e4;
}
.box .myul1 > .active2 {
  color: #fff;
  background-image: url("/images/taobao_bg.png")  no-repeat;
  background-size: 20px;
  background-position: right top 0px;
  background-color: #ff6600;
}

</style>
<template>
  <div class="app" v-cloak>
    <myHead :titList="titList" :classPage="classPage"></myHead>
    <myindex></myindex>
    <!-- <myFooter></myFooter> -->
  </div>
</template>

<script>
// import myFooter from "./components/footer";
import myHead from "./components/header";
import myindex from "./components/index";
export default {
  components: {
    myHead,
    myindex,
    // myFooter,
  },
  data() {
    return {
      titList: ["首页", "我的淘宝", "我的购物车"],
      classPage: [
        { id: 1, title: "查看购物车" },
        { id: 2, title: "确认订单信息" },
        { id: 3, title: "付款到支付宝" },
        { id: 4, title: "确认收货" },
        { id: 5, title: "评价" },
      ],
     
    };
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
[v-cloak] {
  display: none;
}
</style>
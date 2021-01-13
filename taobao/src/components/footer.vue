<template>
  <div>
      <div class="text-right my-3">
        <p>商品总价（不含运费）：</p>
        <p><span class="text-danger">{{total}}</span>元</p>
        <p>可获积分<span class="text-danger">{{pointAll}}</span>点</p>
        <p><span class="px-3 bg-danger rounded pt-1 pb-1">立刻购买</span></p>
      </div>
  </div>
</template>

<script>
export default {
    props:['total','pointAll'],
   
};
</script>

<style scoped>
@import url("/utils.css");
*{
   margin: 0;
   padding: 0;
   list-style: none;
   text-decoration: none;
}

p{
    line-height: 30px;
}


</style>
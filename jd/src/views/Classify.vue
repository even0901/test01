<template>
  <div>
    <h3>这是分类页面</h3>
    <router-link to='/' tag="span">返回首页</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}

h3{
  color: #fff;
  text-align: center;
  width: 100%;
  line-height: 40px;
  background: rgb(197, 31, 31);
}
span{
  color: #fff;
  display: inline-block;
  border-radius: 3px;
  line-height: 40px;
  margin-top: 10px;
  padding: 2px 8px;
  background: rgb(197, 31, 31);
  margin-left: 5px;
}
</style>
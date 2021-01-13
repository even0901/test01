<template>
  <div>
    <div class="nav">
      <span class="mySpan1"></span>
      <div class="inp">
        <span class="mySpan2"></span>
        <input type="text" placeholder="请输入你要查找的内容" />
      </div>
      <h3>登录</h3>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  line-height: 40px;
  background: rgb(197, 31, 31);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  .mySpan1 {
    width: 80px;
    height: 40px;
    background: url("/images/sprites.png") no-repeat;
    background-size: 43vmax auto;
    background-position: 0px 61%;
    z-index: 10;
  }
  .inp {
    height: 40px;
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 5px 10px;
    border-radius: 3px;
    flex-grow: 1;
    background: #fff;
    overflow: hidden;
    .mySpan2 {
      width: 35px;
      height: 35px;
      background: url("/images/sprites.png") no-repeat;
      background-position: 32% 61%;
      background-size: 43vmax auto;
    }
    input {
      outline: none;
      border: none;
    }
  }

  h3 {
    color: #fff;
    font-weight: 500;
    white-space: nowrap;
  }
}
</style>
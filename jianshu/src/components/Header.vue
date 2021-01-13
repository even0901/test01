<template>
  <div class="Home">
    <div class="nav">
      <div class="left">
        <img src="/images/logo.png" alt="" width="80" />
        <div class="left-r">
          <span class="homeSpan">首页</span>
          <h4>下载APP</h4>
          <div class="inp">
            <input type="text" placeholder="搜索" />
            <span class="iconfont">&#xe60c;</span>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="right-l">
          <span>登录</span>
          <span class="iconfont">&#xe636;</span>
        </div>
        <div class="right-r">
          <span class="register">注册</span>
          <div class="write">
            <span class="iconfont">&#xe61b;</span>
            写文章
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.nav {
  height: 45px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    width: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left-r {
      width: 350px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .homeSpan {
        color: rgb(233, 96, 96);
      }
      .inp {
        background: #eee;
        border-radius: 20px;
        line-height: 30px;
        width: 200px;
        padding: 0px 0px 0 15px;
        input {
          background: #eee;
          line-height: 20px;
          border: none;
          outline: none;
        }
      }
    }
  }
  .right {
    width: 350px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    .right-l{
      width: 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .right-r{
      width: 170px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .register{
        border: 1px solid rgb(230, 111, 33);
        padding: 0 10px;
        height: 30px;
        line-height: 30px;
        border-radius: 20px;
      }
      .write{
        background:  rgb(233, 81, 55);
        padding: 0 10px;
        height: 35px;
        line-height: 35px;
        border-radius: 20px;
        color: #fff;
      }
    }
  }
}
</style>

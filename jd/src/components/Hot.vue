<template>
  <div>
    <p class="myp">超值购</p>
    <ul>
        <li>
           <img src="/images/cp1.jpg" alt="">
        </li>
        <li>
           <p><img src="/images/cp2.jpg" alt=""></p>
           <p><img src="/images/cp3.jpg" alt=""></p>
        </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$color1: 2px solid rgb(209, 208, 208);

.myp{
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
    display: flex;
    justify-content: start;
    align-items: center;
    border-bottom:$color1;
    &::before{
        content: '';
        display: inline-block;
        width: 4px;
        height: 20px;
        background: rgb(238, 53, 53);
        margin-right: 10px;
    }
}
ul{
    width: 100%;
    display: flex;
    justify-content: space-between;
    li{
        width: 50%;
        img{
            width: 100%;
        }
        p{
            &:first-of-type{
                border-bottom: $color1;
            }
             border-left:$color1;
        }
    }
    &::after{
        contain: '';
        display: block;
        clear: both;
    }
}

</style>
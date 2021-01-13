
// 使用computed计算属性来监测总价
<template>
  <div>
    <p class="d-flex justify-content-between mt-3 pr-3 myp1">
        <span>店铺宝贝</span>
        <ul class="d-flex justify-content-end mr-5">
            <li  class="mr-5">积分</li>
            <li  class="mr-4">单价（元）</li>
            <li class="mx-4 ">数量</li>
        </ul>
        </p>
        <hr class="myhr mt-1">
       
        <div class="shopping" v-for="(items,indexs) in goodsList" :key="indexs">
            <p class="mt-1 myp2 font-14">
                店铺：<a href="#" @click.prevent=''>{{items.sell}}</a> 卖家： <a href="#">{{items.seller}}</a> <img src="/images/taobao_relation.jpg" alt="">
            </p>
            <table  v-for="(item,index) in items.shopMessage" :key="index">
                <tr class="trBg">
                    <th><img :src="item.img" alt=""></th>
                    <th class="text-left">
                        <a href="#" @click.prevent=''>{{item.title[0]}}</a>
                        <p class="my-2 myp3">
                          <span>{{item.title[1]}}</span><span>{{item.title[2]}}</span>
                        </p>
                        <p>保障:<img :src="item.ensure" alt=""></p>
                    </th>
                    <th>{{item.points}}</th>
                    <th>{{item.price}}</th>
                    <th><button class="px-2 mr-2" @click="dec(item)">-</button><input type="text" v-model="item.num" class="text-center myinp" ><button class="px-2 ml-2" @click='add(item)'>+</button></th>
                </tr>
            </table>
        </div>
        <ul class="d-flex justify-content-between align-items-center">
          <li><a href="#" @click.prevent="clearAll">清空购物车</a></li>
          <myFooter :total='total' :pointAll='point'></myFooter>
        </ul>
        
  </div>
</template>

<script>
import myFooter from "./footer";

export default {
  components: {
    myFooter,
  },
  data() {
    return {
      goodsList: [
        {
          sell: "纤巧百媚时尚鞋坊",
          seller: "纤巧百媚",
          shopMessage: [
            {
              img: "/images/taobao_cart_01.jpg",
              title: [
                "日韩流行风时尚美眉最爱独特米字拼图金属坡跟公主靴子黑色",
                "颜色：棕色",
                "尺码：37",
              ],
              ensure: "/images/taobao_icon_01.jpg",
              points: 5,
              price: 100,
              num: 1,
            },
            {
              img: "/images/taobao_cart_02.jpg",
              title: ["chanel/香奈尔/香奈尔炫亮魅力唇膏3.5g ", "", ""],
              ensure: "/images/taobao_icon_01.jpg",
              points: 12,
              price: 265,
              num: 1,
            },
          ],
        },
        {
          sell: "香港我的美丽日记",
          seller: "taobao豆豆 ",
          shopMessage: [
            {
              img: "/images/taobao_cart_03.jpg",
              title: [
                "相宜促销专供 大S推荐 最好用的LilyBell化妆棉 好用/推荐/ ",
                "",
                "",
              ],
              ensure: "/images/taobao_icon_01.jpg",
              points: 10,
              price: 100,
              num: 1,
            },
          ],
        },
      ],
      total: 0,
      point: 0,
    };
  },
  created() {
    this.goodsList.forEach((element) => {
      element.shopMessage.forEach((e) => {
        this.total += e.price * e.num;
        this.point += e.points * e.num;
      });
    });
  },

  methods: {
    dec(item) {
      /* if (item.num <= 1) {
        items.shopMessage.splice(index, 1);
        return;
      } else {
        item.num--;
      } */
      if (item.num <= 1) {
        alert("不能在少了");
      } else {
        this.total -= item.price;
        this.point -= item.points;
        item.num--;
      }
    },
    add(item) {
      this.total += item.price;
      this.point += item.points;
      item.num++;
    },
    clearAll() {
      this.goodsList = "";
      this.total = 0;
      this.point = 0;
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
table {
  width: 100%;
}
.myp1 {
  line-height: 20px;
}
.myp1 > span {
  width: 950px;
  text-align: center;
}
.myp1 > ul {
  flex-grow: 1;
}
.myp1 > ul > li {
  text-align: center;
  font-size: 14px;
  white-space: nowrap;
}
.myhr {
  height: 3px;
  background: #a7cbff;
  border: none;
}
.myp2 {
  line-height: 30px;
}
.myp2 > img {
  vertical-align: middle;
}
.trBg {
  background: #bcd2f1;
}
th {
  padding: 10px 10px;
  font-weight: 400;
}
.myinp {
  width: 30px;
}
th:first-of-type {
  width: 200px;
}
tr > th:nth-of-type(3) {
  width: 59px;
}
th:nth-of-type(2) {
  width: 760px;
}
.myp3 {
  height: 20px;
  line-height: 20px;
}
</style>
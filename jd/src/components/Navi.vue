<template>
    <div>
        <ul>
            <li v-for="item in list" :key="item.id">
                <p><img :src='require(`../assets/image/nav${item.id}.png`)' alt=""></p>
                <p>{{item.content}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list:[
                    { id:0,content:'分类查询'},
                    { id:1,content:'物流查询'},
                    { id:2,content:'购物车'},
                    { id:3,content:'我的京东'},
                    { id:4,content:'充值'},
                    { id:5,content:'领劵中心'},
                    { id:6,content:'京东超市'},
                    { id:7,content:'我的关注'},

                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    ul{
        border-bottom: 2px solid rgb(195, 205, 207);
        padding: 10px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        box-sizing: border-box;
        li{
            width: 22%;
            img{
                width: 80%;
            }
           p{
               text-align: center;
               margin: 5px 0;
               white-space: nowrap;
               font-size: 14px;

           }
        }
    }
</style>
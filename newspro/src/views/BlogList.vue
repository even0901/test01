<template>
    <div class="px-2">
        <h2>“{{blogList.category}}”类目下文章列表</h2>
        <router-link to="/">&gt;&gt;&gt;返回首页</router-link>
        <ul>
            <router-link :to='{name:"BlogContentPage",params:{id:blogList.id,bid:item.id}}' v-for="item in blogList.blogs" :key="item.id" class="border-bottom mt-3" tag="li">
                <p>{{item.title}}</p>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
       computed: {
           blogList() {
               return this.$store.state.category[this.$route.params.id]
           }
       }, 
    }
</script>

<style lang="scss" scoped>
h2{
    line-height: 120px;
}
li{
    p{
        line-height: 60px;
        font-size: 18px;
    }
}
</style>
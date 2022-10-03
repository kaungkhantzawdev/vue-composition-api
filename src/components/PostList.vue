<template>
<div>
    <div class=""  v-if="posts.length">
        <div v-for="post in posts" :key="post">
        <SinglePost :post="post"/>
        </div>
    </div>
    <h2 class="" v-else>loading ....</h2>
</div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated, ref } from '@vue/runtime-core'
import SinglePost from "./SinglePost.vue"
export default {

    props: ['posts'],
    components: {
        SinglePost
    },
    setup(){
        onMounted(() => console.log('I am mounted'))
        onUnmounted(() => console.log('I am unmounted'))
        onUpdated(() => console.log('I am updated'))
    }
}
</script>

<style>

</style>

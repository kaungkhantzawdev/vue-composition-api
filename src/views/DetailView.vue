<template>
    <div>
    <p class="text-danger" v-if="error">
        {{ error }}
    </p>
    <div class="" >
        <h2 class="">{{ post.title }}</h2>
        <p class="">{{ post.description }}</p>
    </div>
    <!-- <div class="">loading...</div> -->

    </div>
</template>

<script>
    import getPost from "../composiables/getPost"
    import $route from "vue-router"

    export default {
        props: ['id'],
        setup(props){
            
            const { post, error, load } = getPost(props.id)
            load()
            return { post, error }
        }
    }
</script>

<style lang="scss" scoped>

</style>
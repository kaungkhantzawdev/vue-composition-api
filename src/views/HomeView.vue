<template>
  <div>
    <PostList :posts = 'posts' />
  </div>
</template>
<script>

  import PostList from "../components/PostList.vue"
  import {ref} from "vue";

  export default {
    components: {
      PostList
    },
    setup(){
      const posts = ref([
        {title: "hello", des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda delectus ea harum id itaque, magnam minima necessitatibus nisi non obcaecati pariatur quis repudiandae sapiente sequi sit veritatis vitae voluptatibus?", category: "hello-cat"},
        {title: "Top 3 frontend FrameWork", des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda delectus ea harum id itaque, magnam minima necessitatibus nisi non obcaecati pariatur quis repudiandae sapiente sequi sit veritatis vitae voluptatibus?", category: "hello-man"}
      ])


      return {posts}
    }

  }

</script>
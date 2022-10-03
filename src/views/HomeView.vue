<template>
  <div>
    <p class="text-danger" v-if="error">{{ error }}</p>
    <PostList v-if="data" :posts = 'posts' />
    <button class="btn btn-primary me-2" @click="data = !data">toggle button</button>
    <button class="btn btn-primary" @click="posts.pop()">hide btn</button>
  </div>
</template>
<script>

  import PostList from "../components/PostList.vue"
  import { ref} from "vue";
  import getPosts from '../composiables/getPosts';

  export default {
    components: {
      PostList
    },
    setup(){
      let data = ref(true)
      const { posts, error, load} = getPosts()
      load()
      return {posts, data, error}
    }

  }

</script>
<template>
  <div>
  
    <div class="">
        <router-link :to="{ name: 'detail' , params: { id: post.id } }">
          <h2 class="">{{ post.title }}</h2>
        </router-link>
        <p class="">{{ spinnet }}</p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
    props: ['post'],
    setup(props){
        const spinnet = computed(() => {
            return props.post.description.substring(0, 50)+" ..."
        });

        return { spinnet }
    }
}
</script>

<style>

</style>
<template>
  <div>
    <div class="">
        <h2 class="">{{ post.title }}</h2>
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
            return props.post.des.substring(0, 50)+" ..."
        });

        return { spinnet }
    }
}
</script>

<style>

</style>
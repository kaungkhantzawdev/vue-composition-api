import {ref} from 'vue';

const getPosts = () => {
    const posts = ref([])

      const error = ref(null)

      const load = async () => {
        try{
          let fetchData = await fetch('https://fakestoreapi.com/products')
          if(!fetchData.ok){
            throw Error(" we have no data ")
          }
          posts.value =  await fetchData.json()
          console.log(posts)
        }
        catch(err){
          error.value = err.message
          console.log(err.message)
        }
      }


      return { posts , error, load}
}

export default getPosts
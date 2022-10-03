import { ref } from "vue";

const getPost = (id) => {
    const post = ref([])
    const error = ref()

    const load = async () => {
        try{
            let data = await fetch('https://fakestoreapi.com/products/' + id)
            console.log(data)
            if(!data.ok){
                throw Error('post is not found')
            }

            post.value = await data.json()
            // console.log(post)

        }

        catch(err){
            error.value = err.message
        }
    }

    return { post, load, error }     
}

export default getPost
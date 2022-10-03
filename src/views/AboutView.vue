<template>
  <div class="about">
    <h1>This is an about page {{ n }}</h1>
    <h2>Ref</h2>
    <div class="my-3">
      <p class="" ref="p">
        {{ n }}
        age is {{ a }}
      </p>
      <button class="btn btn-primary" @click="handleClick">click me</button>
      <button class="btn btn-warning ms-2" @click="a++">add 1 to age</button>
      <div class="">
        <input type="text"  class="form-control my-3 w-25  mx-auto" v-model="n">
      </div>

      <p class="">My name is {{ rioOne.name }} and {{ rioOne.age }} old.</p>
      <button class="btn btn-primary" @click="updateRioOne">Change Name</button>
    </div>

    <h2>Reactive</h2>
    <div class="">
      <p class="">My name is {{ rioTwo.name }} and {{ rioTwo.age }} old.</p>
      <button class="btn btn-primary" @click="updateRioTwo">change reactive</button>
    </div>
    <div class="my-3">
      <h5 class="">
        Ref is {{ nameOne }} - Reactive is {{ nameTwo }}
      </h5>
      <button class="btn btn-primary" @click="changeName">change name</button>
    </div>

<!--    search-->

    <div class="my-5">
      <div class="">
        <input type="text" class="form-control w-25 mx-auto" v-model="nameSearch">
      </div>
      <p class="my-2">
        search key is : {{ nameSearch }}
      </p>
      <div class="" v-for="(name, index) in matchingNames" :key="index">{{ index }} - {{ name }}</div>
    </div>
  </div>
</template>
<script>
import {computed, reactive, ref} from "vue";

export default {
  setup(){
    let p = ref("HLLO");
    console.log(p)

    const name = ref("mario");
    const age = ref(40);

    const rioOne = ref({name: 'RiOOne', age: 21});
    const rioTwo = reactive({name: "rioTow", age: 30});

    //test reactive and ref
    const nameOne = ref("HELLO Ref");
    let nameTwo = reactive("HIHI Reactive"); //not change

    const changeName = () => {
      nameOne.value = "change ref"
      nameTwo = "Change Ref"
    }

    const updateRioOne = () => {
      rioOne.value.name = "rio Change"
      rioOne.value.age = 40
    }

    const updateRioTwo = () => {
      rioTwo.name = "RioRio Reactive"
      rioTwo.age = 400
    }


    function handleClick(){
      // alert("hello click");
      // this.name = "HIHI"
      // console.log(p.value ,p)
      // p.value.textContent = "HLLOE PPP "

      name.value = "Kaung Khant Zaw"
      age.value = 7000

    }

    //search

    const nameSearch = ref('')
    const  names = ref(['mario', 'hello', 'rio', 'meme', 'abc', 'def', 'ggg', 'value']);
    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(nameSearch.value))
    })

    return { matchingNames , names , nameSearch ,n:name, a:age, handleClick, p, rioOne, rioTwo, updateRioOne, updateRioTwo, nameOne, nameTwo, changeName}
  }
}
</script>
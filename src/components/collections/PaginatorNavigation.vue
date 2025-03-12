<script setup>

const props = defineProps({
  numberPage: String
})

const emit = defineEmits(['increment', 'decrement'])

async function incrementPagination(event){
  emit('increment')
}

async function decrementPagination(event){
  emit('decrement')
}

</script>

<template>
  <div id="navigation">
    <button @click="decrementPagination">
      <img id="left" src="../../../public/fleche-vers-la-gauche.png" alt="Arrow to right"/>
    </button>
    <h4>
      {{ props.numberPage }}
    </h4>
    <button @click="incrementPagination">
      <img id="right" src="../../../public/fleche-vers-la-droite.png" alt="Arrow to right"/>
    </button>
  </div>
</template>

<style scoped>

h4{
  font-size: 2rem;
}

#navigation {
  display: flex;
  margin-left: 40%;
  margin-bottom: 1%;
  width: 20%;
  bottom: 0;
  position: fixed;
  background-color: rgb(250, 68, 68);
  border-radius: 15px;
}

#navigation button{
  cursor: pointer;
  background-color: rgb(250, 68, 68);
  border: 0;
}

#navigation img {
  display: block;
  margin: auto;
  width: 40%;
  transition: 0.25s all ease;
}

#navigation img:hover {
  transform: scale(1.05)
}
</style>
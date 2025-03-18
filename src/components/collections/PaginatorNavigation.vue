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
    <button @click="decrementPagination" class="nav-button">
      <img src="../../../public/fleche-vers-la-gauche.png" alt="Arrow to left" />
    </button>
    <h4>{{ props.numberPage }}</h4>
    <button @click="incrementPagination" class="nav-button">
      <img src="../../../public/fleche-vers-la-droite.png" alt="Arrow to right" />
    </button>
  </div>
</template>

<style scoped>
#navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f8f8f8;
  border-radius: 25px;
  padding: 8px 20px;
  width: 250px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

#navigation h4 {
  font-size: 1.5rem;
  color: #333;
  margin: 0;
}

.nav-button {
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  border-radius: 50%;
  transition: transform 0.3s ease, background-color 0.2s ease;
}

.nav-button:hover {
  background-color: #f0f0f0;
}

.nav-button img {
  width: 24px;
  height: 24px;
}

.nav-button:hover img {
  transform: scale(1.2);
}

#navigation .nav-button:focus {
  outline: none;
}
</style>



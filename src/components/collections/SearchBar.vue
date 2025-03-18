<script setup>
import { computed, ref, watch } from "vue";

const searchQuery = ref("");

const props = defineProps({
  pokemons: Array,
});

const emit = defineEmits(["filteredCards"]);

const filteredCards = computed(() => {
  return props.pokemons.filter(card =>
      card.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      card.id.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

watch(filteredCards, (newFilteredCards) => {
  emit("filteredCards", newFilteredCards);
});
</script>

<template>
  <div class="search-container">
    <input
        v-model="searchQuery"
        type="text"
        placeholder="Rechercher un Pokémon..."
        class="search-input"
    />
    <button v-if="searchQuery" class="clear-button" @click="searchQuery = ''">
      ✕
    </button>
  </div>

</template>

<style scoped>
.search-container {
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
}

.search-input {
  width: 100%;
  padding: 12px 40px 12px 20px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 30px;
  outline: none;
  transition: all 0.3s ease;
}

.search-input:focus {
  border-color: #6c5ce7;
  box-shadow: 0 0 10px rgba(108, 92, 231, 0.5);
}

.clear-button {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 18px;
  color: #888;
  cursor: pointer;
  transition: color 0.2s ease;
}

.clear-button:hover {
  color: #e74c3c;
}


</style>
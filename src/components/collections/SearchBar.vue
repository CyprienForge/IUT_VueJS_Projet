<script setup>
import { computed, ref, watch } from "vue";

const searchQuery = ref("");

const props = defineProps({
  pokemons: Array,
});

const emit = defineEmits(["filteredCards"]);

const filteredCards = computed(() => {
  return props.pokemons.filter(card =>
      card.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

watch(filteredCards, (newFilteredCards) => {
  emit("filteredCards", newFilteredCards);
});
</script>

<template>
  <input
      v-model="searchQuery"
      type="text"
      placeholder="Rechercher un Pokémon..."
  />
</template>

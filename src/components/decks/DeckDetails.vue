<script setup>

import DeckService from "@/services/DeckService.js";
import {onMounted, ref} from "vue";
import PokemonDetails from "@/components/collections/PokemonDetails.vue";

const props = defineProps({
  id: String,
})

console.log(props.id)
const deckService = new DeckService()
const deck = ref()

onMounted(async() => {
  deck.value = await deckService.getOneDeck(props.id)
  console.log(deck.value.cards)
})

</script>

<template>

  <div v-if="deck">
    <h2>
      {{ deck.name }}
    </h2>

    <ul v-for="card in deck.cards">
      <li>
        <PokemonDetails :id="card" />
      </li>
    </ul>

  </div>

</template>

<style scoped>
h2{
  text-align: center;
}
</style>
<script setup>

import DeckService from "@/services/DeckService.js";
import {onMounted, ref} from "vue";
import PokemonDisplay from "@/components/collections/PokemonDisplay.vue";

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

    <ul>
      <li v-for="card in deck.cards">
        <PokemonDisplay :id="card" />
      </li>
    </ul>

  </div>

</template>

<style scoped>
h2{
  text-align: center;
}

ul{
  margin-top: 4%;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
}

li{
  width: 20%;
}

</style>
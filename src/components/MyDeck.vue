<script setup>

import DeckService from "@/services/DeckService.js";
import {onMounted, ref} from "vue";
import AddDeck from "@/components/AddDeck.vue";

const deckService = new DeckService();
const decks = ref()

onMounted(async () => {
  decks.value = await deckService.getAllDecks();
})

</script>

<template>
  <h1>
    My Deck
  </h1>

  <AddDeck/>

    <ul>
      <li v-for="deck in decks" :key="deck.id">
        <p>
          {{ deck.name }}
        </p>
      </li>
    </ul>

</template>

<style scoped>

</style>
<script setup>

import DeckService from "@/services/DeckService.js";
import {onMounted, ref} from "vue";
import AddDeck from "@/components/decks/AddDeck.vue";

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
        <RouterLink :to="`/deck/${deck.id}`">
          <p>
            {{ deck.name }}
          </p>
        </RouterLink>
      </li>
    </ul>

</template>

<style scoped>

</style>
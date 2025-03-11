<script setup>

import DeckService from "@/services/DeckService.js";
import {onMounted, ref} from "vue";

const decks = ref()
const deckService = new DeckService()

const props = defineProps({
  id: String,
})

onMounted(async () => {
  decks.value = await deckService.getAllDecks()
});


const selectedDeck = defineModel()

function addCardToDeck(event){
  const deckService = new DeckService()
  deckService.addCard(selectedDeck.value, props.id)
}

</script>

<template>
  <form @submit.prevent="addCardToDeck">
    <select name="deckName" v-model="selectedDeck">
      <option v-for="deck in decks" :key="deck" :value="deck.id">
        {{ deck.name }}
      </option>
    </select>
    <input type="submit" value="Add to Deck" />
  </form>
</template>

<style scoped>

</style>
<script setup>

import DeckService from "@/services/DeckService.js";
import {onMounted, ref} from "vue";

const decks = ref()
const result = ref(true)
const deckService = new DeckService()

const props = defineProps({
  id: String,
})

onMounted(async () => {
  decks.value = await deckService.getAllDecks()
});


const selectedDeck = defineModel()

async function addCardToDeck(event){
  result.value = true
  const deckService = new DeckService()
  result.value = await deckService.addCard(selectedDeck.value, props.id)
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

  <p v-if="!result" :class="{error: !result}">
    Cette carte est déjà dans ce deck !
  </p>

</template>

<style scoped>

.error{
  color:red;
}

p{
  font-size: 0.75rem;
  padding-bottom: 2%;
}

</style>
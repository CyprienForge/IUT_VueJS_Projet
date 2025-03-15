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
  <form @submit.prevent="addCardToDeck" class="add-deck-form">
    <select name="deckName" v-model="selectedDeck" class="deck-select">
      <option v-for="deck in decks" :key="deck.id" :value="deck.id">
        {{ deck.name }}
      </option>
    </select>
    <input type="submit" value="Add" class="submit-btn" />
  </form>

  <p v-if="!result" class="error">
    Cette carte est déjà dans ce deck !
  </p>
</template>

<style scoped>
.add-deck-form {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

.deck-select {
  padding: 5px;
  font-size: 0.85rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
}

.submit-btn {
  padding: 5px 10px;
  font-size: 0.85rem;
  background-color: #fca5a5;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #f87171;
}

.error {
  color: red;
  font-size: 0.75rem;
  margin-top: 5px;
}
</style>

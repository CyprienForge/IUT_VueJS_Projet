<script setup async>

import CardService from "@/services/CardService.js";
import {onMounted, ref} from "vue";
import LocalStorageService from "@/services/LocalStorageService.js";
import DeckService from "@/services/DeckService.js";

const props = defineProps({
  id: String,
})

console.log(props.id)

const service = new CardService()
const deckService = new DeckService()
const localStorage = new LocalStorageService()
const card = ref()
const isObtain = ref(false)
const selectedDeck = defineModel()
const decks = ref()

onMounted(async () => {
  card.value = await service.getOneCard(props.id);
  decks.value = await deckService.getAllDecks()

  console.log(localStorage.getCardGetByBooster(props.id))
  if(localStorage.getCardGetByBooster(props.id) !== null){
    isObtain.value = true
  }
});

function addCardToDeck(event){
  const deckService = new DeckService()
  deckService.addCard(selectedDeck.value, props.id)
}

</script>

<template>
  <div class="cardPokemon" v-if="card">
    <h2>{{ card.category }} - {{ card.name }}</h2>

    <img :src="`${card.image}/low.png`">

    <div v-if="isObtain">

      <form @submit.prevent="addCardToDeck">
        <select name="deckName" v-model="selectedDeck">
          <option v-for="deck in decks" :key="deck" :value="deck.id">
            {{ deck.name }}
          </option>
        </select>
        <input type="submit" value="Add to Deck" />
      </form>

    </div>

  </div>
</template>

<style scoped>

.cardPokemon{
  display: flex;
  text-align: center;
  flex-direction: column;
  border: 4px solid white;
  border-radius: 2rem;
  width: 70%;
  margin-bottom: 4%;
  padding: 2%;
}

.cardPokemon img{
  display: block;
  margin: auto;
  width: 70%;
}

</style>
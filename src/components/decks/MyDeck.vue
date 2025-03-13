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

ul{
  margin-top: 4%;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

li{
  margin-top: 2%;
  color: black;
  text-align: center;
  background-color: white;
  border: 2px solid rgb(250, 68, 68);
  border-radius: 10px;
  width: 20%;
  transition: 0.25s all ease
}

li:hover{
  transform: scale(1.05);
}

li p{
  width: 100%;
  color: black;
  text-decoration: none;
  text-underline: none;
}

</style>
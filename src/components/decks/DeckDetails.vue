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

async function deleteDeck(event) {
  await deckService.deleteOneCard(props.id)
  location.reload();
}

</script>

<template>

  <div v-if="deck">

    <div class="presentation">
      <div>

      </div>
      <h2>
        {{ deck.name }}
      </h2>
      <img @click="deleteDeck" src="../../../public/poubelle.png" alt="Icon to delete deck" />
    </div>

    <ul>
      <li v-for="card in deck.cards">
        <PokemonDisplay :id="card" />
      </li>
    </ul>

  </div>

</template>

<style scoped>

.presentation{
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
}

.presentation img{
  width: 6rem;
  cursor: pointer;
}

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
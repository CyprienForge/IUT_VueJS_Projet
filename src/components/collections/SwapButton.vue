<script setup>

import CardService from "@/services/CardService.js";
import {ref} from "vue";
import LocalStorageService from "@/services/LocalStorageService.js";

const cardService = new CardService()
const localService = new LocalStorageService()
const cards = ref([])
const isSwappable = ref(true)
const messageSuccess = ref()

const emit = defineEmits(["swap", "deleteCardOnSwap"]);
const props = defineProps({
  cards: Array
})

async function swap(){

  /*
  cards.value = localService.getCardsByBooster()
  const nbCards = localService.getNbOccurences()

  if(nbCards < 4 || nbCards === null){
    isSwappable.value = false
    return
  }

  for(let i = 0; i < 4; i++){
    const index = Math.floor(Math.random() * cards.value.length);
    if(localService.deleteCardByBooster(cards.value[index].id)){
      console.log("Delete du tableau")
      cards.value.splice(index, 1);
    }
  }

  console.log(cards.value)
  const indexPagination = Math.floor(Math.random() * 10);
  const indexPokemon = Math.floor(Math.random() * 99);

  const allCards = await cardService.getAllCardsByNumber(indexPagination, 100)
  const newCard = allCards[indexPokemon]

  localService.addCardGetByBooster(newCard)
  cards.value.push(newCard)
  messageSuccess.value = newCard.name
   */

  emit("swap", cards.value)
}

function deleteCardOnSwap(card){
  emit("deleteCardOnSwap", card)
}

</script>

<template>

  <button id="swap" @click="swap">
    <h6>
      Swap
    </h6>
  </button>

  <div class="currentSwap">
    <h5 v-for="card in props.cards" :key="card.id">
      {{ card.name }}
      <button @click="deleteCardOnSwap(card)">
        Delete
      </button>
    </h5>
  </div>

  <h4 v-if="messageSuccess">
    Vous avez obtenu {{ messageSuccess }} grâce au swap !
  </h4>

  <p v-if="!isSwappable">
    Il faut posséder 4 cartes pour procéder à un swap !
  </p>

</template>

<style scoped>

.currentSwap{
  display: flex;
  justify-content: space-between;
}

#swap{
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12rem;
  border-radius: 1rem;
  height: 4rem;
  transition: 0.25s all ease;
}

#swap:hover{
  border: 0;
  background-color: rgb(250, 68, 68);
}

h6{
  font-size: 1.25rem;
}

p{
  color: red;
  text-align: center;
}

h4{
  text-align: center;
}

</style>
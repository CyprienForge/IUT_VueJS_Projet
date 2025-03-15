<script setup async>

import CardService from "@/services/CardService.js";
import {onMounted, ref} from "vue";
import LocalStorageService from "@/services/LocalStorageService.js";
import DeckService from "@/services/DeckService.js";
import AddCardToDeck from "@/components/decks/AddCardToDeck.vue";

const props = defineProps({
  id: String,
})

const service = new CardService()
const localStorage = new LocalStorageService()
const card = ref()
const isObtain = ref(false)

onMounted(async () => {
  card.value = await service.getOneCard(props.id);

  if(localStorage.getCardGetByBooster(props.id) !== null){
    isObtain.value = true
  }
});

</script>

<template>
  <RouterLink :to="`/all/${props.id}`">
    <div class="cardPokemon" v-if="card">
      <h2>{{ card.category }} - {{ card.name }}</h2>

      <img :src="`${card.image}/low.png`">

      <div v-if="isObtain">
        <AddCardToDeck :id="props.id"/>
      </div>

    </div>
  </RouterLink>
</template>

<style scoped>

.cardPokemon{
  display: flex;
  text-align: center;
  flex-direction: column;
  border: 4px solid white;
  border-radius: 2rem;
  width: 12rem;
  margin-bottom: 4%;
  height: 22rem;
  padding: 2.5rem;
}

.cardPokemon img{
  display: block;
  margin: auto;
  width: 10rem;
}

</style>
<script setup async>

import CardService from "@/services/CardService.js";
import {onMounted, ref, watch} from "vue";
import LocalStorageService from "@/services/LocalStorageService.js";
import DeckService from "@/services/DeckService.js";
import AddCardToDeck from "@/components/decks/AddCardToDeck.vue";

const props = defineProps({
  id: String,
  nbOccurences: Number,
})

const service = new CardService()
const localStorage = new LocalStorageService()
const card = ref()
const isObtain = ref(false)
const occurrences = ref(props.nbOccurences)

watch(() => props.nbOccurences, (newVal) => {
  occurrences.value = newVal;
});

onMounted(async () => {
  card.value = await service.getOneCard(props.id);

  if(localStorage.getCardGetByBooster(props.id) !== null){
    isObtain.value = true
  }
});

</script>

<template>
  <div class="pokemon-container">

    <RouterLink :to="`/all/${props.id}`" class="pokemon-link">
      <div class="pokemon-card" v-if="card">
        <p class="pokemon-name">{{ card.name }}</p>
        <img :src="`${card.image}/low.png`" alt="Pokemon Image" class="pokemon-image"/>
      </div>
    </RouterLink>

    <p>
      Nombre : {{ occurrences }}
    </p>

    <div v-if="isObtain" class="add-to-deck-container">
      <AddCardToDeck :id="props.id" />
    </div>
  </div>
</template>

<style scoped>
.pokemon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
}

.pokemon-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  width: 200px;
  height: auto;
  margin-bottom: 10px;
  cursor: pointer;
  box-sizing: border-box;
}

.pokemon-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: black;
}
.pokemon-link {
  text-decoration: none;
}

.pokemon-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.add-to-deck-container {
  display: block;
  width: 100%;
  margin-top: 10px;
  text-align: center;
}
</style>



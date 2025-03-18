<script setup>
import DeckService from "@/services/DeckService.js";
import {onMounted, ref, watch} from "vue";
import AddDeck from "@/components/decks/AddDeck.vue";

const deckService = new DeckService();
const decks = ref([]);
const loading = ref(true);

onMounted(async () => {
  decks.value = await deckService.getAllDecks();
  loading.value = false;
});

function recupNewDeck(newDeck){
  decks.value.push(newDeck);
}

watch(decks, (newDecks) => {
  console.log("Deck a évolué !")
});

</script>

<template>
  <h1>My Decks</h1>
  <div class="deck-container">

    <div v-if="loading" class="loading-message">
      <p>Loading your decks...</p>
    </div>

    <ul class="deck-list">
      <li v-for="deck in decks" :key="deck.id" class="deck-item">
        <RouterLink :to="`/deck/${deck.id}`" class="deck-link">
          <p class="deck-name">{{ deck.name }}</p>
        </RouterLink>
      </li>
    </ul>

    <AddDeck @submit-new-deck="recupNewDeck"/>
  </div>
</template>

<style scoped>

.deck-container {
  background-color: #f4f4f9;
  padding: 3% 10%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

<<<<<<< HEAD
.loading-message {
  font-size: 1.2em;
  color: #666;
  margin-bottom: 2em;
  text-align: center;
  font-weight: bold;
}

.deck-list {
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  gap: 2rem;
}

.deck-item {
  background-color: #fff;
  border-radius: 12px;
  width: 250px;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  overflow: hidden;
  text-align: center;
}

.deck-item:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  background-color: #f0f0f0;
}

.deck-link {
  text-decoration: none;
  color: inherit;
}

.deck-name {
  font-size: 1.4em;
  color: #333;
  font-weight: 500;
  margin: 0;
}


.deck-link:hover .deck-name {
  color: #f06;
}


.deck-item {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

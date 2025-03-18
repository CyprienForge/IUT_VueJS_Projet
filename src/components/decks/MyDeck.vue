<script setup>
import DeckService from "@/services/DeckService.js";
import { onMounted, ref, watch } from "vue";
import AddDeck from "@/components/decks/AddDeck.vue";
import LocalStorageService from "@/services/LocalStorageService.js";

const deckService = new DeckService();
const localStorageService = new LocalStorageService();
const cards = ref([]);
const decks = ref([]);
const loading = ref(true);
const result = ref(true);
const deckToAddCard = ref(null);
const selectedCard = defineModel()
const selectedDeck = ref(null);

onMounted(async () => {
  decks.value = await deckService.getAllDecks();
  cards.value = localStorageService.getCardsByBooster();
  loading.value = false;
});

function recupNewDeck(newDeck) {
  decks.value.push(newDeck);
}

async function addCardToDeck(idDeck) {
  if(selectedCard === undefined || selectedCard === null){
    return
  }

  console.log(idDeck)
  console.log(selectedCard);

  await deckService.addCard(idDeck, selectedCard.value)
}

function toggleAddCardForm(deckId) {
  if (deckToAddCard.value === deckId) {
    deckToAddCard.value = null;
  } else {
    deckToAddCard.value = deckId;
  }
}

watch(decks, (newDecks) => {
  console.log("Deck a évolué !");
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


        <div class="add-card-button" @click="toggleAddCardForm(deck.id)">
          <span>+</span>
        </div>

        <div v-if="deckToAddCard === deck.id" class="add-card-form">
          <select v-model="selectedCard" class="deck-select">
            <option v-for="card in cards" :key="card.id" :value="card.id">
              {{ card.name }}
            </option>
          </select>
          <button @click="addCardToDeck(deck.id)" class="submit-btn">Add Card</button>
        </div>
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
  position: relative;
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

.add-card-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #4CAF50;
  color: white;
  font-size: 24px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.add-card-button:hover {
  background-color: #45a049;
}

.add-card-form {
  margin-top: 10px;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
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

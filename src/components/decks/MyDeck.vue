<script setup>
import DeckService from "@/services/DeckService.js";
import { onMounted, ref } from "vue";
import AddDeck from "@/components/decks/AddDeck.vue";

const deckService = new DeckService();
const decks = ref([]);
const loading = ref(true);

onMounted(async () => {
  decks.value = await deckService.getAllDecks();
  loading.value = false;
});
</script>

<template>
  <h1>My Decks</h1>
  <div class="deck-container">


    <!-- Composant pour ajouter un deck -->


    <!-- Affichage du message de chargement -->
    <div v-if="loading" class="loading-message">
      <p>Loading your decks...</p>
    </div>

    <!-- Liste des decks -->
    <ul class="deck-list">
      <li v-for="deck in decks" :key="deck.id" class="deck-item">
        <RouterLink :to="`/deck/${deck.id}`" class="deck-link">
          <p class="deck-name">{{ deck.name }}</p>
        </RouterLink>
      </li>
    </ul>

    <AddDeck/>
  </div>
</template>

<style scoped>
/* Container principal */
.deck-container {
  background-color: #f4f4f9; /* Couleur de fond douce */
  padding: 3% 10%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}



/* Message de chargement */
.loading-message {
  font-size: 1.2em;
  color: #666;
  margin-bottom: 2em;
  text-align: center;
  font-weight: bold;
}

/* Liste des decks */
.deck-list {
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  gap: 2rem; /* Espacement entre les éléments */
}

/* Élément de la liste (deck individuel) */
.deck-item {
  background-color: #fff;
  border-radius: 12px;
  width: 250px; /* Largeur des éléments */
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1); /* Ombre douce */
  cursor: pointer;
  overflow: hidden;
  text-align: center;
}

/* Effet au survol des éléments */
.deck-item:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); /* Ombre plus marquée */
  background-color: #f0f0f0; /* Changer la couleur de fond au survol */
}

/* Lien vers le deck */
.deck-link {
  text-decoration: none;
  color: inherit;
}

/* Nom du deck */
.deck-name {
  font-size: 1.4em;
  color: #333;
  font-weight: 500;
  margin: 0;
}

/* Effet au survol du texte */
.deck-link:hover .deck-name {
  color: #f06; /* Change la couleur au survol */
}

/* Ajout d'une animation légère pour les éléments lors de leur apparition */
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

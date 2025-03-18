<script setup>
import { ref, onMounted } from "vue";
import CardService from "@/services/CardService.js";

const props = defineProps({
  id: String,
});

const pokemon = ref([]);

onMounted(async () => {
  const cardService = new CardService();
  pokemon.value = await cardService.getOneCard(props.id);
});
</script>

<template>
  <div class="card-container">
    <h2 class="card-title">{{ pokemon.name }}</h2>
    <div class="card-details">
      <div class="card-image">
        <img :src="`${pokemon.image}/low.png`" alt="pokemon image" />
      </div>

      <div class="card-description">
        <ul class="info-list">
          <li><strong>HP :</strong> {{ pokemon.hp }}</li>
          <li><strong>Rareté :</strong> {{ pokemon.rarity }}</li>
          <li>
            <strong>Types :</strong>
            <ul>
              <li v-for="type in pokemon.types" :key="type">{{ type }}</li>
            </ul>
          </li>
          <li>
            <strong>Attaques :</strong>
            <ul class="attacks-list">
              <li v-for="attack in pokemon.attacks" :key="attack.name">
                {{ attack.name }} - {{ attack.damage }}HP
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 2rem auto;
}

.card-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
}

.card-details {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
}

.card-image img {
  width: 200px;
  height: auto;
  border-radius: 8px;
  border: 2px solid #ddd;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.card-description {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.info-list {
  list-style-type: none;
  padding-left: 0;
}

.info-list li {
  font-size: 1.2rem;
  margin: 0.5rem 0;
  line-height: 1.6;
}

.attacks-list {
  list-style-type: none;
  padding-left: 0;
}

.attacks-list li {
  font-size: 1.1rem;
  color: #f06;
}

.info-list strong {
  color: #555;
}
</style>

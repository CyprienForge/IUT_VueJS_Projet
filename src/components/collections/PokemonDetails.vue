<script setup>

import CardService from "@/services/CardService.js";
import {onMounted, ref} from "vue";

const props = defineProps({
  id: String,
})

const pokemon = ref([])

onMounted(async() => {
  const cardService = new CardService()
  pokemon.value = await cardService.getOneCard(props.id)

  console.log(pokemon.value)
})

</script>

<template>

  <h2>
    {{ pokemon.name }}
  </h2>

  <div class="cardPokemonDesc">
    <img :src="`${pokemon.image}/low.png`">

    <ul>
      <li>
        HP : {{ pokemon.hp }}
      </li>
      <li>
        Rareté : {{ pokemon.rarity }}
      </li>
      <p>Types : </p>
      <li v-for="type in pokemon.types" :key="type">
        {{ type }}
      </li>
      <p>Attaques : </p>
      <li v-for="attack in pokemon.attacks">
        {{ attack.name }} - {{ attack.damage }}HP
      </li>
    </ul>
  </div>

</template>

<style scoped>

.cardPokemonDesc {
  display: flex;
  align-items: center;
}

h2{
  text-align: center;
  font-weight: bolder;
  font-size: 3rem;
}

img{
  float: left;
  margin-left: 4rem;
}

ul{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
}

</style>
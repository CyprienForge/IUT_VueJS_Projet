<script setup async>

import CardService from "@/services/CardService.js";
import {onMounted, ref} from "vue";

const props = defineProps({
  id: String,
})

console.log(props.id)

const service = new CardService()
const card = ref()

onMounted(async () => {
  card.value = await service.getOneCard(props.id);
  console.log(card.value);
});

</script>

<template>
  <div v-if="card">
    <h2>{{ card.category }} - {{ card.name }}</h2>

    <img :src="`${card.image}/high.png`">
  </div>
</template>

<style scoped>

</style>
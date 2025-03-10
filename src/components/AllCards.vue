<script setup>

const props = defineProps({
  allCards: Array,
})

</script>

<template>
  <h1>
    All Cards
  </h1>

  <ul>
    <li v-for="card in allCards" :key="card.id">
      <RouterLink :to="`/all/${card.id}`">
        <p>
          {{ card.name }}
        </p>
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped>

</style>
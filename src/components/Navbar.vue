<script setup>

import LinkService from "@/services/LinkService.js";

const linkService = new LinkService()
const links = linkService.getLinks()

</script>

<template>

  <ul v-for="link in links" style="display: inline-block">
    <RouterLink :to="`${link.path}`">
      {{ link.label }}
    </RouterLink>
  </ul>
</template>

<style scoped>

</style>
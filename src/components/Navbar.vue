<script setup>

import LinkService from "@/services/LinkService.js";

const linkService = new LinkService()
const links = linkService.getLinks()

</script>

<template>

  <div>
    <ul v-for="link in links" style="display: inline-block">
      <RouterLink :to="`${link.path}`">
        {{ link.label }}
      </RouterLink>
    </ul>
  </div>

</template>

<style scoped>
div{
  width: 100%;
  background-color: rgb(250, 68, 68);
  display: flex;
  justify-content: space-evenly;
  height: 6%;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
}
</style>
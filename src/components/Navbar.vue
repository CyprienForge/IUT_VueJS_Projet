<script setup>

import LinkService from "@/services/LinkService.js";

const linkService = new LinkService()
const links = linkService.getLinks()

</script>

<template>
  <div class="navbar">
    <ul>
      <li v-for="link in links" :key="link.path">
        <RouterLink :to="link.path" class="nav-link">
          <img :src="link.icon" :alt="link.label" class="nav-icon" :class="{ small: link.label === 'My Deck' }" />
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.navbar {
  width: 100%;
  background-color: rgb(250, 68, 68);
  display: flex;
  align-items: center;  /* Assure un alignement vertical des éléments */
  height: 6%;
  padding: 0 20px;
}

ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: space-evenly; /* Espacement des icônes */
  width: 100%;
}

li {
  margin: 0 10px;
  display: flex;

  align-items: center;  /* Centre l'icône verticalement */
}

.nav-link {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.nav-icon {
  width: 48px;  /* Taille par défaut */
  height: 48px; /* Taille par défaut */
  transition: transform 0.2s ease, filter 0.3s;
}

.nav-icon:hover {
  transform: scale(1.2);
  filter: brightness(1.2);
}

.nav-icon.small {
  width: 70px;  /* Taille spécifique pour "Home" */
  height: 70px; /* Taille spécifique pour "Home" */
}

</style>
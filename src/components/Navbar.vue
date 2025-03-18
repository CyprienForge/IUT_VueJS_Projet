<script setup>
import LinkService from "@/services/LinkService.js";

const linkService = new LinkService()
const links = linkService.getLinks()
</script>

<template>
  <div class="navbar">
    <ul>
      <li v-for="link in links" :key="link.path" class="nav-item">
        <RouterLink :to="link.path" class="nav-link">
          <div class="icon-container">
            <img :src="link.icon" :alt="link.label" class="nav-icon" :class="{ small: link.label === 'My Deck' }" />
            <span class="tooltip">{{ link.label }}</span>
          </div>
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
  align-items: center;
  height: 6%;
  padding: 0 20px;
}

ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: space-evenly;
  width: 100%;
}

li {
  margin: 0 10px;
  display: flex;
  align-items: center;
}

.nav-link {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  flex-direction: column;
  position: relative;
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
  width: 70px;  /* Taille spécifique pour "My Deck" */
  height: 70px; /* Taille spécifique pour "My Deck" */
}


.tooltip {
  visibility: hidden;
  width: 100px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 5px;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.2s ease, visibility 0.2s ease;
}

.nav-link:hover .tooltip {
  visibility: visible;
  opacity: 1;
}
</style>


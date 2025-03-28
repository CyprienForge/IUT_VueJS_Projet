import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import {createMemoryHistory, createRouter, createWebHistory} from 'vue-router'
import Home from "@/components/Home.vue";
import AllCards from "@/components/collections/AllCards.vue";
import MyDeck from "@/components/decks/MyDeck.vue";
import OpenBooster from "@/components/OpenBooster.vue";
import PokemonDisplay from "@/components/collections/PokemonDisplay.vue";
import DeckDetails from "@/components/decks/DeckDetails.vue";
import PokemonDetails from "@/components/collections/PokemonDetails.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/all', component: AllCards },
    { path: '/deck', component: MyDeck },
    { path: '/open', component: OpenBooster },
    { path: '/all/:id', component: PokemonDetails, props: true },
    { path: '/deck/:id', component: DeckDetails, props: true }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')

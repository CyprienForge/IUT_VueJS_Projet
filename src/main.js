import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createMemoryHistory, createRouter } from 'vue-router'
import Home from "@/components/Home.vue";
import AllCards from "@/components/AllCards.vue";
import MyDeck from "@/components/MyDeck.vue";
import OpenBooster from "@/components/OpenBooster.vue";
import PokemonDetails from "@/components/PokemonDetails.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/all', component: AllCards },
    { path: '/deck', component: MyDeck },
    { path: '/open', component: OpenBooster },
    { path: '/all/:id', component: PokemonDetails, props: true },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

createApp(App).use(router).mount('#app')

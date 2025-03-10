import ApiService from "@/services/ApiService.js";

export default class DeckService {

    constructor(){
        this.service = new ApiService()
    }

    async getAllDecks() {
        const decks = await this.service.getAll('https://67b8eac151192bd378dc35a6.mockapi.io/decks', 'GET')
        console.log("Récupération des decks via l'API !", decks)
        return decks
    }

    async getOneDeck(id){
        const url = 'https://67b8eac151192bd378dc35a6.mockapi.io/decks/' + id
        const deck = await this.service.getOne(url, 'GET')
        return deck
    }

    async createOneDeck(newDeck) {
        const deck = await this.service.createOne('https://67b8eac151192bd378dc35a6.mockapi.io/decks', newDeck)
        console.log("création d'un deck !", deck)
        return deck
    }

}
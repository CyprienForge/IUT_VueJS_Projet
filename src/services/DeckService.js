import ApiService from "@/services/ApiService.js";
import CardService from "@/services/CardService.js";

export default class DeckService {

    constructor(){
        this.service = new ApiService()
    }

    async getAllDecks() {
        const decks = await this.service.getAll('https://67a87ca5203008941f6a09af.mockapi.io/api/foot/deck', 'GET')
        console.log("Récupération des decks via l'API !", decks)
        return decks
    }

    async getOneDeck(id){
        const url = 'https://67a87ca5203008941f6a09af.mockapi.io/api/foot/deck/' + id
        const deck = await this.service.getOne(url, 'GET')
        return deck
    }

    async createOneDeck(newDeck) {
        const deck = await this.service.createOne('https://67a87ca5203008941f6a09af.mockapi.io/api/foot/deck', newDeck)
        console.log("création d'un deck !", deck)
        return deck
    }

    async addCard(deckId, cardId){
        const deck = await this.getOneDeck(deckId)
        let isPresent = false

        console.log(deck.cards[0])

        deck.cards.forEach(card => {
            if(card === cardId) isPresent = true
        })

        if(isPresent == true){
            console.log("Carte déjà présente dans le deck !")
            return false
        }

        deck.cards.push(cardId)

        await this.service.update('https://67a87ca5203008941f6a09af.mockapi.io/api/foot/deck/' + deckId, deck)
    }

}
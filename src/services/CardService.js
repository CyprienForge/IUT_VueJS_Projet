import ApiService from "@/services/ApiService.js";
import LocalStorageService from "@/services/LocalStorageService.js";

export default class CardService {

    constructor(){
        this.service = new ApiService()
        this.serviceLocalStorage = new LocalStorageService()
    }

    async getAllCardsByNumber(numberPage, numberPokemons){
        const cards = await this.service.getAll(`https://api.tcgdex.net/v2/fr/cards?pagination:page=${numberPage}&pagination:itemsPerPage=${numberPokemons}`, 'GET')

        console.log("Récup des cartes via API")
        return cards
    }

    async getOneCard(cardId){
      return await this.service.getOne(`https://api.tcgdex.net/v2/fr/cards/${cardId}`, 'GET')
    }

    async getAllCards(){
        return await this.service.getAll('https://api.tcgdex.net/v2/fr/cards/', 'GET')
    }

}
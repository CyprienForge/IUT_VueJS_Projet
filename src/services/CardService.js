import ApiService from "@/services/ApiService.js";
import LocalStorageService from "@/services/LocalStorageService.js";

export default class CardService {

    constructor(){
        this.service = new ApiService()
        this.serviceLocalStorage = new LocalStorageService()
    }

    async getAllCards(){
        if(localStorage.length > 0) return this.serviceLocalStorage.getCardsInStorage()
        const cards = await this.service.getAll('https://api.tcgdex.net/v2/fr/cards', 'GET')
        cards.forEach(card => {
            this.serviceLocalStorage.addCardInStorage(card)
        })

        return cards
    }

    async getOneCard(cardId){
      return await this.service.getOne(`https://api.tcgdex.net/v2/fr/cards/${cardId}`, 'GET')
    }

}
export default class LocalStorageService{


    addCardInStorage(card){
        localStorage.setItem(card.id, JSON.stringify(card))
    }

    getCardGetByBooster(id){
        return localStorage.getItem('booster-' + id)
    }

    memorizeNumberPagination(number){
        localStorage.setItem('paginator', number)
    }

    getNumberPagination(number){
        if(localStorage.getItem('paginator') == null){
            console.log("Paginator a 10 par défaut")
            this.memorizeNumberPagination(10)
        }
        return localStorage.getItem('paginator')
    }

    addCardGetByBooster(card){
        localStorage.setItem('booster-' + card.id, JSON.stringify(card))
    }

    async getCardsInStorage(){
        const cards = []
        for(let key in localStorage) {
            if (!localStorage.hasOwnProperty(key)) {
                continue;
            }
            const item = JSON.parse(localStorage.getItem(key));
            cards.push(item)

            if(cards.length >= 5000){
                return cards
            }
        }

        return cards
    }

    getCardsGetByBooster(){
        const cards = []
        for(let key in localStorage) {
            if (!localStorage.hasOwnProperty(key)) {
                continue;
            }
            if(key.substring(0, 7) !== 'booster'){
                continue;
            }

            const item = JSON.parse(localStorage.getItem(key));
            cards.push(item)

            if(cards.length >= 1000){
                return cards
            }
        }

        return cards
    }

}
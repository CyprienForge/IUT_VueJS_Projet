export default class LocalStorageService{


    addCardInStorage(card){
        localStorage.setItem(card.id, JSON.stringify(card))
    }

    getCardGetByBooster(id){
        return localStorage.getItem('booster-' + id)
    }

    addDoublon(id){
        let occurence = parseInt(localStorage.getItem('occurence-' + id))
        occurence += 1

        localStorage.setItem('occurence-' + id, JSON.stringify(occurence))
    }

    removeOneDoublon(id){
        let occurence = parseInt(localStorage.getItem('occurence-' + id))
        occurence -= 1

        if(occurence === 0){
            localStorage.removeItem('occurence-' + id)
            localStorage.removeItem('booster-' + id)
        }
        else{
            localStorage.setItem('occurence-' + id, JSON.stringify(occurence))
        }

    }

    getDoublon(id){
        return localStorage.getItem('occurence-' + id)
    }

    getNbOccurences(){
        let nb = 0
        for(let key in localStorage) {
            if(key.substring(0, 10) !== 'occurence-'){
                continue;
            }
            nb++
        }

        return nb
    }

    deleteCardByBooster(id){
        if(parseInt(localStorage.getItem('occurence-' + id)) >= 1){
            this.removeOneDoublon(id)
        }
        else{
            localStorage.removeItem('occurence-' + id)
            localStorage.removeItem('booster-' + id)
            return true
        }
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
        if(localStorage.getItem('booster-' + card.id) !== null){
            this.addDoublon(card.id)
            return false
        }

        localStorage.setItem('booster-' + card.id, JSON.stringify(card))
        localStorage.setItem('occurence-' + card.id, JSON.stringify(1))
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

    getCardsByBooster(){
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
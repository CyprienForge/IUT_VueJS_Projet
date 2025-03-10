export default class LocalStorageService{

    addCardInStorage(card){
        localStorage.setItem(card.id, JSON.stringify(card))
    }

    getCardsInStorage(){
        const cards = []
        for(let key in localStorage) {
            if (!localStorage.hasOwnProperty(key)) {
                continue;
            }
            const item = JSON.parse(localStorage.getItem(key));
            cards.push(item)

            if(cards.length >= 1000){
                console.log("Local Storage récupéré !")
                return cards
            }
        }

        console.log("Local Storage récupéré !")
        return cards
    }

}
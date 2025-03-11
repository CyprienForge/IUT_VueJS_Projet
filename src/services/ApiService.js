export default class ApiService {

    async getAll(url, verbe){

        const response = await fetch(url, {
            method: verbe,
        })
        const cards = response.json()

        console.log("Récupération API !")

        return cards
    }

    async getOne(url, verbe){

        const response = await fetch(url, {
            method: verbe,
        })
        const card = response.json()

        console.log("Récupération d'un élément effectuée !")

        return card
    }

    async createOne(url, data){

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        const deck = response.json()

        console.log("Deck crée !")

        return deck
    }

    async update(url, data){
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        const deck = response.json()
    }

}
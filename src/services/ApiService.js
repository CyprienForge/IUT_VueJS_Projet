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

        console.log("Récupération d'un pokémon effectuée !")

        return card
    }

}
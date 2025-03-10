import ApiService from "@/services/ApiService.js";

export default class BoosterService {

    constructor(){
        this.service = new ApiService()
    }

    async getAllBoosters() {
        const boosters = await this.service.getAll('https://67b8eac151192bd378dc35a6.mockapi.io/boosters', 'GET')
        console.log("Récupération des boosters via l'API !", boosters)
        return boosters
    }

}
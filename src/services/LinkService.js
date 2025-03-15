export default class LinkService {

    getLinks(){

        return [
            {label: "Home", path: "/", icon: "../../public/home.png"},
            {label: "All Cards", path: "/all", icon: "../../public/cards.webp"},
            {label: "My Deck", path: "/deck", icon: "../../public/deck.webp"},
            {label: "Open a booster", path: "/open", icon: "../../public/boosterOpen.png"}
        ]
    }

}
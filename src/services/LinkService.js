export default class LinkService {

    getLinks(){

        const links = [
            { label: 'Home', path: '/' },
            { label: 'All Cards', path: '/all' },
            { label: 'My Deck', path: '/deck' },
            { label: 'Open a booster', path: '/open' }
        ]
        return links
    }

}
# IUT_Vue_Project

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Statut du projet 🚦
- 🟩 fait
- 🟧 En cours 
- 🟥 À venir


## Sujet du TP
### Socle technique

    1.Mettre en place une classe/fichier de service LinkService qui retournera une liste de lien. Un lien sera composé d'un label (ce qui sera affiché sur la page) et d'un path (qui correspond à l'URL) 

    2.Mettre en place une classe/fichier de service ApiService permettant de faire des appels de type GET/POST/UPDATE/DELETE et qui manipuleront des données au format JSON (cette classe doit fonctionner peu importe l'URL et le verbe utilisé)

    3.Mettre en place une classe/fichier de service CardService permettant de récupérer toutes les cartes disponibles sur l'API (ce service devra utiliser le service précédemment créé)

    4.Mettre en place une classe/fichier de service LocalStorageService permettant de manipuler le LocalStorage de votre application


### Socle fonctionnel

    1.Créer un composant Navbar qui affichera une liste de liens : Home, All Cards, My Decks, Open a booster

    2.Au clic sur chaque lien, le H1 de la page devra afficher le libellé du lien cliqué

    3.Sur la page All cards, vous listerez l'ensemble des cartes de l'API des cartes en affichant leur nom

    4.Au clic sur le nom de la carte, vous devrez afficher le nom, l'image et les types de la carte (si la carte ne possède pas d'image, vous devrez utiliser un placeholder de votre choix

    5.Sur la page My decks vous listerez l'ensemble des decks présents sur l'API des decks en affichant leur nom

    6.Sur la page My decks vous aurez la possibilité d'ajouter un deck. Un deck est composé d'un name, d'un idUser (que vous devrez générer aléatoirement entre 1 et 10) et d'une liste de cards (qui correspond à l'id d'une carte). Tous les champs sont obligatoires

    7.Au clic sur un deck, vous devrez rediriger l'utilisateur sur la page du deck et afficher le nom du deck ainsi que toutes les cartes du deck (nom + image)

    8.Sur la page Open a booster vous devrez afficher les boosters présents dans l'API. Au clic sur le nom d'un booster vous devrez récupérer aléatoirement une carte présente dans ce dernier et la stocker dans le LocalStorage (des doublons peuvent être obtenus via les boosters)

    9.Sur la page Home vous listerez les cartes qui ont été obtenues en ouvrant des boosters ainsi que la quantité de chacune (des doublons peuvent être obtenus via les boosters)

    10.Sur la page All Cards, mettre en place une pagination (via l'API) en ne récupérant par défaut que 100 cartes avec 10 cartes par pages

    11.Sur la page All Cards, via une liste déroulante, l'utilisateur pourra choisir le nombre de cartes par page (choix entre 10, 25, 50 et toutes). Ce choix devra être conserver

    12.Pour créer un deck, vous devrez lister l'ensemble de vos cartes obtenues (affichages du nom et de l'image)

    13.Sur la page permettant de créer un deck, vous mettrez en place un champ de recherche filtrant les cartes obtenues dans les boosters via le nom ou l'id.

    14.Mettez en place une fonctionnalité permettant de détruire 4 de vos cartes afin d'obtenir une nouvelle carte qui s'ajoutera autoamtiquement à votre collection


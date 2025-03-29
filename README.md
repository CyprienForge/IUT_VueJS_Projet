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


### Ajouts Personnels / Différences au sujet :

    - Nous avons fait le choix d'ajouter 2 classe/fichier de service (BoosterService et DeckService) pour une gestion plus précise.

    - Nous avons décidé d'afficher une image plutôt qu'un label dans le composant NavBar pour une meilleure immersion dans l'univers Pokémon. Cepndant notre LinkService renvoie bien un lien image et un label.

    - Nous avons égalemment affiché les autres informations de la carte à savoir le nombre de HP et ses attaques.

    - Nous avons créé notre propre MockAPI pour les decks.

    - La création de deck se fait uniquement avec un nom obligatoire, un idUser est attribué aléatoirement et le deck est créé vide. 

    - Nous avons décidé d'afficher seulement les 3 premiers boosters mais ils sont bien tous récuperés.  

    - Nous affichons seulement le nom des pokémons pour les ajouter à un deck et pas image + nom.

    -  La barre de recherche est dans Home où se trouve notre collection de cartes et non dans la page de création de deck.

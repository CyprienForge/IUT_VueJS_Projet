# IUT_Vue_Project

## Lancer le projet

```sh
npm install
```
```sh
npm run dev
```

```sh
npm run build
```

### Liste de fonctionnalités 

    - Liste des pokémons que vous avez dans votre collection sur la page d'accueil 
    - Cette liste peut-être parcourue à l'aide d'une barre de recherche sur le nom et sur les id des pokémons 
    - Vous pouvez échanger 4 de vos pokémons (doublons compris) contre une autre carte au hasard
    - Chaque pokémon peut-être ajouté à un deck
    - Chaque pokémon est clickable pour visualiser de plus amples informations 
    - Liste de tous les pokémons disponibles sur la deuxième page du menu 
    - Cette page est paginée par défaut de 10 en 10 mais ceci peut-être modifié en haut de la page 
    - Vous pouvez ouvrir des boosters dans la page boosters qui vous permettront d'ajouter des pokémons à votre collection
    - Vous pouvez ensuite créer, supprimmer vos propres decks 
    - Vous ne pouvez composer des decks qu'à partir de cartes possédées dans votre collection 
    - Le tout avec une interface qui vous plonge dans l'univers de Pokémon et avec une expérience utilisateur plaisante.


### Ajouts Personnels / Différences au sujet :

    - Nous avons fait le choix d'ajouter 2 classe/fichier de service (BoosterService et DeckService) pour une gestion plus précise.

    - Nous avons décidé d'afficher une image plutôt qu'un label dans le composant NavBar pour une meilleure immersion dans l'univers Pokémon. Cepndant notre LinkService renvoie bien un lien image et un label.

    - Nous avons égalemment affiché les autres informations de la carte à savoir le nombre de HP et ses attaques.

    - Nous avons créé notre propre MockAPI pour les decks.

    - La création de deck se fait uniquement avec un nom obligatoire, un idUser est attribué aléatoirement et le deck est créé vide. 

    - Nous avons décidé d'afficher seulement les 3 premiers boosters mais ils sont bien tous récuperés.  

    - Nous affichons seulement le nom des pokémons pour les ajouter à un deck et pas image + nom.

    -  La barre de recherche est dans Home où se trouve notre collection de cartes et non dans la page de création de deck.

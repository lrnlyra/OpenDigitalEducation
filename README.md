## **Open Digital Education**

### Exercice d'intégration web

#### _Installation_

- Cloner le projet avec la commande suivante : _git clone git@github.com:lrnlyra/OpenDigitalEducation.git_

- Installer ensuite les dépendances : _npm install_

- Il suffit maintenant de lancer le projet via la commande _npm run dev_, et de se rendre sur http://localhost:1234 !

#### _Choix techniques_

Pour l'environnement, j'ai utilisé [Parcel](https://fr.parceljs.org/) qui m'a permis d'obtenir simplement un serveur de développement front afin de lancer mon application. Facile à configurer, c'était à mes yeux l'idéal pour un exercide d'intégration weeb !

Ensuite, concernant le CSS, j'ai choisi d'utiliser un preprocesseur (ici [SASS](https://sass-lang.com/)) car cela me permet de coder plus rapidement et simplement et styles :

- En "enchaînant" les noms de classes (&- )
- Grâce à la possibilité de gérer les styles des les éléments imbriqués en HTML (en les imbriquant dans le CSS)
- En utilisant les variables (pour les couleurs, la taille du texte et les media queries)
- Afin de pouvoir intégrer le responsive (via les media queries) plus facilement

Pour le style, j'utilise majoritairement des classes (ainsi que certaines classes plus génériques que j'ai définies, pour les éléments réutilisables), je n'ai utilisé les id que pour les éléments ayant besoin d'être ciblés en Javascript.

Dans la partie responsive pour mobiles, j'ai fait le choix de cacher la sidebar et de pouvoir la faire apparaître/disparaître en cliquant sur un bouton. Cela permet à l'utilisateur de pouvoir chercher un utilisateur sans que la liste ne prenne de la place sur un petit écran. Dans le cas d'un choix d'utilisateur fonctionnel, le comportement attendu serait que la sidebar se refermere lorsqu'un user est choisi (cliqué).

Les données ont été ici mappées de manière "statique" : la liste des utilisateurs à partir de _users-list.json_, et les informations de l'utilisateur sélectionné à partir de _user.json_.
Je n'ai pas pu rendre cliquables les utilisateurs de la liste car je n'avais pas les informations détaillées de ceux-ci.
Je n'ai pas trouvé certaines données dans _user.json_, tout cela est indiqué en commentaires dans le fichier _index.js_ !

Le tri de la liste d'utilisateurs par ordre alphabétique (et inversé) a été implanté en cliquant sur le bouton associé, cependant je n'ai pas codé le deuxième filtre car je ne savais pas quel comportement était attendu.

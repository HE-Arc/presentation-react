# slides-react

Slides de présentation, exemples et exercices à propos de la bilbiothèque JavaScript [React](https://facebook.github.io/react/) de Facebook.

## Installation des outils pour l'édition des slides

1. Si vous êtes sous Windows (mouahaha!), installez [MinGW](http://www.mingw.org/) et ajoutez le dans votre PATH. MinGW permet d'utiliser la commande `mingw32-make` qui permet de travailler avec des Makefile à la Linux.
2. Installez [pandoc](http://pandoc.org/) et ajoutez le dans votre PATH. Pandoc permet de convertir un ou plusieurs fichiers d'un certain format (comme Markdown) en un autre format de sortie (HTML, PDF, etc.). On l'utilise ici pour générer les slides au format HTML.
3. Placez vous dans le dossier `slides` du projet avec un terminal et lancez la commande `make install` pour "installer" [reveal.js](http://lab.hakim.se/reveal-js/). `make` est à remplacer par `mingw32-make` pour les windowsiens.

Vous êtes maintenant fin prêt pour travailler! Éditez le fichier `slides.md` et lancez ensuite `make html` pour générer le fichier `slides.html` avec modifications.

Si le fonctionnement du `Makefile` vous intéresse, n'hésitez pas à y jeter un oeil. Il utilise déjà quelques [fonctionnalités avancées](http://pandoc.org/MANUAL.html#producing-slide-shows-with-pandoc) de `pandoc`.

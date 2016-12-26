---
title: Réaliser des interfaces web avec React
author: Bastien Burri, Julien M'Poy & Axel Roy
date: 2016, Haute École Arc Ingénierie, Neuchâtel
---

## Sommaire

À faire en dernier par pitié pour éviter de le changer 25 mille fois.

---

![](https://media.giphy.com/media/l41YBu8vgBGUHmGGI/giphy.gif){ width=600px }
<!-- ![](http://www.reactiongifs.com/r/gc.gif) -->

<aside class="notes">
    On a demandé à Donald ce qu'était React.
    Il nous a dit qu'il savait pas.
    Et vous? Qui Connais? C'est quoi?
</aside>

---

## React c'est quoi?

![](https://facebook.github.io/react/img/logo.svg){ width=150px }

* Bibliothèque Javascript pour créer des interfaces web.
* Développé par Jordan Walke chez Facebook en 2011 (opensourcé en 2013).
* Inspiré d'[XHP](https://facebook.github.io/xhp-lib/).
* Utilisé par Facebook, Netflix, Imgur, Feedly et bien d'autres.

<aside class="notes">
    - Aussi appelé React.js ou ReactJS.
    - Souvent utilisé dans le V de MVC.
    - ATTENTION, pas de CSS avec! C'est
        uniquement pour la partie HTML de l'UI.
    - Principe de composant un peu à la Qt (Component based
        architecture).
    - Mise à jour des informations dans le UI lorsque
        des informations changent (Data binding).
    - XHP: Framework permettant de mettre de
        l'HTML dans des scripts PHP plus facilement.
    - Facebook: utilisé pour le feed des actualités.
</aside>

---

## Compétences requises

* JavaScript
* [ES2015](https://babeljs.io/learn-es2015/)

<aside class="notes">
    - Peu de compétences nécessaires
    - Compétences plutôt simples à acquérir. La
        qualité du code viendra avec l'expérience.
</aside>

---

## Fonctionnalités importantes

* [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html)
* [Virtual DOM](http://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/)
* Architecture au-dessus d'HTML
* React Native (annoncé en 2015)

<aside class="notes">
    - JSX: JavaScript eXtension syntax
    - HTML dans du JS sans utilisation des guillemets
        ou des backticks.
    - Principe de composant un peu à la Qt
    - Permet de créer des composants réutilisables
    - DOM: Document Object Model
    - Data binding
    - Arhitecture: on définit un tag HTML
        correspondant à notre composant et il
        se monte dessus tout seul.
    - React Native: proposer l'architecture de React
        pour des application iOS et Android.
</aside>

---

## React Component: notion de component

* Cas d'exemple de l'utilisation d'un component? (imbriquation)
* Génère une sortie à chaque appel.
* A son propre Virtual DOM.
* Contient des `React Elements` (`<div>`, `<p>`, ...).
* Est stateful contrairement aux `React Elements` qui sont stateless.

<aside class="notes">
    - Par sortie, on veux dire de l'HTML
    - Virtual DOM:
        1) Représentation en mémoire (VDOM)
        2) Rendu dans le navigateur
    Permet d'accélerer le rendu si on utilise
    plusieurs fois le component. On ne charge
    que ce qui a changé. -> Gain de performances.
    Plus d'explications ici: http://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/
</aside>

---

## Hello World

Dans notre fichier `my-component.jsx`:

```
class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <p>Hello! It's me! Your first component!</p>
            </div>
        );
    }
}

ReactDOM.render(
    <MyComponent />, document.getElementById('my-component')
);

```

<aside class="notes">
    - Classe simple héritant de React.Component.
        (toujours ainsi!)
    - Deux arguments dans render:
        * Quel composant appeler.
        * Quel tag HTML est remplacé par ce
            composant.
</aside>

---

## Hello World

Dans notre fichier `index.html`:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Let's play with React!</title>
    </head>
    <body>
        <div id="my-component"></div>
        <script src="vendors/react.js"></script>
        <script src="vendors/react-dom.js"></script>
        <script src="vendors/babel.js"></script>
        <script type="text/babel" src="js/my-component.jsx"> </script>
    </body>
</html>
```

Exemple à paufiner car l'installation de React reste obscure.
Voir [ici](https://facebook.github.io/react/docs/installation.html).

<aside class="notes">
    - Le div peut être appelé un "target container".
        C'est l'endroit où sera contenu le component.
    - Installation:
        - Utiliser WebPack ou Browserify car "require"
            n'est pas connu par le navigateur.
    - Babel permet de garantir que le navigateur
        comprendra le code ES6 et le JSX.
</aside>

---

## Hello World

Expliquer qu'est-ce qui se passe quand:

1. Chargement des scripts de dépendances.
2. Chargement du component.
3. `ReactDOM` affiche le component.
4. Virtual DOM.
5. `render()`.

Un petit schéma explicatif? 

---

## Exercices

---

## Résumé

---

## Questions ?

---

## Références

* [Article Wikipedia sur React](https://en.wikipedia.org/wiki/React_(JavaScript_library))
* [Documentation officielle de React](https://facebook.github.io/react-native/docs/getting-started.html)
* [Cours __Powering Up With React__ de Code School](https://www.codeschool.com/courses/powering-up-with-react)
* [JSX](https://jsx.github.io/)
* [The difference between the Virtual DOM and DOM](http://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/)

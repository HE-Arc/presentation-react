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
    Et vous? Qui Connait? C'est quoi?
</aside>

---

## React c'est quoi?

![](https://facebook.github.io/react/img/logo.svg){ width=150px }

* Bibliothèque Javascript pour créer des interfaces web.
* Développé par Jordan Walke chez Facebook en 2011 (opensourcé en 2013).
* Inspiré d'[XHP](https://facebook.github.io/xhp-lib/) et
    [E4X](https://en.wikipedia.org/wiki/ECMAScript_for_XML).
* Utilisé par Facebook, Netflix, Imgur, Feedly et bien d'autres.

<aside class="notes">
    - Aussi appelé React.js ou ReactJS.
    - Souvent utilisé dans le V de MVC.
    - ATTENTION, pas de CSS avec! C'est
      uniquement pour la partie HTML de l'UI.
    - Principe de composant un peu à la Qt
      (Component based architecture).
    - Mise à jour des informations dans le UI
      lorsque des informations changent
      (Data binding).
    - XHP: Framework permettant de mettre de
      l'HTML dans des scripts PHP plus
      facilement.
    - E4X: ECMAScript for XML. JavaScript avec
      une extension permettant de placer
      directement de l'XML dans des fichiers
      JS pour faciliter la manipulation de la
      page. (alternative à DOM)
    - Facebook: utilisé pour le feed des actualités.
</aside>

---

## Compétences requises

* JavaScript
* [ES2015](https://babeljs.io/learn-es2015/)

<aside class="notes">
    - Peu de compétences nécessaires.
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
    - Architecture: on définit un tag XML
      correspondant à notre composant et il
      se monte dessus tout seul.
    - React Native: proposer l'architecture de React
      pour des application iOS et Android.
</aside>

---

## Installation

Procédure assez simple:

```console
$ npm install react react-dom babel-standalone
```

On inclue `react.js`, `react-dom.js` et `babel.js` ou leurs versions
minifiées dans nos fichiers HTML et en voiture Simone!

<aside class="notes">
    - react: la majeur partie de React.
    - react-dom: partie de React permettant
      d'utiliser Virtual DOM.
    - babel: ibliothèque permettant d'exécuter
      du code ES2015 côté navigateur ou autre
      environnement "non-nodeJS".
</aside>
---

## React Component

* Cas d'exemple de l'utilisation d'un component? (imbriquation)
* Génère une sortie à chaque appel. (méthode __`render()`__)
* A son propre Virtual DOM.
* Contient des `React Elements` (`<div>`, `<p>`, ...).
* Est __stateful__ contrairement aux `React Elements` qui sont __stateless__.

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

```xml
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
        * Quel élément HTML est remplacé par ce
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
        <script src="node_modules/react/dist/react.js"></script>
        <script src="node_modules/react-dom/dist/react-dom.js"></script>
        <script src="node_modules/babel-standalone/babel.js"></script>
        <script type="text/babel" src="my-component.jsx"></script>
    </body>
</html>
```

<aside class="notes">
    - Le div peut être appelé un "target container".
      C'est l'endroit où sera contenu le component.
    - Installation:
        - Utiliser WebPack ou Browserify car "require"
          n'est pas connu par le navigateur.
    - Babel permet de garantir que le navigateur
      comprendra le code ES6 et le JSX.
    - Lors de l'inclusion de nos fichiers jsx, on précise qu'il s'agit
      de code ES2015 avec l'attribut type de manière à charger le fichier
      avec Babel.
</aside>

---

## Hello World

Expliquer ce qui se passe quand:

1. Chargement des scripts de dépendances.
2. Chargement du component.
3. `ReactDOM` affiche le component.
4. Virtual DOM.
5. `render()`.

Un petit schéma explicatif?

---

## Templating

```xml
class MyComponent extends React.Component {
    render() {
        const superAnimals = [
            'octocat',
            'fuzzybadger',
            'fictionnal rat'
        ];
        return (
            <div>
                <h1>Howdie!</h1>
                <p>Here are your animals</p>
                <ul>
                    {superAnimals.map( animal => <li>{animal}</li> )}
                </ul>
            </div>
        );
    }
}
```

On utilise les accolades __{}__ pour faire du templating avec JavaScript.

---

## Subtilités

![](http://ljdchost.com/UZ3egO9.gif)

---

## Subtilités: attributs HTML

`my-component.jsx` donnant des erreurs:

```xml
class MyComponent extends React.Component {
    render() {
        return (
            <div class="form-component">
                <h1>Hello world</h1>
                <p>Hello! It's me! Your first component!</p>
                <form>
                    <label for="message">Message : <label>
                    <input id="message" name="message" value="">
                </form>
            </div>
        );
    }
}

ReactDOM.render(
    <MyComponent />, document.getElementById('my-component')
);
```

---

## Subtitlités: attributs HTML

__`class`__ et __`for`__ sont des mots réservés en `JavaScript`. Il faut
utiliser __`className`__ et __`htmlFor`__ pour palier à ce problème. `React`
s'occupe de faire la transformation pour nous.

---

## Subtilités: attributs HTML

`my-component.jsx` corrigé:

```xml
class MyComponent extends React.Component {
    render() {
        return (
            <div className="form-component">
                <h1>Hello world</h1>
                <p>Hello! It's me! Your first component!</p>
                <form>
                    <label htmlFor="message">Message : <label>
                    <input id="message" name="message" value="">
                </form>
            </div>
        );
    }
}

ReactDOM.render(
    <MyComponent />, document.getElementById('my-component')
);
```

---


## Subtilités: gestion des évènements

Expliquer pourquoi `onclick="this.doSomething()"` ne fonctionne pas dans React.
(problème de `this`). Expliquer comment le régler. Proposer plusieurs
solutions?

---

## State (état)

Qu'est-ce qu'un état? Que peut-on y mettre? À quoi ça sert?

---

## Props (propriétés)

Qu'est-ce qu'une propriété? Comment en créer et leur donner des valeurs? À quoi
ça sert?

---

## Imbriquation de components

Exemple montrant comment imbriquer des composants. Expliquer comment gérer la
relation component parent - component(s) enfant.

---

## Exercices

* Formulaire simple avec un titre changeant dynamiquement.
* Kanban sans drag'n drop.
* T'es un champion? Fais le kanban avec le drag'n drop! Voici un [tutoriel](https://www.html5rocks.com/en/tutorials/dnd/basics/)
  expliquant comment utiliser l'[API Drag and drop de HTML5](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API).

---

## Résumé

Résumer les caractéristiques et avantages principaux de React.

---

## Questions ?

---

## Références

* [Article Wikipedia sur React](https://en.wikipedia.org/wiki/React_(JavaScript_library))
* [Documentation officielle de React](https://facebook.github.io/react-native/docs/getting-started.html)
* [Cours __Powering Up With React__ de Code School](https://www.codeschool.com/courses/powering-up-with-react)
* [JSX](https://jsx.github.io/)
* [The difference between the Virtual DOM and DOM](http://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/)
* [Getting Started with React and JSX](https://www.sitepoint.com/getting-started-react-jsx/)
* [Babel](https://babeljs.io/)

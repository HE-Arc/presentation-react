---
title: 'React'
subtitle: 'Une bibliothèque pour réaliser des interfaces web mais pas seulement'
author:
  - Julien M'Poy
---

## Sommaire

- Qu'est-ce que React?
- Hello World
- Notion de *state* (état)
- Cycle de vie d'un composant (*lifecycle*)
- Surprises et subtilités
- Bibliothèques «React friendly»
- Alternatives
- Avantages et inconvénients
- Questions

---

## Qu'est-ce que React?

![](./img/react-logo.svg){ width=150px }

* Bibliothèque Javascript pour créer des interfaces web.
* Développé par Jordan Walke chez Facebook en 2011 (opensourcé en 2013).
* Inspiré d'[XHP](https://facebook.github.io/xhp-lib/) et
    [E4X](https://en.wikipedia.org/wiki/ECMAScript_for_XML).
* Utilisé par [Facebook](https://www.facebook.com/),
  [Netflix](https://www.netflix.com), [Imgur](http://imgur.com/),
  [Feedly](https://feedly.com/) et bien d'autres.

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

* JavaScript ([Node.js](https://nodejs.org/en/) et
  [npm](https://en.wikipedia.org/wiki/Npm_(software)))
* [ES2015](https://babeljs.io/learn-es2015/) (aussi appelé ES6)
* [Webpack](https://webpack.js.org/) et [Babel](https://babeljs.io/)

<aside class="notes">
    - Peu de compétences nécessaires.
    - Compétences plutôt simples à acquérir.
      La qualité du code viendra avec l'expérience.
    - Plus besoin de s'embêter avec Webpack et Babel
      avec create-react-app.
</aside>

---

## Caractéristiques de React

* Composants (_Components_) graphiques décrivant chaque partie de l'interface.
* [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) (`XML` dans du JavaScript)
* [Virtual DOM](http://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/)

<aside class="notes">
  - Principe de composant un peu à la Qt
  - Permet de créer des composants réutilisables
    (dans l'idéal)
  - JSX: JavaScript eXtension syntax
  - HTML dans du JS sans utilisation des guillemets
    ou des backticks.
  - Architecture: on définit un tag XML
    correspondant à notre composant et il
    se monte dessus tout seul.
  - Data binding
  - DOM: Document Object Model
  - On ne travaille plus avec DOM directement.
    React s'occupe du travail en bas-niveau pour nous.
  - Virtual DOM: copie côté React du DOM
</aside>

---

## Composant React -- _Component_

- Classe **ou** fonction JavaScript.
- Un composant a son propre Virtual DOM.
- Il contient des _React Elements_ (`<div>`, `<p>`, ...) ou
  d'autres composants React.
- Tout composant retourne son Virtual DOM lorsqu'il est monté
  (méthode `render()` dans le cas d'un classe)

<aside class="notes">
    - Virtual DOM:
        1) Représentation en mémoire (VDOM)
        2) Rendu dans le navigateur

    Permet d'accélérer le rendu si on utilise
    plusieurs fois le component. On ne charge
    que ce qui a changé. -> Gain de performances.
    Plus d'explications ici: http://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/
</aside>

---

## Hello World

Dans notre fichier `index.html`:

```{.html include=examples/01-hello-world/dist/index.html}
```

<aside class="notes">
    - Le div peut être appelé un "target container".
      C'est l'endroit où sera contenu le component.
    - Installation:
        - Utiliser WebPack ou Browserify car "require"
          n'est pas connu par le navigateur.
    - Installation facilitée avec create-react-app
    - Babel permet de garantir que le navigateur
      comprendra le code ES6 et le JSX. Solution
      plus simple.
    - Lors de l'inclusion de nos fichiers jsx, on
      précise qu'il s'agit de code ES2015 avec
      l'attribut type de manière à charger le
      fichier avec Babel.
</aside>

---

## Hello World

Dans notre fichier `index.js`:

```{.js include=examples/01-hello-world/js/index.js}
```

<aside class="notes">
  - Deux arguments dans render:
    * Quel composant appeler.
    * Quel élément HTML est remplacé par ce
      composant.
</aside>

---

## Hello World: variante fonctionnelle

```{.js include=examples/01-hello-world/js/AppFunction.js}
```

---

## Hello World: variante orientée objet

```{.js include=examples/01-hello-world/js/AppClass.js}
```

---

## Hello World

Déroulement de l'exécution:

1. Chargement du script `index.js`.
2. Chargement du composant.
3. `ReactDOM` «monte» le composant.
4. Création du DOM virtuel (Virtual DOM).
5. Appel de `render()` et affichage du DOM final dans le `<div>`.

<!-- Un petit schéma explicatif? -->

---

## Propriétés -- _Props_

* Affichage dynamique du composant en fonction de ses propriétés
  (_templating_).
* Passage de valeurs entre composants parents et composants enfants.

---

## Templating

```{.js include=examples/02-properties-and-templating/js/App.js}
```

---

## Templating: variante fonctionnelle

```{.js include=examples/02-properties-and-templating/js/components/AnimalsList.js}
```

Le templating côté JavaScript se fait avec _{ }_.

<aside class="notes">
  - "key" est important pour identifier chaque
    composant lorsque l'on se base sur un tableau
    pour créer des componsants.
  - Utiliser "index" pour "key" est une mauvaise pratique.
</aside>

---

## Templating: variante orientée objet

```{.js include=examples/02-properties-and-templating/js/containers/AnimalsList.js}
```

---

## Propriétés utiles

- `this.props.children`

---

## Propriété `children`

Dans notre `index.js`:

```{.js include=examples/03-children/js/index.js}
```

---

## État -- _State_

Un composant peut posséder un état (__stateful__) ou non (__stateless__).

- __stateful__
    - _Class components_
- __stateless__
    - React Elements
    - _Functionnal Components_

---

## État

En général:

- Un _component_ est un composant stateless. Souvent une fonction avec
  des propriétés.
- Un _container_ est un composant stateful. Souvent une classe avec
  des propriétés en plus d'un état.

---

## État

- _component_
  - Responsable de la présentation de l'information.
  - Rôle proche d'une vue dans un pattern _MVC_.
- _container_
  - Contient un ou plusieurs composants.
  - Possède une logique propre (_AJAX_, middleware, etc.).
  - Comportement semblable à un contrôleur dans un pattern _MVC_ ou
    un `ModelView` dans un pattern _MVVM_.

<aside class="notes">
  - Transmission de l'information entre container et composant
    par les propriétés
</aside>

---

## État

* Contient l'information propre au composant.
* Rendu du component en fonction de son état.
* L'état se modifie avec `this.setState`.
* _Un changement d'état appelle automatiquement la méthode `render()`._

<aside class="notes">
    - Qu'est-ce qu'un état? Que peut on y mettre?
      À quoi ça sert?
    - L'appel systèmatique de render() permet
      l'actualisation automatique du component.
      Pratique pour un fil d'actualité avec des
      appels AJAX à intervalle régulier.
    - Un état est un objet JavaScript. On peut
      y mettre des strings, booléens, des objets,
      des tableaux, etc.
    - this.setState fait un merge avec l'état
      actuel. Seul les clefs modifiées sont
      écrasées.
</aside>

---

## État

Dans notre `index.js`:

```{.js include=examples/04-state-and-events/js/index.js}

```

---

## Propriétés vs État

- Les propriétés sont définies au moment de la création du composant.
- L'état possède un état initial au moment où il est créé mais
  l'état peut changer après la création du composant. (≠ propriétés)

---

## Lifecycle hooks

* `componentDidMount`: appelée la première fois que le component est «dessiné»
  (render).
* `componentWillUnmount`: appelée lorsque le component va être démonté/supprimé.
* Il en existe d'[autres](https://reactjs.org/docs/react-component.html#the-component-lifecycle).


<aside class="notes"> On y
  supprime le/les timer(s) instancié(s) dans `componentDidMount`.

  On peut y faire
  les appels AJAX, instancier un ou plusieurs timers pour des appels AJAX
  réguliers, etc.
   Il serait mieux d'utiliser des WebSocket
    plutôt que des appels AJAX réguliers mais
    c'est l'approche simple et naïve.
</aside>

---

## Lifecycle hooks

Ces méthodes existent pour ne pas faire de tâches susceptibles de prendre du
temps dans le constructeur (eg. allocation/destruction de ressources, AJAX, etc.).

_L'affichage du component ne doit pas être retardé par une de ces tâches._

---

## Surprises et subtilités

![](http://ljdchost.com/UZ3egO9.gif){ width=900px }

---

## Surprises et subtilités: attributs HTML <i class="material-icons danger">error</i>

```js
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

## Surprises et subtilités: attributs HTML

`class`,`for`, `this`, `with` et `switch` sont des mots réservés en `JavaScript`. Il faut
utiliser `className` et `htmlFor` pour palier à ce problème. `React`
s'occupe de faire la transformation pour nous.

---

## Surprises et subtilités: attributs HTML <i class="material-icons success">done</i>

```js
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

## Surprises et subtilités: gestion des évènements


On ne peut pas utiliser `this.eventHandlerMethod` pour gérer les évènements
dans `render` sans utiliser `bind` dans le constructeur.

Il existe d'[autres solutions](https://facebook.github.io/react/docs/handling-events.html)
que `bind`.

<aside class="notes">
    On utilise onClick et pas onclick comme
    habituellement.
    Expliquer pourquoi onclick="this.handleClick()"
    ne fonctionne pas dans React.
    -> This est problématique dans ce contexte.
</aside>

---

## Surprises et subtilités: gestion des évènements

On utilise `onClick` comme équivalent à `onclick`, `onBlur` pour `onblur`,
`onMouseOver` pour `onmouseover`, etc.

Un grande partie des évènements sont supportés et il suffit généralement
d'utiliser le nom de l'évènement en version _camelCase_ pour l'utiliser
([liste exhaustive des évènements supportés](https://reactjs.org/docs/events.html#supported-events)).

<!--
## Exercices

* Formulaire simple avec un titre changeant dynamiquement.
* Kanban sans drag'n drop.
* T'es un champion? Fais le kanban avec le drag'n drop! Voici un [tutoriel](https://www.html5rocks.com/en/tutorials/dnd/basics/)
  expliquant comment utiliser l'[API Drag and drop de HTML5](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API).

-->

---

## Outils dédiés à React

- [React Developer Tools](https://github.com/facebook/react-devtools)
  disponibles pour les navigateurs ou en standalone (utile pour le debuggage).
- [create-react-app](https://github.com/facebook/create-react-app):
  solution clé en main pour démarrer un projet React.

<aside class="notes">
  * create-react-app: libre à vous de le modifier ou de mettre en place
    la toolchain qui vous plaît à la main ou avec une autre solution.
</aside>

---

## React sur mobile

- Avec [React Native](https://facebook.github.io/react-native/).
- Une grande partie des bibliothèques «React friendly»  et autres bibliothèque
  JavaScript sont utilisables sur mobile avec React Native.

<aside class="notes">
    - React Native: proposer l'architecture de React
      pour des application iOS et Android.
</aside>

---

## Bibliothèques «React friendly»

- [React router](https://reacttraining.com/react-router/)
  - `react-router-dom` pour du web et `react-router-native` pour React Native pour React Native.
- Web design
  - [Material-UI](http://www.material-ui.com/#/)
  - [Semantic UI](https://react.semantic-ui.com/introduction)
  - [reactstrap](https://reactstrap.github.io/)

<aside class="notes">
  * react-router: «learn once, use everywhere!»
</aside>

---

## Bibliothèques «React friendly»

- Gestion de l'état global de l'applicaton
  - [Redux](https://redux.js.org/docs/introduction/)
  - [MobX](https://mobx.js.org/getting-started.html)
  - [Relay](https://facebook.github.io/relay/)

---

## Alternatives

- [Vue.js](https://vuejs.org/)
- [Riot.js](http://riotjs.com/)
- [Ember.js](http://emberjs.com/)
- [Polymer](https://www.polymer-project.org/1.0/)

---

## Avantages

- Assez simple à prendre en main.
- Composants d'interface réutilisables et imbricables.
- Possibilité de stocker et modifier les informations à l'aide des états.

---

## Avantages

- On ne se bat plus avec DOM et [jQuery](https://jquery.com).
- Applications de petite taille comparées à des applications faites avec
  Angular 2 si on compare la taille du JavaScript généré.

<aside class="notes">
    - Il n'y as pas de notion d'état avec jQuery.
    - React s'occupe de l'organisation/modification
      du DOM pour nous.
</aside>

---

## Inconvénients

- React n'est pas un framework! Il faut l'utiliser avec d'autres bibliothèques/
  frameworks comme [Redux](http://redux.js.org/),
  [Fetch](https://developer.mozilla.org/en/docs/Web/API/Fetch_API), etc.
  __en fonction de nos besoins__.
- L'utiliser avec un framework MVC comme [Ruby On Rails](rubyonrails.org) ou
  [Laravel](https://laravel.com/) demande un peu de configuration.
- Si l'utilisateur désactive JavaScript, plus rien ne s'affiche.

---

## Questions ?

![](https://media.giphy.com/media/dXICCcws9oxxK/giphy.gif){ width=900px }

---

## Liens utiles

- [Dépôt Github de la présenation avec les exemples](https://github.com/HE-Arc/presentation-react)
- [Évènements HTML gérés par React](https://reactjs.org/docs/events.html#supported-events)
- [Lifecyle Hooks existant dans React](https://reactjs.org/docs/react-component.html#the-component-lifecycle)

---

## Références

- [React, Redux and JavaScript Architecture](https://jrsinclair.com/articles/2018/react-redux-javascript-architecture/)
- [Documentation officielle de React](https://facebook.github.io/react-native/docs/getting-started.html)
- [The difference between the Virtual DOM and DOM](http://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/)
- [React Elements vs React Components](https://tylermcginnis.com/react-elements-vs-react-components/)
- [Article Wikipedia sur React](https://en.wikipedia.org/wiki/React_(JavaScript_library))
- [How to set up React, Webpack 3, and Babel, in 2017](https://www.valentinog.com/blog/react-webpack-babel/)

---

## Références

- [Cours __Powering Up With React__ de Code School](https://www.codeschool.com/courses/powering-up-with-react)
- [Getting Started with React and JSX](https://www.sitepoint.com/getting-started-react-jsx/)
- [Angular 2 versus React: There Will Be Blood](https://medium.freecodecamp.com/angular-2-versus-react-there-will-be-blood-66595faafd51#.iwb2coio6)
<!-- * [Working with Sass, Bootstrap and Gulp](http://david-barreto.com/working-with-sass-bootstrap-and-gulp/git) -->

---

## Annexes

---

## Installation

Procédure assez simple:

```console
$ npm install -g create-react-app
$ create-react-app my-app
$ cd my-app
$ npm run start
```

En voiture Simone!

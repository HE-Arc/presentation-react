---
title: 'React'
subtitle: 'Une bibliothèque pour réaliser des interfaces web (et plus encore)'
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

![](images/react-logo.svg){ width=150px }

* Bibliothèque Javascript pour créer des interfaces web.
* Développé par Jordan Walke chez Facebook en 2011 (opensourcé en 2013).
* Inspiré d'[XHP](https://facebook.github.io/xhp-lib/) et
    [E4X](https://en.wikipedia.org/wiki/ECMAScript_for_XML).
* Utilisé par Facebook, Netflix, [Imgur](http://imgur.com/),
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

* JavaScript ([npm](https://en.wikipedia.org/wiki/Npm_(software)))
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

* [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html)
* [Virtual DOM](http://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/)

<aside class="notes">
    - JSX: JavaScript eXtension syntax
    - HTML dans du JS sans utilisation des guillemets
      ou des backticks.
    - Principe de composant un peu à la Qt
    - Permet de créer des composants réutilisables
      (dans l'idéal)
    - DOM: Document Object Model
    - Data binding
    - Architecture: on définit un tag XML
      correspondant à notre composant et il
      se monte dessus tout seul.
</aside>

---

## Composant React -- _Component_

- Classe **ou** fonction JavaScript.
- Un composant a son propre Virtual DOM.
- Il contient des _React Elements_ (`<div>`, `<p>`, ...) ou
  d'autres composants React.
- Tout composant retourne son DOM lorsqu'il est monté
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

```{.html include=../examples/01-hello-world/dist/index.html}
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

```{.js include=../examples/01-hello-world/js/index.js}
```

<aside class="notes">
  - Deux arguments dans render:
    * Quel composant appeler.
    * Quel élément HTML est remplacé par ce
      composant.
</aside>

---

## Hello World: variante fonctionnelle

```{.js include=../examples/01-hello-world/js/AppFunction.js}
```

---

## Hello World: variante orientée objet

```{.js include=../examples/01-hello-world/js/AppClass.js}
```

---

## Hello World

Déroulement de l'exécution:

1. Chargement des scripts de dépendances.
2. Chargement du component.
3. `ReactDOM` affiche le component.
4. Création du DOM virtuel (Virtual DOM).
5. Appel de `render()` et affichage du DOM virtuel dans le DOM.

<!-- Un petit schéma explicatif? -->

---

## Propriétés -- _Props_

* Affichage dynamique du composant en fonction de ses propriétés
  (_templating_).
* Passage de valeurs entre composants parents et composants enfants.

---

## Templating

```{.js include=../examples/02-properties-and-templating/js/App.js}
```

---

## Templating: variante fonctionnelle

```{.js include=../examples/02-properties-and-templating/js/components/AnimalsList.js}
```

Le templating avec JavaScriptn se fait avec _{}_.

<aside class="notes">
  - "key" est important pour identifier chaque
    composant lorsque l'on se base sur un tableau
    pour créer des componsants.
  - Utiliser "index" pour "key" est une mauvaise pratique.
</aside>

---

## Templating: variante orientée objet

```{.js include=../examples/02-properties-and-templating/js/containers/AnimalsList.js}
```

---

## Propriétés utiles

- `this.props.children`

---

## Propriété `children`

Dans notre `index.js`:

```{.js include=../examples/03-children/js/index.js}
```

---

## État -- _State_

Un composant peut posséder un état (__stateful__) ou non (__stateless__).

- __stateful__
    - _Class component_
- __stateless__
    - React Elements
    - _Functionnal Components_

---

## État

En général:

- Un _component_ est un composant stateless. Souvent une fonction avec des propriétés.
- Un _container_ est un composant stateful. Souvent une classe.

---

## État

- _component_
  - Responsable de la présentation de l'information.
  - Rôle proche d'une vue dans un pattern MVC.
- _container_
  - Contient un ou plusieurs composants.
  - Possède une logique propre (_AJAX_, middleware, etc.).
  - Comportement semblable à un contrôleur dans un pattern MVC.

<aside class="notes">
  - Transmission de l'information entre container et composant
    par les propriétés
</aside>

---

## État

* Contient l'information propre au composant.
* Rendu du component en fonction de son état.
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

```javascript
class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            displayAnimalList: true,
        };
        this.animalsList = <AnimalsList />;
    }
    handleClick(e) {
        if (this.state.displayAnimalList == false) {
            this.animalsList = <AnimalsList />;
        }
        else {
            this.animalsList = <div></div>;
        }
        this.setState({
            displayAnimalList: !this.state.displayAnimalList
        });
    }
}
```

---

## État

```xml
    render() {
        return (
            <div>
                <h1>
                    Play {`with`} states and imbricate
                    some components!
                </h1>
                <p>
                    Use {`this switch`} button to display
                    or hide the animals list.
                </p>
                <form>
                    <label className="switch">
                        <input type="checkbox" defaultChecked />
                        <div className="slider round"
                         onClick={this.handleClick}
                        >
                        </div>
                    </label>
                </form>
                {this.animalsList}
            </div>
        );
    }
}
```
---

## Propriétés vs État

- Les propriétés sont définies au moment de la création du composant.
- L'état possède un état initial au momen où il est créé mais
  l'état peut changer après la création du composant. (≠ propriétés)

---

## Lifecycle

* `componentDidMount`: appelée lorsque le component est monté. On peut y faire
  les appels AJAX, instancier un ou plusieurs timers pour des appels AJAX
  réguliers, etc.
* `componentWillUnmount`: appelée lorsque le component va être démonté. On y
  supprime le/les timer(s) instancié(s) dans `componentDidMount`.

<aside class="notes">
    Il serait mieux d'utiliser des WebSocket
    plutôt que des appels AJAX réguliers mais
    c'est l'approche simple et naïve.
</aside>

---

## Lifecycle

_`componentDidMount` et `componentWillUnmount` existent pour ne pas faire de
tâches susceptibles de prendre du temps dans le constructeur._ L'affichage du
component ne doit pas être retardé par une de ces tâches.

<!---

## Surprises et subtilités

![](http://ljdchost.com/UZ3egO9.gif){ width=900px }
--->

---


## Surprises et subtilités: attributs HTML

`my-component.jsx` donnant des erreurs <i class="material-icons danger">error</i>

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

## Surprises et subtilités: attributs HTML

__`class`__ et __`for`__ sont des mots réservés en `JavaScript`. Il faut
utiliser __`className`__ et __`htmlFor`__ pour palier à ce problème. `React`
s'occupe de faire la transformation pour nous.

---

## Surprises et subtilités: attributs HTML

`my-component.jsx` corrigé <i class="material-icons success">done</i>

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

## Surprises et subtilités: gestion des évènements

```xml
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        alert('You toggled me! How kind you are!');
    }

    render() {
        return (
            <div>
                <h1>Event Handling</h1>
                <p>Enjoy that toggle button!</p>
                    <label className="switch">
                        <input type="checkbox"></input>
                        <div className="slider round"
                            onClick={this.handleClick}
                        >
                        </div>
                    </label>
            </div>
        );
    }
}
```

Il existe d'[autres solutions](https://facebook.github.io/react/docs/handling-events.html).

<aside class="notes">
    On utilise onClick et pas onclick comme
    habituellement.
    Expliquer pourquoi onclick="this.handleClick()"
    ne fonctionne pas dans React.
    -> This est problématique dans ce contexte.
</aside>

<!--

## Imbrication de components

Exemple montrant comment imbriquer des composants. Expliquer comment gérer la
relation component parent - component(s) enfant.


## Exercices

* Formulaire simple avec un titre changeant dynamiquement.
* Kanban sans drag'n drop.
* T'es un champion? Fais le kanban avec le drag'n drop! Voici un [tutoriel](https://www.html5rocks.com/en/tutorials/dnd/basics/)
  expliquant comment utiliser l'[API Drag and drop de HTML5](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API).

-->

---

## Outils de debuggage

* [React Developer Tools](https://github.com/facebook/react-devtools)
  disponibles pour les navigateurs ou en standalone.

---

## React sur mobile

- Avec [React Native](https://facebook.github.io/react-native/)
- Une grande parties des bibliothèques «React friendly» sont utilisables sur
  mobile.

<aside class="notes">
    - React Native: proposer l'architecture de React
      pour des application iOS et Android.
</aside>

---

## Bibliothèques «React friendly»

- [React router](https://reacttraining.com/react-router/)
- Gestion des états
  - [Redux](https://redux.js.org/docs/introduction/)
  - [MobX](https://mobx.js.org/getting-started.html)
- Web design
  - [Material-UI](http://www.material-ui.com/#/)
  - [Semantic UI](https://react.semantic-ui.com/introduction)
  - [reactstrap](https://reactstrap.github.io/)

---

## Alternatives

* [Vue.js](https://vuejs.org/)
* [Riot.js](http://riotjs.com/)
* [Ember.js](http://emberjs.com/)
* [Polymer](https://www.polymer-project.org/1.0/)

---

## Avantages

* Assez simple à prendre en main.
* Composants d'interface réutilisables et imbricables.
* Possibilité de stocker et modifier les informations à l'aide des états.
* On ne s'embête plus avec DOM et on gagne en performance grâce à Virtual DOM.

---

## Avantages

* Transmission d'informations entre components grâce aux propriétés.
* Complémentraire à [Angular](https://www.angularjs.org/),
  [Backbone](http://backbonejs.org/), [jQuery](https://jquery.com), etc.
* Applications de petite taille comparées à des applications faites avec
  Angular 2.

<aside class="notes">
    - Il n'y as pas de notion d'état avec jQuery.
    - React s'occupe de l'organisation/modification
      du DOM pour nous.
    - React est-il plus rapide que jQuery?
      Probablement car il ne reparcourt pas
      tout le DOM à chaque modification.
    - Expliquer pourquoi React n'est pas un framework.
      Quelle différence avec AngularJS? En quoi est-il
      complémentaire? JS dans HTML vs HTML dans JS.
</aside>

---

## Inconvénients

* React n'est pas un framework! Il faut l'utiliser avec d'autres bibliothèques/
  frameworks comme [Redux](http://redux.js.org/), [Realy](https://facebook.github.io/relay/),
  [Fetch](https://developer.mozilla.org/en/docs/Web/API/Fetch_API), [jQuery](https://jquery.com),
  etc.
* L'utiliser avec un framework MVC comme [Ruby On Rails](rubyonrails.org) ou
  [Laravel](https://laravel.com/) demande un peu de configuration.
* Si l'utilisateur désactive JavaScript, plus rien ne s'affiche.


---

## Questions ?

![](https://media.giphy.com/media/dXICCcws9oxxK/giphy.gif){ width=900px }

---

## Références

* [Lien vers le repo Github de la présenation](https://github.com/HE-Arc/presentation-react)
* [React, Redux and JavaScript Architecture](https://jrsinclair.com/articles/2018/react-redux-javascript-architecture/)
* [Article Wikipedia sur React](https://en.wikipedia.org/wiki/React_(JavaScript_library))
* [Documentation officielle de React](https://facebook.github.io/react-native/docs/getting-started.html)
* [Getting Started with React and JSX](https://www.sitepoint.com/getting-started-react-jsx/)
* [How to set up React, Webpack 3, and Babel, in 2017](https://www.valentinog.com/blog/react-webpack-babel/)

---

## Références

* [Cours __Powering Up With React__ de Code School](https://www.codeschool.com/courses/powering-up-with-react)
* [The difference between the Virtual DOM and DOM](http://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/)
* [React Elements vs React Components](https://tylermcginnis.com/react-elements-vs-react-components/)
* [Angular 2 versus React: There Will Be Blood](https://medium.freecodecamp.com/angular-2-versus-react-there-will-be-blood-66595faafd51#.iwb2coio6)
* [JSX](https://jsx.github.io/)
* [Babel](https://babeljs.io/)
* [Working with Sass, Bootstrap and Gulp](http://david-barreto.com/working-with-sass-bootstrap-and-gulp/git)

---

# Annexes

---

## Installation

Procédure assez simple:

```console
$ npm install react react-dom babel-standalone
```

On inclue `react.js`, `react-dom.js` et `babel.js` ou leurs versions
minifiées dans nos fichiers HTML et en voiture Simone!

_PS: Utiliser `babel-standalone` en développement et `babel` pour la
production. (cf. notes)_

<aside class="notes">
    - react: la majeur partie de React.
    - react-dom: partie de React permettant
      d'utiliser Virtual DOM.
    - babel: bibliothèque permettant d'exécuter
      du code ES2015 côté navigateur ou autre
      environnement "non-nodeJS".

    babel-standalone est fait pour le développement
    car il permet au navigateur de compiler les
    fichiers jsx à la volée. Il est conseillé
    d'utiliser la version standard de babel
    pour compiler les fichiers jsx en js une
    fois côté serveur. Évitant au client de
    le faire à chaque fois et d'économiser
    des ressources (côté client).
</aside>

# React

Une bibliothèque pour réaliser des interfaces web

Bastien Burri, Julien M'Poy & Axel Roy

2016, Haute École Arc Ingénierie, Neuchâtel

[https://github.com/HE-Arc/presentation-react](https://github.com/HE-Arc/presentation-react)

---

## Sommaire

À faire en dernier par pitié pour éviter de le changer 25 mille fois.

---

![](https://media.giphy.com/media/l41YBu8vgBGUHmGGI/giphy.gif){ width=900px }

<aside class="notes">
    On a demandé à Donald ce qu'était React.
    Il nous a dit qu'il savait pas.
    Et vous? Qui connaît? C'est quoi?
</aside>

---

## React c'est quoi?

![](https://facebook.github.io/react/img/logo.svg){ width=150px }

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

* JavaScript
* [ES2015](https://babeljs.io/learn-es2015/)

<aside class="notes">
    - Peu de compétences nécessaires.
    - Compétences plutôt simples à acquérir. La
      qualité du code viendra avec l'expérience.
</aside>

---

## Fonctionnalités principales

* [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html)
* [Virtual DOM](http://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/)
* Architecture au-dessus d'HTML
* React Native
* [React Developer Tools](https://github.com/facebook/react-devtools)
  disponibles pour les navigateurs ou en standalone.

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

## React Component

* Classe JavaScript génèrant une sortie à chaque appel. (méthode __`render()`__)
* A son propre Virtual DOM.
* Contient des `React Elements` (`<div>`, `<p>`, ...).
* Est __stateful__ contrairement aux `React Elements` qui sont __stateless__.

<aside class="notes">
    - Cas d'exemple de l'utilisation d'un
      component? (imbrication)
    - Par sortie, on veux dire de l'HTML
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

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>React - Hello World</title>
        <link rel="stylesheet" href="../../css/app.css">
    </head>
    <body class="container">
        <div id="my-component"></div>
        <script src="../../node_modules/react/dist/react.js"></script>
        <script src="../../node_modules/react-dom/dist/react-dom.js"></script>
        <script src="../../node_modules/babel-standalone/babel.js"></script>
        <script type="text/babel" src="MyComponent.jsx"></script>
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
      comprendra le code ES6 et le JSX. Solution
      plus simple.
    - Lors de l'inclusion de nos fichiers jsx, on
      précise qu'il s'agit de code ES2015 avec
      l'attribut type de manière à charger le
      fichier avec Babel.
</aside>

---

## Hello World

Dans notre fichier `my-component.jsx`:

```xml
class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello Wolrd</h1>
                <p>Hello! It's me! Your first component !</p>
            </div>
        );
    }
}

ReactDOM.render(
    <MyComponent />, document.getElementById('my-component')
)
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

Expliquer ce qui se passe quand:

1. Chargement des scripts de dépendances.
2. Chargement du component.
3. `ReactDOM` affiche le component.
4. Virtual DOM.
5. `render()`.

Un petit schéma explicatif?

---

## Templating

```js
class AnimalsList extends React.Component {
    render() {
        const superAnimals = [
            'octocat',
            'fuzzybadger',
            'fictionnal rat'
        ];
        return (
            <div>
                <h1>Howdie!</h1>
                <p>Here are your animals!</p>
                <ul>
                    {superAnimals.map((animal, index) => <li key={index}>{animal}</li> )}
                </ul>
            </div>
        );
    }
}
```

On utilise les accolades __{}__ pour faire du templating avec JavaScript.

<aside class="notes">
    - L'attribut "key" est important pour React.
      Probablement pour l'identification des éléments
      créés. A voir dans la doc officielle.
</aside>

---

## State (état)

* But: stocker de l'information propre au component.
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

## State (état)

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
```

---

## State(état)

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

---

## Props (propriétés)

* Passage de valeurs entre component parent et component(s) enfant(s)

<aside class="notes">
    Qu'est-ce qu'une propriété? Comment en créer
    et leur donner des valeurs? À quoi ça sert?
</aside>

---

## Surprises et subtilités

![](http://ljdchost.com/UZ3egO9.gif){ width=900px }

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

---

## Imbrication de components

Exemple montrant comment imbriquer des composants. Expliquer comment gérer la
relation component parent - component(s) enfant.

---

## Exercices

* Formulaire simple avec un titre changeant dynamiquement.
* Kanban sans drag'n drop.
* T'es un champion? Fais le kanban avec le drag'n drop! Voici un [tutoriel](https://www.html5rocks.com/en/tutorials/dnd/basics/)
  expliquant comment utiliser l'[API Drag and drop de HTML5](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API).

---

## Alternatives

* [vue.js](https://vuejs.org/)
* [Riot.js](http://riotjs.com/)
* [Ember.js](http://emberjs.com/)
* [Polymer](https://www.polymer-project.org/1.0/)

---

## Avantages

* Composants d'interface réutilisables et imbricables.
* Possibilité de stocker et modifier les informations à l'aide des états.
* On ne s'embête plus avec DOM et on gagne en performance grâce à Virtual DOM.
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

* Facile à prendre en main.
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
* [Article Wikipedia sur React](https://en.wikipedia.org/wiki/React_(JavaScript_library))
* [Documentation officielle de React](https://facebook.github.io/react-native/docs/getting-started.html)
* [Getting Started with React and JSX](https://www.sitepoint.com/getting-started-react-jsx/)
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

import React from 'react';

/*
 * Toggle comment between these two imports to use either
 * the object oriented version or the functionnal
 * version.
 */
import AnimalsList from './components/AnimalsList.js';
// import AnimalsList from './containers/AnimalsList.js';

const ANIMALS = [
  {name: 'Chocolate Lion'},
  {name: 'Bad Cat'},
  {name: 'Octopus'},
  {name: 'Dog'},
];

const App = props => {
  return (
    <div>
      <AnimalsList title="My Animals" animals={ANIMALS} />
    </div>
  );
};

export default App;

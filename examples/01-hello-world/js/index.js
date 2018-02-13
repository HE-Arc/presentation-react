import React from 'react';
import ReactDOM from 'react-dom';

/*
 * Toggle comment between these two imports to use either the object oriented
 * variant or the functionnal variant.
 */
// import App from './AppFunction.js';
import App from './AppClass.js';

ReactDOM.render(<App />, document.getElementById('root'));

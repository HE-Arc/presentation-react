import React from 'react';
import ReactDOM from 'react-dom';

const MyComponent = props => {
  return <div>{props.children}</div>;
};

const App = props => {
  return (
    <MyComponent>
      <h1>First child</h1>
      <p>Second child</p>
      <p>Third child</p>
    </MyComponent>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

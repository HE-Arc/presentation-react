import React from 'react';

const AnimalsList = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <ul>
        {props.animals.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>
      <p>The functionnal version rendered this list.</p>
    </div>
  );
};

export default AnimalsList;

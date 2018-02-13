import React, {Component} from 'react';

class AnimalsList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <ul>
          {this.props.animals.map((item, index) => {
            return <li key={index}>{item.name}</li>;
          })}
        </ul>
        <p>The class version rendered this list.</p>
      </div>
    );
  }
}

export default AnimalsList;

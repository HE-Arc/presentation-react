class AnimalsList extends React.Component {
    render() {
        const superAnimals = [
            'octocat',
            'fuzzybadger',
            'fictionnal rat'
        ];
        var i = 0;
        return (
            <div>
                <h1>Howdie!</h1>
                <p>Here are your animals!</p>
                <ul>
                    {superAnimals.map( animal => <li key={i++}>{animal}</li> )}
                </ul>
            </div>
        );
    }
}

ReactDOM.render(
    <AnimalsList />, document.getElementById('animals-list')
)

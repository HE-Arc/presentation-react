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

ReactDOM.render(
    <AnimalsList />, document.getElementById('animals-list')
)

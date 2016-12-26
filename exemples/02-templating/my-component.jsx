class MyComponent extends React.Component {
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
                    {superAnimals.map( animal => <li>{animal}</li> )}
                </ul>
            </div>
        );
    }
}
ReactDOM.render(
    <MyComponent />, document.getElementById('my-component')
)

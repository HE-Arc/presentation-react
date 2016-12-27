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

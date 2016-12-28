class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        console.log('You toggled me! How kind you are!<br />');
    }
    render() {
        return (
            <div>
                <h1>Event Handling</h1>
                <p>Enjoy that toggle button!</p>
                <label className="switch">
                    <input type="checkbox"></input>
                    <div className="slider round" onClick={this.handleClick}></div>
                </label>
            </div>
        );
    }
}

ReactDOM.render(
    <MyComponent />, document.getElementById('my-component')
);

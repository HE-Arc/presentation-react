class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            displayAnimalList: true,
        };
        this.animalsList = <AnimalsList />;
    }
    handleClick(e) {
        if (this.state.displayAnimalList == false) {
            this.animalsList = <AnimalsList />;
        }
        else {
            this.animalsList = <div></div>;
        }
        this.setState({
            displayAnimalList: !this.state.displayAnimalList
        });
    }
    render() {
        return (
            <div>
                <h1>Let's play {'with'} states and imbricate some components!</h1>
                <p>Use {'this switch'} button to display or hide the animals list.</p>
                <form>
                    <label className="switch">
                        <input type="checkbox" defaultChecked />
                        <div className="slider round" onClick={this.handleClick}></div>
                    </label>
                </form>
                {this.animalsList}
            </div>
        );
    }
}

ReactDOM.render(
    <MainComponent />, document.getElementById('main-component')
);

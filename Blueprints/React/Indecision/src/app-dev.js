class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.deleteOptions = this.deleteOptions.bind(this)
        this.deleteOption = this.deleteOption.bind(this)
        this.pickOption = this.pickOption.bind(this)
        this.addOption = this.addOption.bind(this)
        this.state = {
            options: props.options
        }
    }



    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)

            if (options) {
                this.setState((previousState) => ({ options: options }))
            }
        } catch (error) {
            console.log(error)
        }        
    }
    componentDidUpdate(previousProp, previousState) {
        if (previousState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        } 
    }


    deleteOptions() {
        this.setState(() =>  ({ options: [] })) //use parentheses when one-lining object returns
    }
    deleteOption(optionToRemove) {
        this.setState((previousState) => ({ options: previousState.options.filter((option) => option !== optionToRemove) }));
    }
    pickOption() {
        const index = Math.floor(Math.random() * this.state.options.length)
        alert(this.state.options[index])
    }
    addOption(option) {
        if (!option) {
            return 'Enter a valid value'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Option already exists'
        }

        this.setState((previousState) => ({ options: previousState.options.concat(option) }))
    }
    render() {
        const subtitle = 'Risky Life';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    pickOption={this.pickOption}
                />
                <Options 
                    options={this.state.options}
                    deleteOptions={this.deleteOptions}  
                    deleteOption={this.deleteOption}  
                />
                <AddOption 
                    addOption={this.addOption}
                />
            </div>
        );
    };
};
IndecisionApp.defaultProps = {
    options: []
}


const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};
Header.defaultProps = { // Another way
    title: 'Indecision'
}


const Action = (props) => {
    return (
        <div>
            <button 
                disabled={!props.hasOptions}
                onClick={props.pickOption}
            >
            
            What should I do?
            </button>
        </div>
    );
}


const Options = (props) => {
    return (
        <div>
            <button onClick={props.deleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Add an option to get started!</p>}
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        deleteOption={props.deleteOption}
                    />
                ))
            }
        </div>
    );
}


const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={(event) => {
                    props.deleteOption(props.optionText)
                }}
            >
                remove
            </button>
        </div>
    );
}


class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.addOption = this.addOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    addOption(event) {
        event.preventDefault();
        
        const option = event.target.elements.option.value.trim();
        const error = this.props.addOption(option)
        this.setState(() => ( {  error  } ))

        event.target.elements.option.value = ''
    };
    render() {
        return (
            <div>
            {this.state.error && <p>Error: {this.state.error}</p>}
                <form onSubmit={this.addOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    };
};


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
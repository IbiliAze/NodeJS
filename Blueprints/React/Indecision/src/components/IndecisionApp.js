import React from 'react';

import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';
import AddOption from './AddOption';


export default class IndecisionApp extends React.Component {
    state = {
        options: this.props.options,
        selectedOption: undefined
    };

    componentDidMount = () => {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState((previousState) => ({ options: options }));
            }
        } catch (error) {
            console.log(error)
        };     
    };
    componentDidUpdate = (previousProp, previousState) => {
        if (previousState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        };
    };

    deleteOptions = () => {
        this.setState(() =>  ({ options: [] })); //use parentheses when one-lining object returns
    };
    deleteOption = (optionToRemove) => {
        this.setState((previousState) => ({ options: previousState.options.filter((option) => option !== optionToRemove) }));
    };
    clearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    };
    pickOption = () => {
        const index = Math.floor(Math.random() * this.state.options.length);
        this.setState(() => ({
            selectedOption: this.state.options[index]
        }));
    };
    addOption = (option) => {
        if (!option) {
            return 'Enter a valid value';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Option already exists';
        };

        this.setState((previousState) => ({ options: previousState.options.concat(option) }));
    };
    render() {
        const subtitle = 'Risky Life';
        return (
            <div>
                <Header subtitle={subtitle}/>
                    <div className="container">
                        <Action 
                            hasOptions={this.state.options.length > 0}
                            pickOption={this.pickOption}
                        />
                        <div className="widget">
                            <Options 
                                options={this.state.options}
                                deleteOptions={this.deleteOptions}  
                                deleteOption={this.deleteOption}  
                            />
                            <AddOption 
                                addOption={this.addOption}
                            />
                            <OptionModal
                                selectedOption={this.state.selectedOption}
                                clearSelectedOption={this.clearSelectedOption}
                            >
                            </OptionModal>
                        </div>
                        
                    </div>
            </div>
        );
    };
};
IndecisionApp.defaultProps = {
    options: []
};
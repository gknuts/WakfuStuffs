import React, { Component } from 'react';
import CheckboxGroup from "./CustomCheckbox/CheckboxGroup";
import Checkbox from "./CustomCheckbox/Checkbox";


class TestCheckBox2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fruits: []
        }
    }

    handleChange = (event) => {
        this.setState({fruits: event})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.fruits)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <CheckboxGroup name="fruits" value={this.state.fruits} onChange={this.handleChange}>
                    <Checkbox value="Kiwi" label="Kiwi"/>
                    <Checkbox value="Ananas" label="Ananas"/>
                    <Checkbox value="Banana" label="Banana"/>
                </CheckboxGroup>
                    <input type="submit" value="Envoyer"/>
                </form>
            </div>
        )
    }
}

export default TestCheckBox2
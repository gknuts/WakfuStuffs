import React, { Component } from 'react';


class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked,
            value: this.props.value,
        }
    }

    handleChange = (event) => {
        let target = event.target;
        let value = target.checked
        console.log(target.value)
        this.setState({
          checked: value
        });
        this.props.onChange(this.state)
    }

    render() {
        return(
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id={this.props.id} value={this.props.value} checked={this.state.checked} onChange={this.handleChange}/>
                <label className="custom-control-label" htmlFor={this.props.id}>{this.props.label}</label>
            </div>
        )
    }
}

export default Checkbox
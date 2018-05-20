import React, { Component } from 'react';
import Checkbox from "./Checkbox";


class CheckboxGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            children: this.props.children,
            temp: [],
            values: this.props.value
        }
    }

    onChangeGroup = (event) => {
        let value = event.value
        let checked = !event.checked
        let position = this.state.values.indexOf(value)
        let table = this.state.values
        if(checked && position === -1){
            table.push(value)
        }else if(!checked && this.state.values.indexOf(value) !== -1){
            table.splice(position, 1)
        }
        this.setState({values: table})
        this.props.onChange(this.state.values)
    }

    componentDidMount() {
        let table = []
        this.setState({values: this.props.value})
        this.state.children.forEach((elm) =>{
            if(elm.type === Checkbox){
                let checked = false
                if(this.state.values.indexOf(elm.props.value) !== -1) checked=true
                let temp =  <Checkbox key={elm.props.value} value={elm.props.value} checked={checked} onChange={this.onChangeGroup} label={elm.props.label}/>
                table.push(temp)
                this.setState({temp: table})
            }else{
                table.push(elm)
            }
        })
    }

    render() {
        return(
            <React.Fragment>
                {this.state.temp}
            </React.Fragment>
        )
    }
}

export default CheckboxGroup
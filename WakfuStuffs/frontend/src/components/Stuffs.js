import React, { Component } from 'react';
import {connect} from 'react-redux';

class Stuffs extends Component{
    componentDidMount() {
        this.props.fetchStuffs();
    }

    buttonClicked = () => {
        console.log("clicked")
    }

    render() {
        return (
          <div>
            <div id="App">
                <button onClick={this.buttonClicked}>TEST</button>
                {console.log(this.props)}
                Value: {this.props.cpt}
                    {this.props.stuffs.map((elm, key) =>
                        <p key={key}>{elm.name} - {elm.quality}</p>
                    )}
            </div>
          </div>
        )
    }
}

export default connect()(Stuffs);
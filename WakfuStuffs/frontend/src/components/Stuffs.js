import React, { Component } from 'react';
import {connect} from 'react-redux';

class Stuffs extends Component{
    componentDidMount() {
        this.props.fetchStuffs();
    }

    render() {
        return (
          <div>
            <div id="App">
                {this.props.stuffs.map((elm, key) =>
                    <p key={key}>{elm.name} - {elm.quality}</p>
                )}
            </div>
          </div>
        )
    }
}

export default connect()(Stuffs);
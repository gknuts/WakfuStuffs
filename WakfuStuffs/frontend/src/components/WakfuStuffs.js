import React, { Component } from 'react';
import MainSection from '../containers/MainSection'


class WakfuStuffs extends Component {
    constructor() {
      super();
      this.state = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }

    render() {
        const { width, height } = this.state;
        const isMobile = (width <= 500 ||height <= 500);
        // the rest is the same...
        return(<MainSection mobile={isMobile}/>)
    }
}

export default WakfuStuffs
import React, {Component, Fragment} from 'react';
import MainSection from '../containers/MainSection'
import ModelDialog from './ModelDialog'


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
        return(
            <Fragment>
                <ModelDialog>Coucou ceci est une fenêtre modale</ModelDialog>
                <MainSection mobile={isMobile}/>
            </Fragment>
        )
    }
}

export default WakfuStuffs
import React, { Component } from 'react';
import {connect} from 'react-redux';

class Stuffs extends Component{
    componentDidMount() {
        this.props.actions.fetchStuffsLimits();
    }

    buttonClicked = () => {
        console.log("clicked")
    }

    get_url_small_image = (id_image) => {
        //return "https://s.ankama.com/www/static.ankama.com/wakfu/portal/game/item/42/"+id_image+".w40h40.png"
        return "/static/icones/"+id_image+".png"
    }

    get_url_image = (id_image) => {
        return "https://s.ankama.com/www/static.ankama.com/wakfu/portal/game/item/115/"+id_image+".png"
    }

    render() {
        return (
          <div>
            <div id="App">
                <button onClick={this.buttonClicked}>TEST</button>
                    {console.log(this.props.stuffs)}
                    {this.props.stuffs.map((elm, key) =>
                        <p key={key}>
                                <img src={this.get_url_small_image(elm.id_image)} alt={elm.name}/>
                            {elm.name} - {elm.type} - {elm.quality} - {elm.niveau} - {elm.bonus}
                        </p>
                    )}
            </div>
          </div>
        )
    }
}

export default connect()(Stuffs);
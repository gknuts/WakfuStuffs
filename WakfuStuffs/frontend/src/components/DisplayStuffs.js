import React, { Component } from 'react';
import {connect} from 'react-redux';
import DisplayJson from "./DisplayJson";
import { Table } from 'reactstrap';

class DisplayStuffs extends Component{
    componentDidMount() {
        this.props.actions.fetchStuffsLimits(this.props.page, this.props.size_page, this.props.myFilter);
    }

    get_image = (id_image) => {
        return "/static/icones/"+id_image+".png"
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
     if(prevProps.page !== this.props.page) {
        this.props.actions.fetchStuffsLimits(this.props.page, this.props.size_page, this.props.myFilter);
     }
     if(prevProps.myFilter !== this.props.myFilter) {
        this.props.actions.fetchStuffsLimits(this.props.page, this.props.size_page, this.props.myFilter);
     }
   }

   glue = (elm, id) =>{
        return(
            <React.Fragment key={elm}>
            {elm}<br/>
            </React.Fragment>
        )
   }

   getBonuses = (bonuses, id) => {
        if(bonuses !== "") {
            let splitted = bonuses.split(";")
            return (
                <React.Fragment key={id}>
                {splitted.map((elm) =>{
                    return this.glue(elm, id)
                })}
                </React.Fragment>
            )
        }else return ""
   }

    render() {
        return (
          <div>
            <div id="App">
                <DisplayJson {...this.props}/>
                    Nb résultat: {this.props.total}
                    <Table hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Qualité</th>
                        <th>Type</th>
                        <th>Niveau</th>
                        <th>Bonus</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.props.stuffs.map((elm, key) =>
                        <tr key={key}>
                            <th scope="row"><img src={this.get_image(elm.id_image)} alt={elm.name} height="50"/></th>
                            <td>{elm.name}</td>
                            <td>{elm.quality}</td>
                            <td>{elm.type}</td>
                            <td>{elm.niveau}</td>
                            <td>{this.getBonuses(elm.bonus, elm.id)}</td>
                        </tr>
                    )}
                    </tbody>
                    </Table>
            </div>
          </div>
        )
    }
}

export default connect()(DisplayStuffs);
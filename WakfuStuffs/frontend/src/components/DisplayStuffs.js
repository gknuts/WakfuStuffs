import React, { Component } from 'react';
import {connect} from 'react-redux';
import DisplayJson from "./DisplayJson";
import { Table } from 'reactstrap';

class DisplayStuffs extends Component{
    componentDidMount() {
        this.props.actions.fetchStuffsLimits(this.props.page);
    }

    get_image = (id_image) => {
        return "/static/icones/"+id_image+".png"
    }

    render() {
        return (
          <div>
            <div id="App">
                Page: {this.props.page}
                <DisplayJson {...this.props}/>
                    <Table striped>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Quality</th>
                        <th>Type</th>
                        <th>Niveau</th>
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
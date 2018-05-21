import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class DisplayJson extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {collapse: false};
    }

    toggle() {
        this.setState({collapse: !this.state.collapse});
    }

    render() {
        return (
            <div>
                <Button color="primary" onClick={this.toggle} style={{marginBottom: '1rem'}}>Props</Button>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardBody>
                            <div style={{margin: '1rem 0'}}>
                        <pre
                            style={{
                                background: '#f6f8fa',
                                fontSize: '1rem',
                                padding: '.5rem',
                            }}
                        >
                      <strong>props</strong> ={' '}
                            {JSON.stringify(this.props, null, 2)}
                    </pre>
                            </div>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        )
    }

}


export default connect()(DisplayJson);
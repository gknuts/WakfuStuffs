import React, { Component } from 'react';
import {Form, FormGroup, Label, Input, Button} from "reactstrap";


class SearchForm extends Component {
    render() {
        return(
            <div>
                <Form>
                    <FormGroup>
                        <Label for="name">Nom</Label>
                        <Input type="text" name="name" id="name" placeholder="Filtrer" />
                    </FormGroup>
                    <br/>
                    <FormGroup>
                        <Label for="niveauGauche">De</Label>
                        <Input type="select" name="niveauGauche" id="niveauGauche">
                            <option>0</option>
                            <option>10</option>
                            <option>20</option>
                            <option>30</option>
                            <option>40</option>
                            <option>50</option>
                            <option>60</option>
                            <option>70</option>
                            <option>80</option>
                            <option>90</option>
                            <option>100</option>
                            <option>110</option>
                            <option>120</option>
                            <option>130</option>
                            <option>140</option>
                            <option>150</option>
                            <option>160</option>
                            <option>170</option>
                            <option>180</option>
                            <option>190</option>
                            <option>200</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="niveauDroite">à</Label>
                        <Input type="select" name="niveauDroite" id="niveauDroite">
                            <option>0</option>
                            <option>10</option>
                            <option>20</option>
                            <option>30</option>
                            <option>40</option>
                            <option>50</option>
                            <option>60</option>
                            <option>70</option>
                            <option>80</option>
                            <option>90</option>
                            <option>100</option>
                            <option>110</option>
                            <option>120</option>
                            <option>130</option>
                            <option>140</option>
                            <option>150</option>
                            <option>160</option>
                            <option>170</option>
                            <option>180</option>
                            <option>190</option>
                            <option>200</option>
                        </Input>
                    </FormGroup>
                    <br/>
                    <Button>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default SearchForm
import React, { Component } from 'react';
import {Form, FormGroup, Label, Input, Button, CustomInput} from "reactstrap";


class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            niv_min: 0,
            niv_max: 200,
            Inhabituel: false,
            Rare: false,
            Mythique: false,
            Légendaire: false,
            Relique: false,
            PVP: false,
            Epique: false,
            Amulette: false,
            Anneau: false,
            Bottes: false,
            Cape: false,
            Casque: false,
            Ceinture: false,
            Epaulettes: false,
            Plastron: false,
        };
    }

    handleChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
          [name]: value
        });
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="name"><b>Nom</b></Label>
                        <Input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} placeholder="Filtrer" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="niv_min"><b>De</b></Label>
                        <Input type="text" name="niv_min" id="niv_min" value={this.state.niv_min} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="niv_max"><b>à</b></Label>
                        <Input type="text" name="niv_max" id="niv_max" value={this.state.niv_max} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup check>
                        <Label><b>Rareté</b></Label><br/>
                        <div>
                        <CustomInput type="checkbox" name="Inhabituel" id="Inhabituel" label="Inhabituel" value={this.state.Inhabituel} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="Rare" id="Rare" label="Rare" value={this.state.Rare} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="Mythique" id="Mythique" label="Mythique" value={this.state.Mythique} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="Légendaire" id="Légendaire" label="Légendaire" value={this.state.Légendaire} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="Relique" id="Relique" label="Relique" value={this.state.Relique} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="PVP" id="PVP" label="Souvenir" value={this.state.Souvenir} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="Epique" id="Epique" label="Epique" value={this.state.Epique} onChange={this.handleChange}/>
                        </div>
                    </FormGroup>
                    <FormGroup check>
                        <Label><b>Type</b></Label><br/>
                        <div>
                        <CustomInput type="checkbox" name="Amulette" id="Amulette" label="Amulette" value={this.state.Amulette} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="Anneau" id="Anneau" label="Anneau" value={this.state.Anneau} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="Bottes" id="Bottes" label="Bottes" value={this.state.Bottes} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="Cape" id="Cape" label="Cape" value={this.state.Cape} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="Casque" id="Casque" label="Casque" value={this.state.Casque} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="Ceinture" id="Ceinture" label="Ceinture" value={this.state.Ceinture} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="Epaulettes" id="Epaulettes" label="Epaulettes" value={this.state.Epaulettes} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="Plastron" id="Plastron" label="Plastron" value={this.state.Plastron} onChange={this.handleChange}/>
                        </div>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default SearchForm
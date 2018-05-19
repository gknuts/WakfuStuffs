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
        let filter = this.buildFilter()
        this.props.actions.changeFilter(filter)
    }

    buildFilterQuality = (filter) => {
        if(this.state.Inhabituel || this.state.Rare || this.state.Mythique || this.state.Légendaire || this.state.Relique || this.state.PVP || this.state.Epique){
            filter = filter + "&quality="
            if(this.state.Inhabituel) filter = filter + "Inhabituel,"
            if(this.state.Rare) filter = filter + "Rare,"
            if(this.state.Mythique) filter = filter + "Mythique,"
            if(this.state.Légendaire) filter = filter + "Légendaire,"
            if(this.state.Relique) filter = filter + "Relique,"
            if(this.state.PVP) filter = filter + "PVP,"
            if(this.state.Epique) filter = filter + "Epique,"
        }
        return filter
    }

    buildFilterType = (filter) => {
        if(this.state.Amulette || this.state.Anneau || this.state.Bottes || this.state.Cape || this.state.Casque || this.state.Ceinture || this.state.Epaulettes || this.state.Plastron){
            filter = filter + "&type="
            if(this.state.Amulette) filter = filter + "Amulette,"
            if(this.state.Anneau) filter = filter + "Anneau,"
            if(this.state.Bottes) filter = filter + "Bottes,"
            if(this.state.Cape) filter = filter + "Cape,"
            if(this.state.Casque) filter = filter + "Casque,"
            if(this.state.Ceinture) filter = filter + "Ceinture,"
            if(this.state.Epaulettes) filter = filter + "Epaulettes,"
            if(this.state.Plastron) filter = filter + "Plastron,"
        }
        return filter
    }

    buildFilter = () => {
        let filter = ''
        if(this.state.name !== ''){
            filter = filter + ("&name="+this.state.name)
        }
        if(this.state.niv_min !== 0){
            filter = filter + ("&niv_min="+this.state.niv_min)
        }
        if(this.state.niv_max !== 0){
            filter = filter + ("&niv_max="+this.state.niv_max)
        }
        filter = this.buildFilterQuality(filter)
        filter = this.buildFilterType(filter)

        return filter
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
                    <FormGroup check>
                        <Label><b>Type</b></Label><br/>
                        <div>
                        <CustomInput type="checkbox" name="ArtduBarda" id="ArtduBarda" label="Art du Barda" value={this.state.ArtduBarda} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="Controle" id="Controle" label="Contrôle" value={this.state.Controle} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="CoupCritique" id="CoupCritique" label="Coup Critique" value={this.state.CoupCritique} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="Esquive" id="Esquive" label="Esquive" value={this.state.Esquive} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="Initiative" id="Initiative" label="Initiative" value={this.state.Esquive} onChange={this.handleChange}/>
                        </div>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default SearchForm
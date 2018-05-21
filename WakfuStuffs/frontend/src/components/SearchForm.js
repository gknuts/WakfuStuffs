import React, { Component } from 'react';
import {Form, FormGroup, Label, Input, Button, CustomInput} from "reactstrap";
import CheckboxGroup from "./CustomCheckbox/CheckboxGroup";
import Checkbox from "./CustomCheckbox/Checkbox";
import DisplayJson from "./Utils/DisplayJson";


class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            niv_min: 0,
            niv_max: 200,

            qualities: [],
            types: [],
            bonuses: []
        };
    }

    handleChangeQuality = (value) => {
        this.setState({qualities: value})
    }

    handleChangeType = (value) => {
        this.setState({types: value})
    }

    handleChangeBonus = (value) => {
        this.setState({bonuses: value})
    }

    handleChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        if(name === "niv_min"){
            if(value === '') value=0
        }
        this.setState({
          [name]: value
        });
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        let filter = this.buildFilter()
        this.props.actions.changeFilter(filter)
        window.scrollTo(0, 0)
    }

    buildFilterQuality = (filter) => {
        if(this.state.qualities.length > 0){
            filter = filter + "&quality="
            this.state.qualities.forEach((quality) =>{
                filter = filter + quality + ","
            })
        }
        return filter
    }

    buildFilterType = (filter) => {
        if(this.state.types.length > 0){
            filter = filter + "&type="
            this.state.types.forEach((type) =>{
                filter = filter + type + ","
            })
        }
        return filter
    }

    buildFilterTag = (filter) => {
        if(this.state.bonuses.length > 0){
            filter = filter + "&tags="
            this.state.bonuses.forEach((bonus) =>{
                filter = filter + bonus + ","
            })
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
        filter = this.buildFilterTag(filter)

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
                            <CheckboxGroup name="qualities" value={this.state.qualities} onChange={this.handleChangeQuality}>
                                <Checkbox value="Inhabituel" label="Inhabituel"/>
                                <Checkbox value="Rare" label="Rare"/>
                                <Checkbox value="Mythique" label="Mythique"/>
                                <Checkbox value="Légendaire" label="Légendaire"/>
                                <Checkbox value="Relique" label="Relique"/>
                                <Checkbox value="PVP" label="PVP"/>
                                <Checkbox value="Epique" label="Epique"/>
                            </CheckboxGroup>
                        </div>
                    </FormGroup>
                    <FormGroup check>
                        <Label><b>Type</b></Label><br/>
                        <div>
                            <CheckboxGroup name="types" value={this.state.types} onChange={this.handleChangeType}>
                                <Checkbox value="Amulette" label="Amulette"/>
                                <Checkbox value="Anneau" label="Anneau"/>
                                <Checkbox value="Bottes" label="Bottes"/>
                                <Checkbox value="Cape" label="Cape"/>
                                <Checkbox value="Casque" label="Casque"/>
                                <Checkbox value="Ceinture" label="Ceinture"/>
                                <Checkbox value="Epaulettes" label="Epaulettes"/>
                                <Checkbox value="Plastron" label="Plastron"/>
                            </CheckboxGroup>
                        </div>
                    </FormGroup>
                    <FormGroup check>
                        <Label><b>Bonus</b></Label><br/>
                        <div>
                            <CheckboxGroup name="types" value={this.state.bonuses} onChange={this.handleChangeBonus}>
                                <Checkbox value="Art du Barda" label="Art du Barda"/>
                                <Checkbox value="Contrôle" label="Contrôle"/>
                                <Checkbox value="Coup Critique" label="Coup Critique"/>
                                <Checkbox value="Esquive" label="Esquive"/>
                                <Checkbox value="Initiative" label="Initiative"/>
                                <Checkbox value="Maîtrise Élémentaire" label="Maîtrise Élémentaire"/>
                                <Checkbox value="Maîtrise Air" label="Maîtrise Air"/>
                                <Checkbox value="Maîtrise Eau" label="Maîtrise Eau"/>
                                <Checkbox value="Maîtrise Feu" label="Maîtrise Feu"/>
                                <Checkbox value="Maîtrise Terre" label="Maîtrise Terre"/>
                                <Checkbox value="_Maîtrise sur X élément aléatoire_Maîtrise sur X éléments aléatoires" label="Maîtrise sur X éléments aléatoires"/>
                                <Checkbox value="Maîtrise Berserk" label="Maîtrise Berserk"/>
                                <Checkbox value="Maîtrise Critique" label="Maîtrise Critique"/>
                                <Checkbox value="Maîtrise Distance" label="Maîtrise Distance"/>
                                <Checkbox value="Maîtrise Zone" label="Maîtrise Zone"/>
                                <Checkbox value="Maîtrise Dos" label="Maîtrise Dos"/>
                                <Checkbox value="Maîtrise Monocible" label="Maîtrise Monocible"/>
                                <Checkbox value="Maîtrise Mêlée" label="Maîtrise Mêlée"/>
                                <Checkbox value="Maîtrise Soin" label="Maîtrise Soin"/>
                                <Checkbox value="Niveau aux sorts Air" label="Niveau aux sorts Air"/>
                                <Checkbox value="Niveau aux sorts Eau" label="Niveau aux sorts Eau"/>
                                <Checkbox value="Niveau aux sorts Feu" label="Niveau aux sorts Feu"/>
                                <Checkbox value="Niveau aux sorts Terre" label="Niveau aux sorts Terre"/>
                                <Checkbox value="Niveau aux sorts Élémentaire" label="Niveau aux sorts Élémentaire"/>
                                <Checkbox value="_PA_PA max" label="PA"/>
                                <Checkbox value="_PM_PM max" label="PM"/>
                                <Checkbox value="_PW_PW max" label="PW"/>
                                <Checkbox value="Parade" label="Parade"/>
                                <Checkbox value="_Point de Vie_Points de Vie" label="Points de Vie"/>
                                <Checkbox value="Portée" label="Portée"/>
                                <Checkbox value="Prospection" label="Prospection"/>
                                <Checkbox value="Résistance Élémentaire" label="Résistance Élémentaire"/>
                                <Checkbox value="Résistance Air" label="Résistance Air"/>
                                <Checkbox value="Résistance Eau" label="Résistance Eau"/>
                                <Checkbox value="Résistance Feu" label="Résistance Feu"/>
                                <Checkbox value="Résistance Terre" label="Résistance Terre"/>
                                <Checkbox value="Résistance Critique" label="Résistance Critique"/>
                                <Checkbox value="Résistance Dos" label="Résistance Dos"/>
                                <Checkbox value="Sagesse" label="Sagesse"/>
                                <Checkbox value="Tacle" label="Tacle"/>
                                <Checkbox value="Volonté" label="Volonté"/>
                            </CheckboxGroup>
                        </div>
                    </FormGroup><br/>
                    <div align="center"><Button>Filtrer</Button></div>
                </Form>
            </div>
        )
    }
}

export default SearchForm
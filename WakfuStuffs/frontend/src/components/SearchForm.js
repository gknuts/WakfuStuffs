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
            ArtDuBarda: false,
            Controle: false,
            CoupCritique: false,
            Esquive: false,
            Initiative: false,
            MaitriseAir: false,
            MaitriseEau: false,
            MaitriseFeu: false,
            MaitriseTerre: false,
            MaitriseAlea: false,
            MaitriseBerserk: false,
            MaitriseCritique: false,
            MaitriseDistance: false,
            MaitriseZone: false,
            MaitriseDos: false,
            MaitriseMelee: false,
            MaitriseSoin: false,
            MaitriseElem: false,
            NivAir: false,
            NivEau: false,
            NivFeu: false,
            NivTerre: false,
            NivElem: false,
            PA: false,
            PM: false,
            PW: false,
            Parade: false,
            Pdv: false,
            Portee: false,
            Prospection: false,
            ResAir: false,
            ResEau: false,
            ResFeu: false,
            ResTerre: false,
            ResCrit: false,
            ResDos: false,
            ResElem: false,
            Sagesse: false,
            Tacle: false,
            Volonte: false,
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

    buildFilterTag = (filter) => {
            if(
            this.state.ArtDuBarda ||
            this.state.Controle ||
            this.state.CoupCritique ||
            this.state.Esquive ||
            this.state.Initiative ||
            this.state.MaitriseAir ||
            this.state.MaitriseEau ||
            this.state.MaitriseFeu ||
            this.state.MaitriseTerre ||
            this.state.MaitriseAlea ||
            this.state.MaitriseBerserk ||
            this.state.MaitriseCritique ||
            this.state.MaitriseDistance ||
            this.state.MaitriseZone ||
            this.state.MaitriseDos ||
            this.state.MaitriseMelee ||
            this.state.MaitriseSoin ||
            this.state.MaitriseElem ||
            this.state.NivAir ||
            this.state.NivEau ||
            this.state.NivFeu ||
            this.state.NivTerre ||
            this.state.NivElem ||
            this.state.PA ||
            this.state.PM ||
            this.state.PW ||
            this.state.Parade ||
            this.state.Pdv ||
            this.state.Portee ||
            this.state.Prospection ||
            this.state.ResAir ||
            this.state.ResEau ||
            this.state.ResFeu ||
            this.state.ResTerre ||
            this.state.ResCrit ||
            this.state.ResDos ||
            this.state.ResElem ||
            this.state.Sagesse ||
            this.state.Tacle ||
            this.state.Volonte){
                filter = filter + "&tags="

                if(this.state.ArtDuBarda) filter = filter + "Art du Barda,"
                if(this.state.Controle) filter = filter + "Contrôle,"
                if(this.state.CoupCritique) filter = filter + "Coup Critique,"
                if(this.state.Esquive) filter = filter + "Esquive,"
                if(this.state.Initiative) filter = filter + "Initiative,"
                if(this.state.MaitriseAir){
                    filter = filter + "Maîtrise Air"
                    filter = filter + "_Maîtrise Élémentaire"
                    filter = filter + "_Maîtrise sur X élément aléatoire"
                    filter = filter + "_Maîtrise sur X éléments aléatoires,"
                }
                if(this.state.MaitriseEau){
                    filter = filter + "Maîtrise Eau"
                    filter = filter + "_Maîtrise Élémentaire"
                    filter = filter + "_Maîtrise sur X élément aléatoire"
                    filter = filter + "_Maîtrise sur X éléments aléatoires,"
                }
                if(this.state.MaitriseFeu){
                    filter = filter + "Maîtrise Feu,"
                    filter = filter + "_Maîtrise Élémentaire"
                    filter = filter + "_Maîtrise sur X élément aléatoire"
                    filter = filter + "_Maîtrise sur X éléments aléatoires,"
                }
                if(this.state.MaitriseTerre){
                    filter = filter + "Maîtrise Terre,"
                    filter = filter + "_Maîtrise Élémentaire"
                    filter = filter + "_Maîtrise sur X élément aléatoire"
                    filter = filter + "_Maîtrise sur X éléments aléatoires,"
                }
                if(this.state.MaitriseAlea){
                    filter = filter + "_Maîtrise Élémentaire"
                    filter = filter + "_Maîtrise sur X élément aléatoire"
                    filter = filter + "_Maîtrise sur X éléments aléatoires,"
                }
                if(this.state.MaitriseBerserk) filter = filter + "Maîtrise Berserk,"
                if(this.state.MaitriseCritique) filter = filter + "Maîtrise Critique,"
                if(this.state.MaitriseDistance) filter = filter + "Maîtrise Distance,"
                if(this.state.MaitriseZone) filter = filter + "Maîtrise Zone,"
                if(this.state.MaitriseDos) filter = filter + "Maîtrise Dos,"
                if(this.state.MaitriseMelee) filter = filter + "Maîtrise Mêlée,"
                if(this.state.MaitriseSoin) filter = filter + "Maîtrise Soin,"
                if(this.state.MaitriseElem) filter = filter + "Maîtrise Élémentaire,"
                if(this.state.NivAir){
                    filter = filter + "Niv. aux sorts élémentaires,"
                }
                if(this.state.NivEau){
                    filter = filter + "Niv. aux sorts élémentaires,"
                }
                if(this.state.NivFeu){
                    filter = filter + "Niv. aux sorts Feu"
                    filter = filter + "_Niv. aux sorts élémentaires,"
                }
                if(this.state.NivTerre){
                    filter = filter + "Niv. aux sorts Terre"
                    filter = filter + "_Niv. aux sorts élémentaires,"
                }
                if(this.state.NivElem) filter = filter + "Niv. aux sorts élémentaires,"
                if(this.state.PA){
                    filter = filter + "PA"
                    filter = filter + "_PA max,"
                }
                if(this.state.PM){
                    filter = filter + "PM"
                    filter = filter + "_PM max,"
                }
                if(this.state.PW){
                    filter = filter + "PW"
                    filter = filter + "_PW max,"
                }
                if(this.state.Parade) filter = filter + "Parade,"
                if(this.state.Pdv){
                    filter = filter + "Point de Vie"
                    filter = filter + "_Points de Vie,"
                }
                if(this.state.Portee) filter = filter + "Portée,"
                if(this.state.Prospection) filter = filter + "Prospection,"
                if(this.state.ResAir){
                    filter = filter + "Résistance Air"
                    filter = filter + "_Résistance Élémentaire"
                    filter = filter + "_Résistance sur 1 élément aléatoire"
                    filter = filter + "_Résistance sur 2 éléments aléatoires"
                    filter = filter + "_Résistance sur 3 éléments aléatoires"
                }
                if(this.state.ResEau){
                    filter = filter + "Résistance Eau"
                    filter = filter + "_Résistance Élémentaire"
                    filter = filter + "_Résistance sur 1 élément aléatoire"
                    filter = filter + "_Résistance sur 2 éléments aléatoires"
                    filter = filter + "_Résistance sur 3 éléments aléatoires"
                }
                if(this.state.ResFeu){
                    filter = filter + "Résistance Feu"
                    filter = filter + "_Résistance Élémentaire"
                    filter = filter + "_Résistance sur 1 élément aléatoire"
                    filter = filter + "_Résistance sur 2 éléments aléatoires"
                    filter = filter + "_Résistance sur 3 éléments aléatoires"
                }
                if(this.state.ResTerre){
                    filter = filter + "Résistance Terre,"
                    filter = filter + "_Résistance Élémentaire,"
                    filter = filter + "_Résistance sur 1 élément aléatoire,"
                    filter = filter + "_Résistance sur 2 éléments aléatoires,"
                    filter = filter + "_Résistance sur 3 éléments aléatoires,"
                }
                if(this.state.ResCrit) filter = filter + "Résistance Critique,"
                if(this.state.ResDos) filter = filter + "Résistance Dos,"
                if(this.state.ResElem) filter = filter + "Résistance Élémentaire,"
                if(this.state.Sagesse) filter = filter + "Sagesse,"
                if(this.state.Tacle) filter = filter + "Tacle,"
                if(this.state.Volonte) filter = filter + "Volonté,"

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

        console.log("filterTemp: " + filter)

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
                        <Label><b>Bonus</b></Label><br/>
                        <div>
                        <CustomInput type="checkbox" name="ArtDuBarda" id="ArtDuBarda" label="Art du Barda" value={this.state.ArtDuBarda} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="Controle" id="Controle" label="Contrôle" value={this.state.Controle} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="CoupCritique" id="CoupCritique" label="Coup Critique" value={this.state.CoupCritique} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="Esquive" id="Esquive" label="Esquive" value={this.state.Esquive} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="Initiative" id="Initiative" label="Initiative" value={this.state.Esquive} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="MaitriseAir" id="MaitriseAir" label="Maîtrise Air" value={this.state.MaitriseAir} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="MaitriseEau" id="MaitriseEau" label="Maîtrise Eau" value={this.state.MaitriseEau} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="MaitriseFeu" id="MaitriseFeu" label="Maîtrise Feu" value={this.state.MaitriseFeu} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="MaitriseTerre" id="MaitriseTerre" label="Maîtrise Terre" value={this.state.MaitriseTerre} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="MaitriseAlea" id="MaitriseAlea" label="Maîtrise sur X éléments aléatoires" value={this.state.MaitriseAlea} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="MaitriseBerserk" id="MaitriseBerserk" label="Maîtrise Berserk" value={this.state.MaitriseBerserk} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="MaitriseCritique" id="MaitriseCritique" label="Maîtrise Critique" value={this.state.MaitriseCritique} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="MaitriseDistance" id="MaitriseDistance" label="Maîtrise Distance" value={this.state.MaitriseDistance} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="MaitriseZone" id="MaitriseZone" label="Maîtrise Zone" value={this.state.MaitriseZone} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="MaitriseDos" id="MaitriseDos" label="Maîtrise Dos" value={this.state.MaitriseDos} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="MaitriseMono" id="MaitriseMono" label="Maîtrise Monocible" value={this.state.MaitriseMono} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="MaitriseMelee" id="MaitriseMelee" label="Maîtrise Mêlée" value={this.state.MaitriseMelee} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="MaitriseSoin" id="MaitriseSoin" label="Maîtrise Soin" value={this.state.MaitriseSoin} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="MaitriseElem" id="MaitriseElem" label="Maîtrise Élémentaire" value={this.state.MaitriseElem} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="NivEau" id="NivAir" label="Niveau aux sorts Air" value={this.state.NivAir} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="NivEau" id="NivEau" label="Niveau aux sorts Eau" value={this.state.NivEau} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="NivFeu" id="NivFeu" label="Niveau aux sorts Feu" value={this.state.NivFeu} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="NivTerre" id="NivTerre" label="Niveau aux sorts Terre" value={this.state.NivTerre} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="NivElem" id="NivElem" label="Niveau aux sorts Élémentaire" value={this.state.NivElem} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="PA" id="PA" label="PA" value={this.state.PA} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="PM" id="PM" label="PM" value={this.state.PM} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="PW" id="PW" label="PW" value={this.state.PW} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="Parade" id="Parade" label="Parade" value={this.state.Parade} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="Pdv" id="Pdv" label="Points de Vie" value={this.state.Pdv} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="Portee" id="Portee" label="Portée" value={this.state.Portee} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="Prospection" id="Prospection" label="Prospection" value={this.state.Prospection} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="ResAir" id="ResAir" label="Résistance Air" value={this.state.ResAir} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="ResEau" id="ResEau" label="Résistance Eau" value={this.state.ResEau} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="ResFeu" id="ResFeu" label="Résistance Feu" value={this.state.ResFeu} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="ResTerre" id="ResTerre" label="Résistance Terre" value={this.state.ResTerre} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="ResCrit" id="ResCrit" label="Résistance Critique" value={this.state.ResCrit} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="ResDos" id="ResDos" label="Résistance Dos" value={this.state.ResDos} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="ResElem" id="ResElem" label="Résistance Élémentaire" value={this.state.ResElem} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="Sagesse" id="Sagesse" label="Sagesse" value={this.state.Sagesse} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="Tacle" id="Tacle" label="Tacle" value={this.state.Tacle} onChange={this.handleChange}/>
                        <CustomInput type="checkbox" name="Volonte" id="Volonte" label="Volonté" value={this.state.Volonte} onChange={this.handleChange}/>
                        </div>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default SearchForm
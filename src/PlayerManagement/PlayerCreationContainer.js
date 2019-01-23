/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import { PlayerCreationForm } from './PlayerCreationForm';
import axios from "axios";
import playerService from "../DatabaseServices/PlayerDbService";

export class PlayerCreationContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: ""};
        this.onNameChange = this.onNameChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onNameChange(e) {
        const input = e.target.value;

        this.setState({name: input});
    }

    onSubmit() {
//        this.postPlayer(this.state.name);
        playerService.postPlayer(this.state.name, this.onCreationSuccess, this.onCreationError);
    }

    onCreationSuccess() {
        alert("Success Callback");
        //TODO: Implement form wipe and PlayerListCOntainer rerender
    }

    onCreationError() {

    }

    render() {
        return(
                (<div>
                    <div>Create Players here.</div>
                    < PlayerCreationForm onChange={this.onNameChange} onSubmit={this.onSubmit} />
                </div>)
                );
    }
}


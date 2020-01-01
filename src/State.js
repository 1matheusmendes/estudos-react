import React, { Component } from 'react';

export default class State extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Matheus',
            age: 22
        }

        console.log(this.state);
    }

    render(){
        const {name, age} = this.state;
        return(
            <div>
            <h1>State</h1>
            <p> { name } </p>
            <p> { age } </p>
            </div>
        );
    }
}
import React, { Component } from 'react';

export default class Events extends Component{
    constructor(props){
        super(props);
        this.state = {
            clicked: 0
        }
    }

    clickMethod = () => {
        console.log('teimoso inicio', this.state.clicked);
        this.setState({
            clicked: this.state.clicked + 1
        });
        console.log('teimoso fim', this.state.clicked);
    }
    render(){
        return(
            <div>
                <button onClick={this.clickMethod} type="button"> NÃO CLICA AQUI </button>
            </div>
        );
    }
}
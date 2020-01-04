import React, { Component } from 'react';

class Clock2 extends Component {
    constructor(props){
        super(props);

        this.state = {
            time: new Date().toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true 
            })
        }
    }

    componentDidMount(){
        this.time = setInterval(() => this.updateClock(), 1000);
    }

    componentWillMount(){
        clearInterval(this.time);
    }

    updateClock(){
        this.setState({
            time: new Date().toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true 
            })
        });
    }
    render(){
        const {time} = this.state;
        return (
            <h1 className="center" style={{textAlign: "center", paddingTop:"10%", fontSize:"200px"}} >{time}</h1>
        );
    }
}

export default Clock2;
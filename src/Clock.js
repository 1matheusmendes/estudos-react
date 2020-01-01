import React, { Component } from 'react';

class Clock extends Component {
    render(){
        return (
        <h1>
            {
                new Date()
                .toLocaleString('en-US',{
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true    
                })
            }
        </h1>
        );
    }
}

export default Clock;
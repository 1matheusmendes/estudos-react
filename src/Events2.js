import React, {Component} from 'react';

export default class Events2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            data:[]
        };
    }
    
    lidarMudancas =(event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })

        //console.log('STATE', this.state);
    }

    inserirData =() =>{
        const arr = this.state.data;
        arr.push(this.state.name);
        this.setState({
            name:'',
            data: arr
        });
        console.log(this.state);
    }
    render(){
        const {data} = this.state;
        return(
            <div>
                <input type="text" onChange={this.lidarMudancas} name="name" placeholder="Entre com seu nome..." />
                <button type="button" onClick={this.inserirData}>Ok!</button>
                <ul>
                    {data.map(item=>(
                        <li key={item}> {item}</li>
                    ))
                    }
                </ul>
            </div>
        )
    }
}
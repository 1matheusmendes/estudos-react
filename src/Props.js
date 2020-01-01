import React, { Component } from 'react';
import Panel from './Panel';
class Props extends Component {
    constructor(props){
    super(props)    
        const{attr, attr2, attr3} = this.props;
        console.log(attr, attr2, attr3);
    }
    render(){
        const{attr, attr2, attr3} = this.props;
        return (
            <div>
                {attr === 'p' ? <p>PROPS</p> : <h1>PROPS</h1>}
                <Panel headercolor="Red" bordercolor="blue" headertext="Isso e um cabecalho" data="Scholl of net" ></Panel> 
                <Panel headercolor="gray" bordercolor="purple" headertext="Isso e um cabecalho" data="Scholl of net" ></Panel>              
            </div>
        );
    }
}

export default Props;
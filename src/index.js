import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// eslint-disable-next-line
import App from './App';
// eslint-disable-next-line
import Hello from './Hello';
import Clock2 from './Clock2';
import Clock from './Clock';
import Props from './Props';
import State from './State';
import Events from './Events';

import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<Props attr="span" attr2="VALUE2" attr3="VALUE3" />, document.getElementById('root'));
ReactDOM.render(<Events />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

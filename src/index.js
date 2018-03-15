import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


//Store 
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import { thunk } from 'redux-thunk'; 

//Reducers 
import reducers from './reducers'; 



let store = createStore ( reducers, applyMiddleware(thunk))


ReactDOM.render(<Provider store={store}> <App /> </Provider> , document.getElementById('root'));
registerServiceWorker();


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
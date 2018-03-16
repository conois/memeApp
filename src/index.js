import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index.js";

//Component
import Boxcon from './container/box-container.js';
import BoxGif from './component/box-gift.js'; 
import Title from './component/title.js'; 
import Footer from './component/footer.js';
import Comment from './component/comment.js' 
import './index.css';

let store = createStore(reducers, applyMiddleware(thunk))

class App extends React.Component{
    render(){
        return(
	        <div>
	        	<Title />
	        	<div className="contApp"> 
			        <div className="lateral-left">	
			          <Boxcon></Boxcon>
			        </div> 
		        	<BoxGif></BoxGif>
			        <div className= "lateral-right">	
			          <Comment></Comment>
			        </div>
		        </div> 
		        <Footer />

	        </div> 
        )
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));